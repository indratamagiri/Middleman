import { ApiResponse } from "apisauce";
import { Api } from "./api";
import { DEFAULT_API_CONFIG } from "./api-config";
import { GeneralApiProblem, getGeneralApiProblem } from "./api-problem";

export type GetResultLogin = { 
    kind: 'ok', 
    data: {
        code : number,
        status : string,
        data : {
            name : string,
            avatar : string,
            joined_on : string,
            email : string,
            is_admin : boolean,
            circle_info : {
               cicle_name: string,
               total_member : number,
               admin : boolean
            }
        }
    }}

export const GetProfile = async ():
Promise<GetResultLogin | GeneralApiProblem> => {
  const api = new Api();
  api.Authorization();
  const response: ApiResponse<any> = await api.apisauce.get(`${DEFAULT_API_CONFIG.url}/api/profile`);

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