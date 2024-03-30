export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  {
    path: '/patient',
    icon: 'dashboard',
    name: '患者信息管理',
    access: 'canPatient',
    routes: [
      { path: '/patient', redirect: '/patient/info' },
      {
        icon: 'smile',
        path: '/patient/info',
        component: './patient/info',
        name: '信息录入',
      },
      {
        icon: 'smile',
        path: '/patient/reserve',
        component: './patient/reserve',
        name: '预约医生',
      },
      {
        icon: 'smile',
        path: '/patient/monitor',
        component: './patient/monitor',
        name: '监控页',
      },
    ],
  },
  {
    icon: 'user',
    path: '/doctor',
    name: '医生管理页',
    access: 'canDoctor',
    routes: [
      { path: '/doctor', redirect: '/doctor/patientlist' },
      {
        icon: 'smile',
        path: '/doctor/patientlist',
        component: './doctor/patientlist',
        name: '查询病人信息',
      },
    ],
  },
  {
    icon: 'user',
    path: '/manager',
    name: '管理员',
    access: 'canAdmin',
    routes: [
      { path: '/manager', redirect: '/manager/addUserInfo' },
      {
        icon: 'smile',
        path: '/manager/addUserInfo',
        component: './manager/addUserInfo',
        name: '添加用户信息',
      },
    ],
  },
  // {
  //   icon: 'user',
  //   path: '/account',
  //   name: '个人页',
  //   routes: [
  //     { path: '/account', redirect: '/account/center' },
  //     { icon: 'smile', path: '/account/center', component: './account/center', name: '个人中心' },
  //     {
  //       icon: 'smile',
  //       path: '/account/settings',
  //       component: './account/settings',
  //       name: '个人设置',
  //     },
  //   ],
  // },
  { path: '/', redirect: '/patient' },
  { path: '*', layout: false, component: './exception/404' },
];
