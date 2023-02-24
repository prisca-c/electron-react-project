type ErrorApiType = {
  status: number;
  type: string;
  message: string;
  error: string;
  report_url: string;
};

export const nullErrorApiType: ErrorApiType = {
  status: 0,
  type: '',
  message: '',
  error: '',
  report_url: '',
};

export default ErrorApiType;
