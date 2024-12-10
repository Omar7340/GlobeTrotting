import { AxiosInstance } from "axios";
import { NavigateFunction } from "react-router";

export interface GeneralProps {
  api: AxiosInstance,
  colorPalette : string,
}

export interface AccountFormProps {
  api: AxiosInstance,
  navigate: NavigateFunction
}