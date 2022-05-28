import client from '../lib/api';
import { SendFeedbackRequest } from './models';

export const sendFeedback = (props: SendFeedbackRequest) => {
  return client.post('/feedback', {
    ...props,
  });
};
