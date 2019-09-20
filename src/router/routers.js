import Layout from '@/components/layouts/AdminLayout'
export default [
  {
    path: '/',
    component: Layout,
    meta: {
      hideInMenu: true,
      notCache: true,
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {title: 'Home', group: 'apps', icon: 'dashboard'},
        component: () => import('@/views/Dashboard'),
      },
    ],
  },
];


