import { ApiResponse } from "apisauce";
import { Api } from "./api";


export interface GetProfileInfo {
  kind: string,
  payload?: {
    code: number,
    status: string,
    data: {
      message?: string
      name: string,
      avatar: string,
      joined_on: string,
      email: string,
      is_admin: boolean,
      circle_info: {
        cicle_name: string,
        total_member: number,
        admin: boolean
      }
    }
  },
  error?: {
    code: number
    status: string
    data?: {
      message: string
    },
  }
}

export const GetProfileInfoApi = async (): Promise<GetProfileInfo> => {
  try {
    const api = await new Api();
    await api.Authorization();
    const response: ApiResponse<any> = await api.apisauce.get(`/api/profile`)

    // the typical ways to die when calling an api

    if (!response.ok) {
      return { kind: response.problem, error: response?.data };
    }

    // transform the data into the format we are expecting
    const { data } = response;
    return { kind: 'ok', payload: data };
  } catch (error) {
    return { kind: 'bad-data', error: error };
  }
};

export interface AddPhoneNumber {
  kind: string,
  payload?: {
    code: number,
    status: string,
    data: {
      message: string
    }
  }
}

export const AddPhoneNumberApi = async (phone_number: string): Promise<AddPhoneNumber> => {
  try {
    const api = await new Api();
    await api.Authorization();
    const response: ApiResponse<any> = await api.apisauce.post(`/api/profile/edit/phone_number`, {
      phone_number
    })

    // the typical ways to die when calling an api

    if (!response.ok) {
      return { kind: response.problem };
    }

    // transform the data into the format we are expecting
    const { data } = response;
    return { kind: 'ok', payload: data };
  } catch (error) {
    return { kind: 'bad-data' };
  }
};

export interface AddPhoto {
  kind: string,
  payload?: {
    code: number,
    status: string,
    data: {
      message: string
    }
  }
}

export const AddPhotoApi = async (avatar: string): Promise<AddPhoto> => {
  try {
    const api = await new Api();
    await api.Authorization();
    const response: ApiResponse<any> = await api.apisauce.post(`/api/profile/upload/avatar`, {
      avatar
    }, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })

    // the typical ways to die when calling an api

    if (!response.ok) {
      return { kind: response.problem };
    }

    // transform the data into the format we are expecting
    const { data } = response;
    return { kind: 'ok', payload: data };
  } catch (error) {
    return { kind: 'bad-data' };
  }
};

export interface AddAddress {
  kind: string,
  payload?: {
    code: number,
    status: string,
    data: {
      message: string
    }
  }
}

export const AddAddressApi = async (address: string): Promise<AddAddress> => {
  try {
    const api = await new Api();
    await api.Authorization();
    const response: ApiResponse<any> = await api.apisauce.post(`/api/profile/edit/address`, {
      address
    })

    // the typical ways to die when calling an api

    if (!response.ok) {
      return { kind: response.problem };
    }

    // transform the data into the format we are expecting
    const { data } = response;
    return { kind: 'ok', payload: data };
  } catch (error) {
    return { kind: 'bad-data' };
  }
};