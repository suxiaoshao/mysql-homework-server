export interface ResponseSuccessData<T> {
  code: 0;
  data: T;
}

export interface ResponseErrorData {
  code: number;
  data: null;
}

export type ResponseData<T> = ResponseErrorData | ResponseSuccessData<T>;
