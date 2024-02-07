// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户登录状态 GET /user */
export async function loginStateUsingGet(token: string, options?: { [key: string]: any }) {
  return request<API.ResponseLoginStateDTO>('/user', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
    ...(options || {}),
  });
}

/** updateUserInfo PUT /user */
export async function updateUserInfoUsingPut(
  body: API.UserUpdateDTO,
  options?: { [key: string]: any },
) {
  return request<API.Responsestring>('/user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登录 POST /user/login */
export async function userLoginUsingPost(
  body: API.LoginRequestDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResponseLoginResponseDTO>('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注册 POST /user/register */
export async function userRegisterUsingPost(
  body: API.LoginRegisterDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResponseLoginResponseDTO>('/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
