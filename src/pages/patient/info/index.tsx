import { queryDepartmentsUsingGet } from '@/services/backend/doctorController';
import {
  addPatientBaseInfoUsingPost,
  addPatientMonitorInfoUsingPost,
} from '@/services/backend/patientController';
import {
  ProForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, Form, Space, message } from 'antd';
import React, { useEffect, useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const PatientInfo: React.FC = () => {
  const [form] = Form.useForm<{ name: string; company: string }>();
  const { initialState, setInitialState } = useModel('@@initialState');
  const [departmentList, setDepartmentList] = useState<API.DepartmentLabelEntity[] | undefined>([]);

  useEffect(() => {
    queryDepartmentList().then((r) => {});
  }, []);

  const queryDepartmentList = async () => {
    const ret = await queryDepartmentsUsingGet();
    setDepartmentList(ret?.data?.departmentLabelEntityList);
  };

  return (
    <>
      <Space direction={'vertical'}>
        <Card title={'基本信息录入'}>
          <ProForm
            onFinish={async (values: API.PatientInfoEntity) => {
              const ret = await addPatientBaseInfoUsingPost({
                userId: initialState?.currentUser?.userId,
                type: initialState?.currentUser?.type,
                patientInfoEntity: {
                  ...values,
                  age: parseInt(values.age),
                  department: parseInt(values.department),
                },
              });
              if (ret.code === '0000') {
                message.success(ret.info);
              } else {
                message.error(ret.info);
              }
            }}
          >
            <ProForm.Group>
              <ProFormText width="md" name="name" label="姓名" placeholder="请输入名称" />
              <ProFormText width="md" name="age" label="年龄" placeholder="请输入名称" />
              <ProFormDatePicker
                width="md"
                name="birthday"
                label="出生日期"
                placeholder="请输入名称"
              />
            </ProForm.Group>

            <ProForm.Group>
              <ProFormText width="md" name="height" label="身高" placeholder="请输入名称" />
              <ProFormText width="md" name="weight" label="体重" placeholder="请输入名称" />
              <ProFormText width="md" name="sickReason" label="病因" placeholder="请输入名称" />
            </ProForm.Group>

            <ProForm.Group>
              <ProFormSelect
                width="xs"
                options={departmentList?.map((value, index, array) => {
                  return {
                    label: value.departmentName,
                    value: value.departmentId,
                  };
                })}
                name="department"
                label="科室"
              />

              <ProFormTextArea
                width="md"
                name="location"
                label="家庭住址"
                placeholder="请输入名称"
              />
              <ProFormTextArea width="md" name="company" label="病史" placeholder="请输入名称" />
            </ProForm.Group>
          </ProForm>
        </Card>

        <Card title={'每日监测信息录入'}>
          <ProForm
            onFinish={async (values: API.PatientHeathMonitorEntity) => {
              const ret = await addPatientMonitorInfoUsingPost({
                userId: initialState?.currentUser?.userId,
                type: initialState?.currentUser?.type,
                patientHeathMonitorEntity: {
                  ...values,
                },
              });
              if (ret.code === '0000') {
                message.success(ret.info);
              } else {
                message.error(ret.info);
              }
            }}
          >
            <ProForm.Group>
              <ProFormText
                width="md"
                name="bloodOxygen"
                label="血氧监测"
                placeholder="请输入血氧数据"
              />
              <ProFormText width="md" name="weight" label="体重监测" placeholder="请输入体重" />
            </ProForm.Group>

            <ProForm.Group>
              <ProFormText
                width="md"
                name="temperature"
                label="温度监测"
                placeholder="请输入温度数据"
              />
              <ProFormText width="md" name="pulse" label="脉搏监测" placeholder="请输入脉搏数据" />
            </ProForm.Group>
          </ProForm>
        </Card>
      </Space>
    </>
  );
};
export default PatientInfo;
