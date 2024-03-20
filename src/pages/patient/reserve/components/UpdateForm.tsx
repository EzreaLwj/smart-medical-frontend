import { ProFormDateTimePicker, ProFormTextArea, StepsForm } from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React from 'react';

export type FormValueType = {
  beginTime?: string;
  endTime?: string;
  reservation?: string;
  doctorId?: number;
  patientId?: number;
} & Partial<API.RuleListItem>;
export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalOpen: boolean;
  values: Partial<API.RuleListItem>;
};
const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title={'预约信息配置'}
            open={props.updateModalOpen}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        initialValues={{
          name: props.values.name,
          desc: props.values.desc,
        }}
        title={'选择预约时间'}
      >
        <ProFormDateTimePicker
          name="beginTime"
          width="md"
          label={'开始时间'}
          rules={[
            {
              required: true,
              message: '请选择开始时间！',
            },
          ]}
        />
        <ProFormDateTimePicker
          name="endTime"
          width="md"
          label={'结束时间'}
          rules={[
            {
              required: true,
              message: '请选择结束时间！',
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          target: '0',
          template: '0',
        }}
        title={'填写预约介绍'}
      >
        <ProFormTextArea name="reservation" width="md" label={'介绍'} />
      </StepsForm.StepForm>
    </StepsForm>
  );
};
export default UpdateForm;
