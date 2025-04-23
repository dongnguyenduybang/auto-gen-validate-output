import WebSocket from 'ws';

export class WebSocketEventCollector {
  private wsActor: WebSocket | null = null;
  private wsRecipient: WebSocket | null = null;
  private actorEvents: any[] = [];
  private recipientEvents: any[] = [];
  private isCollecting: boolean = false;
  private cleanup: (() => void) | null = null;
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

    // const heartbeatInterval = setInterval(() => {
    //   if (this.wsActor?.readyState === WebSocket.OPEN) {
    //     this.wsActor.send(JSON.stringify({ type: 'ping' }));
    //     console.log('Sent heartbeat to wsActor');
    //   }
    //   if (this.wsRecipient?.readyState === WebSocket.OPEN) {
    //     this.wsRecipient.send(JSON.stringify({ type: 'ping' }));
    //     console.log('Sent heartbeat to wsRecipient');
    //   }
    // }, 30000);

    // Thu thập sự kiện từ wsActor
    this.wsActor.on('message', (msg) => {
      try {
        const message = JSON.parse(msg.toString());
        // console.log(`Received wsActor event:`, message);
        this.actorEvents.push(message);
      } catch (error) {
        console.error(`Failed to parse wsActor message:`, error);
      }
    });

    this.wsActor.on('error', (error) => {
      console.error(`wsActor error:`, error);
      this.isCollecting = false;
    });

    // Thu thập sự kiện từ wsRecipient
    this.wsRecipient.on('message', (msg) => {
      try {
        const message = JSON.parse(msg.toString());
        // console.log(`Received wsRecipient event:`, message);
        this.recipientEvents.push(message);
      } catch (error) {
        console.error(`Failed to parse wsRecipient message:`, error);
      }
    });

    this.wsRecipient.on('error', (error) => {
      console.error(`wsRecipient error:`, error);
      this.isCollecting = false;
    });
  }

  public async collectEventsAfterAction(
    timeoutMs: number = 5000,
    retries: number = 5
  ): Promise<{ actorEvents: any[], recipientEvents: any[] }> {
  
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        this.cleanup();
        // Trả về toàn bộ sự kiện
        const actorEvents = [...this.actorEvents];
        const recipientEvents = [...this.recipientEvents];
        resolve({
          actorEvents,
          recipientEvents
        });
      }, timeoutMs);
  
      const checkEvents = () => {
        // Kiểm tra xem có sự kiện nào cần xử lý không
        const actorEvents = [...this.actorEvents];
        const recipientEvents = [...this.recipientEvents];
  
        if (actorEvents.length > 0 || recipientEvents.length > 0) {
          clearTimeout(timeoutId);
          this.cleanup();
          // console.log('Events found, resolving:', { actorEvents, recipientEvents });
          resolve({
            actorEvents,
            recipientEvents
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