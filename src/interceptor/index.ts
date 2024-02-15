import { RequestOptionsInit } from 'umi-request';

export const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  const token = localStorage.getItem('token');
  if (token !== null && token !== '') {
    const authHeader = { Authorization: token };
    return {
      url: `${url}`,
      options: { ...options, interceptors: true, headers: authHeader },
    };
  }
  return {
    url: `${url}`,
    options: { ...options },
  };
};
