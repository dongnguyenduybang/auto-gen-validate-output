import WebSocket from 'ws';

export class WebSocketEventCollector {
  private wsActor: WebSocket | null = null;
  private wsRecipient: WebSocket | null = null;
  private actorEvents: any[] = [];
  private recipientEvents: any[] = [];
  private isCollecting: boolean = false;

  constructor(wsActor: WebSocket, wsRecipient: WebSocket) {
    if (wsActor.readyState !== WebSocket.OPEN || wsRecipient.readyState !== WebSocket.OPEN) {
      throw new Error('WebSocket connections must be OPEN before creating collector');
    }
    this.wsActor = wsActor;
    this.wsRecipient = wsRecipient;
    this.startCollecting();
  }

  private startCollecting(): void {
    if (!this.wsActor || !this.wsRecipient) {
      console.error('WebSocket instances are not provided');
      return;
    }

    this.isCollecting = true;

    const heartbeatInterval = setInterval(() => {
      if (this.wsActor?.readyState === WebSocket.OPEN) {
        this.wsActor.send(JSON.stringify({ type: 'ping' }));
        console.log('Sent heartbeat to wsActor');
      }
      if (this.wsRecipient?.readyState === WebSocket.OPEN) {
        this.wsRecipient.send(JSON.stringify({ type: 'ping' }));
        console.log('Sent heartbeat to wsRecipient');
      }
    }, 30000);

    // Thu thập sự kiện từ wsActor
    this.wsActor.on('message', (msg) => {
      try {
        const message = JSON.parse(msg.toString());
        console.log(`Received wsActor event:`, message);
        this.actorEvents.push(message);
      } catch (error) {
        console.error(`Failed to parse wsActor message:`, error);
      }
    });

    this.wsActor.on('error', (error) => {
      console.error(`wsActor error:`, error);
      this.isCollecting = false;
    });


    this.wsActor.on('close', () => {
      console.log(`wsActor closed, readyState:`, this.wsActor?.readyState);
      this.isCollecting = false;
      clearInterval(heartbeatInterval);
    });

    // Thu thập sự kiện từ wsRecipient
    this.wsRecipient.on('message', (msg) => {
      try {
        const message = JSON.parse(msg.toString());
        console.log(`Received wsRecipient event:`, message);
        this.recipientEvents.push(message);
      } catch (error) {
        console.error(`Failed to parse wsRecipient message:`, error);
      }
    });

    this.wsRecipient.on('error', (error) => {
      console.error(`wsRecipient error:`, error);
      this.isCollecting = false;
    });

    this.wsRecipient.on('close', () => {
      console.log(`wsRecipient closed, readyState:`, this.wsRecipient?.readyState);
      this.isCollecting = false;
      clearInterval(heartbeatInterval);
    });
  }

  public async collectEventsAfterAction(timeoutMs: number = 20000, retries: number = 5): Promise<{ actorEvents: any[], recipientEvents: any[] }> {
    // Đảm bảo WebSocket vẫn mở
    if (!this.isWebSocketReady()) {
      throw new Error('WebSocket connections are not ready');
    }

    // Reset bộ đệm events trước khi thu thập
    const initialActorEvents = [...this.actorEvents];
    const initialRecipientEvents = [...this.recipientEvents];
    console.log(`Initial actorEvents:`, initialActorEvents);
    console.log(`Initial recipientEvents:`, initialRecipientEvents);
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        this.cleanup();
        // Chỉ trả về các sự kiện mới
        const newActorEvents = this.actorEvents.slice(initialActorEvents.length);
        const newRecipientEvents = this.recipientEvents.slice(initialRecipientEvents.length);
        resolve({
          actorEvents: newActorEvents,
          recipientEvents: newRecipientEvents
        });
      }, timeoutMs);
  
      const checkEvents = () => {
        const newActorEvents = this.actorEvents.slice(initialActorEvents.length);
        const newRecipientEvents = this.recipientEvents.slice(initialRecipientEvents.length);
        if (newActorEvents.length > 0 || newRecipientEvents.length > 0) {
          clearTimeout(timeoutId);
          this.cleanup();
          resolve({
            actorEvents: newActorEvents,
            recipientEvents: newRecipientEvents
          });
        }
      };
  
      const intervalId = setInterval(checkEvents, 1000);
  
      this.cleanup = () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    });
  }
  cleanup() {
    throw new Error('Method not implemented.');
  }

  private isWebSocketReady(): boolean {
    return this.wsActor?.readyState === WebSocket.OPEN && 
           this.wsRecipient?.readyState === WebSocket.OPEN;
  }
  public getAllEvents(): { actorEvents: any[], recipientEvents: any[] } {
    return { actorEvents: [...this.actorEvents], recipientEvents: [...this.recipientEvents] };
  }

  public stop(): void {
    this.isCollecting = false;
    if (this.wsActor && this.wsActor.readyState === WebSocket.OPEN) {
      this.wsActor.close();
      console.log('Closed wsActor WebSocket');
    }
    if (this.wsRecipient && this.wsRecipient.readyState === WebSocket.OPEN) {
      this.wsRecipient.close();
      console.log('Closed wsRecipient WebSocket');
    }
    this.actorEvents = [];
    this.recipientEvents = [];
  }
}