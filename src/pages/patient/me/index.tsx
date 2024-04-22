import { queryPatientDetailInfoUsingGet } from '@/services/backend/patientController';
import { useModel } from '@@/exports';
import { ProDescriptions } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';

const Me: React.FC = () => {
  const [patientInfo, setPatientInfo] = useState<API.PatientQueryInfoEntity>();
  const { initialState, setInitialState } = useModel('@@initialState');

  useEffect(() => {
    queryPatientDetailInfoUsingGet({
      userId: initialState?.currentUser?.userId,
      type: initialState?.currentUser?.type,
    }).then((r) => {
      setPatientInfo(r.data);
    });
  }, []);
  return (
    <ProDescriptions column={2} title="患者信息">
      <ProDescriptions.Item valueType="text" label="姓名">
        {patientInfo?.name}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="年龄" valueType="text">
        {patientInfo?.age}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="出生日期" valueType="date">
        {patientInfo?.birthday}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="身高" valueType="text">
        {patientInfo?.height}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="体重" valueType="text">
        {patientInfo?.weight}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="病因" valueType="text">
        {patientInfo?.sickReason}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="科室" valueType="text">
        {patientInfo?.departmentName}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="家庭住址" valueType="textarea">
        {patientInfo?.location}
      </ProDescriptions.Item>
      <ProDescriptions.Item label="病史" valueType="textarea">
        {patientInfo?.sickHistory}
      </ProDescriptions.Item>
    </ProDescriptions>
  );
};

export default Me;
