const pre = 'kefu_';

export default [
    // 登录
    {
        path: '/admin/login',
        name: 'login',
        meta: {
            title: '登录',
            hideInMenu: true
        },
        component: () => import('@/pages/account/login')
    }
]
