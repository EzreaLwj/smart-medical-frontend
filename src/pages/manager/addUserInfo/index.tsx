import { queryDepartmentsUsingGet } from '@/services/backend/doctorController';
import {
  addDoctorAccountUsingPost,
  addUserAccountUsingPost,
} from '@/services/backend/managerController';
import { ModalForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Button, Card, Modal, Space, message } from 'antd';
import { FC, useEffect, useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const AddUserInfo: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAccountResult, setUserAccountResult] = useState(0);
  const [departmentList, setDepartmentList] = useState<API.DepartmentLabelEntity[] | undefined>([]);

  useEffect(() => {
    queryDepartmentList().then((r) => {});
  }, []);

  const queryDepartmentList = async () => {
    const ret = await queryDepartmentsUsingGet();
    setDepartmentList(ret?.data?.departmentLabelEntityList);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setUserAccountResult(0);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <Card title={'添加账号信息'}>
        <Space>
          <Modal title="注册成功" open={isModalOpen} onCancel={handleCancel} onOk={handleCancel}>
            <span>用户注册成功，用户ID为：{userAccountResult}</span>
          </Modal>
          <ModalForm
            title="添加患者账号或管理员信息"
            trigger={<Button type="primary">添加患者账号或管理员信息</Button>}
            submitter={{
              searchConfig: {
                submitText: '确认',
                resetText: '取消',
              },
            }}
            onFinish={async (values) => {
              const request: API.AddAccountRequest = {
                ...values,
                type: parseInt(values.type),
                email: values.email,
                password: values.password,
                phone: values.phone,
              };
              const res = await addUserAccountUsingPost(request);
              if (res.code === '0000') {
                setUserAccountResult(res.data.userId);
                showModal();
                return true;
              } else {
                message.error(res.info);
                return false;
              }
            }}
          >
            <ProFormText width="md" name="email" label="邮箱" placeholder="请输入邮箱" />

            <ProFormText.Password
              width="md"
              name="password"
              label="密码"
              placeholder="请输入密码"
            />

            <ProFormText width="md" name="phone" label="手机号" placeholder="请输入手机号" />

            <ProFormSelect
              width="xs"
              options={[
                {
                  value: '0',
                  label: '管理员',
                },
                {
                  value: '2',
                  label: '患者',
                },
              ]}
              name="type"
              label="身份"
            />
          </ModalForm>

          <ModalForm
            title="新建医生信息"
            trigger={<Button type="primary">添加医生信息</Button>}
            submitter={{
              searchConfig: {
                submitText: '确认',
                resetText: '取消',
              },
            }}
            onFinish={async (values) => {
              const request: API.AddDoctorInfoRequest = {
                ...values,
                name: values.name,
                department: parseInt(values.department),
                type: parseInt(values.type),
                email: values.email,
                password: values.password,
                phone: values.phone,
                description: values.description,
                gender: values.gender,
                position: values.position,
              };
              const res = await addDoctorAccountUsingPost(request);
              if (res.code === '0000') {
                setUserAccountResult(res.data.userId);
                showModal();
                return true;
              } else {
                message.error(res.info);
                return false;
              }
            }}
          >
            <ProFormText width="md" name="email" label="邮箱" placeholder="请输入邮箱" />

            <ProFormText.Password
              width="md"
              name="password"
              label="密码"
              placeholder="请输入密码"
            />

            <ProFormText width="md" name="phone" label="手机号" placeholder="请输入手机号" />

            <ProFormSelect
              width="xs"
              options={[
                {
                  value: '1',
                  label: '医生',
                },
              ]}
              name="type"
              label="身份"
            />

            <ProFormText width="md" name="name" label="医生姓名" placeholder="请输入姓名" />

            <ProFormSelect
              width="xs"
              options={[
                {
                  value: '0',
                  label: '男',
                },
                {
                  value: '1',
                  label: '女',
                },
              ]}
              name="gender"
              label="性别"
            />

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

            <ProFormText width="md" name="position" label="医生职位" placeholder="请输入职位" />
            <ProFormTextArea
              width="md"
              name="description"
              label="医生简介"
              placeholder="请输入医生简介"
            />
          </ModalForm>
        </Space>
      </Card>
    </>
  );
};

export default AddUserInfo;
