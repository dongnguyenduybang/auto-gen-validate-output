// import { VAR } from '../../enums/var-placeholder.enum';
// import { SagaWSTestSuite } from '../../utils/declarations';
// import { ACTION } from '../../enums';
// import { HEADER_LIST } from '../../enums/header.enum';
// import { API_EVENT } from '../../utils/ws-config';
// import { EVENTS_BY_ACTION } from '../../utils/event-action';

// export const SendMessageWS = {
//   options: [
//     {
//       beforeAll: [
//         {
//           title: 'Actor open connection ws',
//           author: 'Actor',
//           action: ACTION.OPEN_CONNECTION_WS,
//           headers: HEADER_LIST.create({ token: VAR.token }),
//         },
//         {
//           title: 'Actor connect ws',
//           author: 'Actor',
//           action: ACTION.CONNECT_WS,
//           body: {
//             url: VAR.url,
//           },
//         },
//         {
//           title: 'Recipient open connection ws',
//           author: 'Recipient',
//           action: ACTION.OPEN_CONNECTION_WS,
//           headers: HEADER_LIST.create({ token: VAR.token1 }),
//         },
//         {
//           title: 'Recipient connect ws',
//           author: 'Recipient',
//           action: ACTION.CONNECT_WS,
//           body: {
//             url: VAR.url1,
//           },
//         },
//       ],
//       resume: [
//         {
//           title: 'Actor resume send message',
//           author: VAR.actor,
//           type: API_EVENT.halome.v3.chat.MESSAGE_CREATED,
//           index: 1, // index của step
//           data: VAR.time,
//         },
//         {
//           title: 'Actor resume send message',
//           author: VAR.recipient,
//           type: API_EVENT.halome.v3.chat.MESSAGE_CREATED,
//           index: 3,
//           data: VAR.id
//         }
//       ]
//     },
//   ],
//   steps: [
//     {
//       title: 'should return ...',
//       step: [
//         {
//           title: 'Actor create channel',
//           author: 'Actor',
//           action: ACTION.CREATE_CHANNEL,
//           headers: HEADER_LIST.create({ token: VAR.token }),
//         },
//         {
//           title: 'Actor send message',
//           author: VAR.actor,
//           action: ACTION.SEND_MESSAGE,
//           headers: HEADER_LIST.create({
//             token: VAR.token,
//           }),
//         },
//         {
//           title: 'Recipient join channel',
//           author: VAR.recipient,
//           action: ACTION.ACCEPT_INVITATION,
//           headers: HEADER_LIST.create({
//             token: VAR.token1,
//           }),
//         },
//         {
//           title: 'Recipient send message',
//           author: VAR.recipient,
//           action: ACTION.SEND_MESSAGE,
//           headers: HEADER_LIST.create({
//             token: VAR.token1,
//           }),
//         }
//       ],
//     },
//   ],
// };
