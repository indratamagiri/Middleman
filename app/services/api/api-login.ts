import { ApiResponse } from "apisauce";
import { Api } from "./api";
import { LoginType, RegisterType } from "./api.types";

export type GetResultLogin = {
  kind: string,
  payload: {
    code: number,
    status: string,
    data: {
      message: string,
      token: string
    }
  }
}

export const LoginApi = async ({
  email,
  password
}: LoginType):
  Promise<GetResultLogin> => {
  const api = new Api();
  api.setup();
  const response: ApiResponse<any> = await api.apisauce.post(`/api/login`,
    { email, password });

  // the typical ways to die when calling an api

  if (!response.ok) {
    return { kind: response.problem, payload: response?.data };
  }

  // transform the data into the format we are expecting
  try {
    const { data } = response;
    return { kind: 'ok', payload: data };
  } catch (error) {
    return { kind: 'bad-data', payload: error };
  }
};

export type GetRegister = {
  kind: string,
  payload: {
    code: number,
    status: string,
    data: {
      message: string
    }
  }
}

export const RegisterApi = async ({
  email,
  password,
  name
}: RegisterType):
  Promise<GetRegister> => {
  const api = new Api();
  api.setup();
  const response: ApiResponse<any> = await api.apisauce.post(`/api/register`,
    { email, password, name });

  // the typical ways to die when calling an api

  if (!response.ok) {
    return { kind: response.problem, payload: response?.data };
  }

  // transform the data into the format we are expecting
  try {
    const { data } = response;
    return { kind: 'ok', payload: data };
  } catch (error) {
    return { kind: 'bad-data', payload: error };
  }
};

export type ChangePasswordResult = {
  kind: string,
  payload: {
    code: number,
    status: string,
    data: {
      message: string
    }
  }
}

type ParamChangePassword = {
  old_password: string,
  new_password: string
}

export const ChangePasswordApi = async (param: ParamChangePassword):
  Promise<GetRegister> => {
  const api = await new Api();
  await api.Authorization();
  try {
    const response: ApiResponse<any> = await api.apisauce.put(`/api/profile/edit/password`,
      { old_password: param.old_password, new_password: param.new_password });

    // the typical ways to die when calling an api

    if (!response.ok) {
      return { kind: response.problem, payload: response?.data };
    }

    // transform the data into the format we are expecting
    const { data } = response;
    return { kind: 'ok', payload: data };
  } catch (error) {
    return { kind: 'bad-data', payload: error };
  }
};
