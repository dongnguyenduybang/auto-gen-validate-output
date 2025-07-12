import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import {
  ACTION,
} from '../../../../enums/index';

export const ReportUserRequest = () => createAIEnhancedDTO()
  .startStep('report user')
  .addActionAI(
    'report user',
    'report-user',
    ACTION.REPORT_USER,
    {
      body: ACTION.REPORT_USER,
    }
  )
  .execute()
