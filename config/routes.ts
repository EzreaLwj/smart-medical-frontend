export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      { icon: 'smile', path: '/user/register-result', component: './User/register-result' },
      { icon: 'smile', path: '/user/register', component: './User/register' },
    ],
  },
  {
    path: '/dashboard',
    icon: 'dashboard',
    name: 'Dashboard',
    routes: [
      {path: '/dashboard', redirect: '/dashboard/analysis'},
      {icon: 'smile', path: '/dashboard/analysis', component: './dashboard/analysis', name: '分析页'},
      {icon: 'smile', path: '/dashboard/monitor', component: './dashboard/monitor', name: '监控页'},
      {icon: 'smile', path: '/dashboard/workplace', component: './dashboard/workplace', name: '工作台'},
    ],
  },
  {
    path: '/list',
    icon: 'table',
    name: '列表页',
    routes: [
      {
        path: '/list/search',
        component: './list/search',
        routes: [
          {path: '/list/search', redirect: '/list/search/articles'},
          {icon: 'smile', path: '/list/search/articles', component: './list/search/articles', name: '搜索文章'},
          // { icon: 'smile', path: '/list/search/projects', component: './list/search/projects' },
        ],
      },
      {path: '/list', redirect: '/list/table-list'},
      {icon: 'smile', path: '/list/table-list', component: './list/table-list', name: '查询表格'},
    ],
  },
  {
    icon: 'user',
    path: '/account',
    name: '个人页',
    routes: [
      {path: '/account', redirect: '/account/center'},
      {icon: 'smile', path: '/account/center', component: './account/center', name: '个人中心'},
      {icon: 'smile', path: '/account/settings', component: './account/settings', name: '个人设置'},
    ],
  },
  {path: '/', redirect: '/dashboard'},
  {path: '*', layout: false, component: './exception/404'},
];
