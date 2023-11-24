import { FC } from "react";

export interface IErrorMessage {
  message: string;
}

export const ErrorMessage: FC<IErrorMessage> = ({ message }) => {
  return <div>{message}</div>;
};
