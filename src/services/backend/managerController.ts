// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 增加用户账号 POST /manager/addAccount */
export async function addUserAccountUsingPost(
  body: API.AddAccountRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResponseAddAccountResponse>('/manager/addAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 增加医生账号 POST /manager/addUserAccount */
export async function addUserAccountUsingPost1(
  body: API.AddDoctorInfoRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResponseAddAccountResponse>('/manager/addUserAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
