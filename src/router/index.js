import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      meta: { title: 'dashboard.name', icon: 'dashboard' },
      component: () => import('@/views/dashboard/index')
    }]
  },


  {
    path: '/merchants',
    component: Layout,
    redirect: '/merchants/list',
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/table/index'),
        meta: { title: 'merchats.name', icon: 'shop01' }
      }
    ]
  },

  {
    path: '/users',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'users.name', icon: 'addressbook_fill' }
      }
    ]
  },

  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/system',
    name:'setting',
    meta: {
      title: 'setting.name',
      icon: 'setup_fill'
    },
    children: [
      {
        path: 'system',
        name:'system',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'setting.submenu_system' }
      },
      {
        path: 'arguments',
        name:'arguments',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'setting.submenu_arguments' }
      },
      {
        path: 'profile',
        name:'profile',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'setting.submenu_profile' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'permission.name',
      icon: 'lock',
      roles: ['admin', 'TEST'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/nested/menu2/index'),
        name: 'PagePermission',
        meta: {
          title: 'permission.merchant',
          roles: ['admin','TEST'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'role',
        component: () => import('@/views/nested/menu2/index'),
        name: 'RolePermission',
        meta: {
          title: 'permission.third',
          roles: ['admin']
        }
      }
    ]
  }
]


export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

