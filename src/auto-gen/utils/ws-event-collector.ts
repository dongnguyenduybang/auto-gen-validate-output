// import WebSocket from 'ws';

// export class WebSocketEventCollector {
//   private wsActor: WebSocket | null = null;
//   private wsRecipient: WebSocket | null = null;
//   private actorEvents: any[] = [];
//   private recipientEvents: any[] = [];
//   private isCollecting: boolean = false;
//   private cleanup: (() => void) | null = null;
//   constructor(wsActor: WebSocket, wsRecipient: WebSocket) {
//     if (wsActor.readyState !== WebSocket.OPEN || wsRecipient.readyState !== WebSocket.OPEN) {
//       throw new Error('WebSocket connections must be OPEN before creating collector');
//     }
//     this.wsActor = wsActor;
//     this.wsRecipient = wsRecipient;
//     this.startCollecting();
//   }

//   private startCollecting(): void {
//     if (!this.wsActor || !this.wsRecipient) {
//       console.error('WebSocket instances are not provided');
//       return;
//     }

//     this.isCollecting = true;

//     // const heartbeatInterval = setInterval(() => {
//     //   if (this.wsActor?.readyState === WebSocket.OPEN) {
//     //     this.wsActor.send(JSON.stringify({ type: 'ping' }));
//     //     console.log('Sent heartbeat to wsActor');
//     //   }
//     //   if (this.wsRecipient?.readyState === WebSocket.OPEN) {
//     //     this.wsRecipient.send(JSON.stringify({ type: 'ping' }));
//     //     console.log('Sent heartbeat to wsRecipient');
//     //   }
//     // }, 30000);

//     // Thu thập sự kiện từ wsActor
//     this.wsActor.on('message', (msg) => {
//       try {
//         const message = JSON.parse(msg.toString());
//         // console.log(`Received wsActor event:`, message);
//         this.actorEvents.push(message);
//       } catch (error) {
//         console.error(`Failed to parse wsActor message:`, error);
//       }
//     });

//     this.wsActor.on('error', (error) => {
//       console.error(`wsActor error:`, error);
//       this.isCollecting = false;
//     });

//     // Thu thập sự kiện từ wsRecipient
//     this.wsRecipient.on('message', (msg) => {
//       try {
//         const message = JSON.parse(msg.toString());
//         // console.log(`Received wsRecipient event:`, message);
//         this.recipientEvents.push(message);
//       } catch (error) {
//         console.error(`Failed to parse wsRecipient message:`, error);
//       }
//     });

//     this.wsRecipient.on('error', (error) => {
//       console.error(`wsRecipient error:`, error);
//       this.isCollecting = false;
//     });
//   }

//   public async collectEventsAfterAction(
//     timeoutMs: number = 5000,
//     retries: number = 5
//   ): Promise<{ actorEvents: any[], recipientEvents: any[] }> {

//     return new Promise((resolve, reject) => {
//       const timeoutId = setTimeout(() => {
//         this.cleanup();
//         // Trả về toàn bộ sự kiện
//         const actorEvents = [...this.actorEvents];
//         const recipientEvents = [...this.recipientEvents];
//         resolve({
//           actorEvents,
//           recipientEvents
//         });
//       }, timeoutMs);

//       const checkEvents = () => {
//         // Kiểm tra xem có sự kiện nào cần xử lý không
//         const actorEvents = [...this.actorEvents];
//         const recipientEvents = [...this.recipientEvents];

//         if (actorEvents.length > 0 || recipientEvents.length > 0) {
//           clearTimeout(timeoutId);
//           this.cleanup();
//           // console.log('Events found, resolving:', { actorEvents, recipientEvents });
//           resolve({
//             actorEvents,
//             recipientEvents
//           });
//         }
//       };
//       const intervalId = setInterval(checkEvents, 1000);

//       this.cleanup = () => {
//         clearTimeout(timeoutId);
//         clearInterval(intervalId);
//       };
//     });
//   }
//   public stop(): void {
//     this.isCollecting = false;
//     if (this.wsActor && this.wsActor.readyState === WebSocket.OPEN) {
//       this.wsActor.close();
//       console.log('Closed wsActor WebSocket');
//     }
//     if (this.wsRecipient && this.wsRecipient.readyState === WebSocket.OPEN) {
//       this.wsRecipient.close();
//       console.log('Closed wsRecipient WebSocket');
//     }
//     this.actorEvents = [];
//     this.recipientEvents = [];
//   }
// }

import WebSocket from 'ws';

export class WebSocketEventCollector {
  private ws: WebSocket;
  private isActor: boolean;
  private events: any[] = [];
  private isCollecting: boolean = false;
  private cleanup: (() => void) | null = null;

  constructor(ws: WebSocket, isActor: boolean) {
    if (ws.readyState !== WebSocket.OPEN) {
      throw new Error('WebSocket must be OPEN before creating collector');
    }
    this.ws = ws;
    this.isActor = isActor;
    this.startCollecting();
  }

  private startCollecting(): void {
    this.isCollecting = true;

    this.ws.on('message', (msg) => {
      try {
        const message = JSON.parse(msg.toString());
        // console.log(`Received ${this.isActor ? 'actor' : 'recipient'} event:`, message);
        if (!this.events.some((event) => event.id === message.id)) {
          // console.log(`Received ${this.isActor ? 'actor' : 'recipient'} event:`, message);
          this.events.push(message);
        }
      } catch (error) {
        console.error(
          `Failed to parse ${this.isActor ? 'actor' : 'recipient'} message:`,
          error,
        );
      }
    });

    this.ws.on('error', (error) => {
      console.error(
        `${this.isActor ? 'Actor' : 'Recipient'} WebSocket error:`,
        error,
      );
      this.isCollecting = false;
    });
  }

  public sendMessage(message: any): void {
    if (this.ws.readyState !== WebSocket.OPEN) {
      console.error(
        `Cannot send message: WebSocket is not OPEN for ${this.isActor ? 'Actor' : 'Recipient'}`,
      );
      return;
    }
    try {
      this.ws.send(JSON.stringify(message));
      console.log(
        `Sent message from ${this.isActor ? 'Actor' : 'Recipient'}:`,
        message,
      );
    } catch (error) {
      console.error(
        `Failed to send message from ${this.isActor ? 'Actor' : 'Recipient'}:`,
        error,
      );
    }
  }

  public async collectEventsAfterAction(
    timeoutMs: number = 5000,
  ): Promise<any[]> {
    return new Promise((resolve) => {
      const timeoutId = setTimeout(() => {
        this.cleanup?.();
        const collectedEvents = [...this.events];
        this.events = []; // Clear events after collection
        resolve(collectedEvents);
      }, timeoutMs);

      const intervalId = setInterval(() => {
        if (this.events.length > 0) {
          clearTimeout(timeoutId);
          clearInterval(intervalId);
          const collectedEvents = [...this.events];
          this.events = []; // Clear events after collection
          resolve(collectedEvents);
        }
      }, 1000);

      this.cleanup = () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    });
  }

  public stop(): void {
    this.isCollecting = false;
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.close();
      console.log(`Closed ${this.isActor ? 'Actor' : 'Recipient'} WebSocket`);
    }
    this.events = [];
  }
}
