export type Item = {
  _id: string;
  username: string;
  password: string;
  confirmation: string;
  country: string;
  email: string;
  sexe: string;
  terms: boolean;
};

export type ItemPost = {
  username: string;
  password: string;
  confirmation: string;
  country: string;
  email: string;
  sexe: string;
  terms: boolean;
};

export interface SuccessResponse<T> extends Record<string, any> {
  message: string;
  data: T;
}
