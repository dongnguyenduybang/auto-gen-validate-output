import 'reflect-metadata';
import { getDecorators } from '../../helps/dto-helper';
import { ErrorMessage } from '../../enums/error-message.enum';

export function validateSendMessage(instance: any, payload: any): string[] {
  const errors: string[] = [];
  let isUser: string;
  
  const dataMessage = instance.data.message



  
  if (errors.length === 0) {
    globalThis.globalVar.set('messageId', instance.data.message.messageId);
  }
  return errors;
}
