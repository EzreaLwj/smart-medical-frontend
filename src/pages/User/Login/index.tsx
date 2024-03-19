import { userLoginUsingPost } from '@/services/backend/userController';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { Helmet, history, useModel } from '@umijs/max';
import { Alert, Tabs, message } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import Settings from '../../../../config/defaultSettings';

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};
const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.ResponseLoginResponseDTO>({});
  const [type, setType] = useState<string>('0');
  const { initialState, setInitialState } = useModel('@@initialState');
  const { styles } = useStyles();
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };
  const handleSubmit = async (values: API.LoginRequestDTO) => {
    try {
      // 登录
      const msg = await userLoginUsingPost({
        ...values,
      });
      if (msg.code === '0000') {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        localStorage.setItem('token', msg?.data?.token as string);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        console.log(urlParams.get('redirect'));
        history.push(urlParams.get('redirect') || '/');
        return;
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  const { code } = userLoginState;
  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {'登录'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="面向智慧医疗的隐私保护健康监测系统"
          subTitle={'Privacy protection health monitoring system for smart medicine'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            values = {
              ...values,
              loginType: parseInt(type),
            };
            await handleSubmit(values as API.LoginRequestDTO);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: '0',
                label: '管理员登录',
              },
              {
                key: '1',
                label: '医生登录',
              },
              {
                key: '2',
                label: '患者登录',
              },
            ]}
          />

          {code !== '0000' && code !== undefined && <LoginMessage content={'错误的邮箱和密码'} />}
          {(type === '0' || type === '1' || type === '2') && (
            <>
              <ProFormText
                name="email"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'邮箱'}
                rules={[
                  {
                    required: true,
                    message: '邮箱是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                ]}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          ></div>
        </LoginForm>
      </div>
    </div>
  );
};
export default Login;
