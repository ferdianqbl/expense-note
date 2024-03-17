export type APIResponseType = {
  error: boolean;
  status: "success" | "error";
  message: string;
  data?: any;
};
