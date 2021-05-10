import { ApiResponse } from "apisauce";
import { Api } from "./api";
import { DEFAULT_API_CONFIG } from "./api-config";
import { getGeneralApiProblem, GeneralApiProblem } from "./api-problem";
import { LoginType, RegisterType } from "./api.types";

export type GetResultLogin = { 
    kind: 'ok', 
    data: {
        code : number,
        status : string,
        data : {
            message : string,
            token: string
        }
    }}

export const LoginApi = async ({ 
    email,
    password
} : LoginType):
Promise<GetResultLogin | GeneralApiProblem> => {
  const api = new Api();
  api.setup();
  const response: ApiResponse<any> = await api.apisauce.post(`${DEFAULT_API_CONFIG.url}/api/login`,
    { email, password });

  // the typical ways to die when calling an api

  if (!response.ok) {
    const problem = await getGeneralApiProblem(response);
    if (problem) {
      return problem;
    }
  }

  // transform the data into the format we are expecting
  try {
    const { data } = response;
    return { kind: 'ok', data };
  } catch {
    return { kind: 'bad-data' };
  }
};

export type GetRegister = { 
    kind: 'ok', 
    data: {
        code : number,
        status : string,
        data : {
            message : string
        }
    } }

export const RegisterApi = async ({ 
    email,
    password,
    name
} : RegisterType):
Promise<GetRegister | GeneralApiProblem> => {
  const api = new Api();
  api.setup();
  const response: ApiResponse<any> = await api.apisauce.post(`${DEFAULT_API_CONFIG.url}/api/register`,
    { email, password, name });

  // the typical ways to die when calling an api

  if (!response.ok) {
    const problem = await getGeneralApiProblem(response);
    if (problem) {
      return problem;
    }
  }

  // transform the data into the format we are expecting
  try {
    const { data } = response;
    return { kind: 'ok', data };
  } catch {
    return { kind: 'bad-data' };
  }
};