// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加基本信息 POST /patient/addBaseInfo */
export async function addPatientBaseInfoUsingPost(
  body: API.AddPatientBaseInfoRequest,
  options?: { [key: string]: any },
) {
  return request<API.Responsestring>('/patient/addBaseInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加患者检测数据 POST /patient/addPatientMonitorInfo */
export async function addPatientMonitorInfoUsingPost(
  body: API.AddMonitorInfoRequest,
  options?: { [key: string]: any },
) {
  return request<API.Responsestring>('/patient/addPatientMonitorInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询患者检测数据 GET /patient/queryHealthMonitorRecord */
export async function queryHealthMonitorRecordUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryHealthMonitorRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseQueryHealthMonitorRecordResponse>(
    '/patient/queryHealthMonitorRecord',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** queryPatientInfo GET /patient/queryPatientInfo */
export async function queryPatientInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryPatientInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponsePatientInfoList>('/patient/queryPatientInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 预约医生 GET /patient/reserveDoctor */
export async function reserveDoctorUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.reserveDoctorUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.Responsestring>('/patient/reserveDoctor', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
