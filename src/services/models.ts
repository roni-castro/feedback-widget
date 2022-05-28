export interface SendFeedbackRequest {
  type: string;
  comment: string;
  screenshot: string | null;
}
