// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询医生列表 GET /doctor/doctor */
export async function queryDoctorListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryDoctorListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseQueryDoctorResponse>('/doctor/doctor', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
