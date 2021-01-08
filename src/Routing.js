import { Router } from '@vaadin/router';
import {  login, verify, verifyAdmin  } from './helpers/auth';

const routes = [
    {
        path: '',
        component: 'gayol-app',
        children: [
            {
                path: '',
                redirect: '/login',
            },
            {
                path: 'login',
                component: 'login-user',
                action: async() => await import('./components/LoginUser')
            },
            {
                path: 'dashboard',
                component: 'dashboard-page',
                action: async(routerContext, commands) => {
                    const token = localStorage.getItem('token');
                    const verified = await verify(token);
                    if(!verified)  {
                        return commands.redirect('/login');
                    }
                    return await import('./Pages/DashboardPage');
                }
            },
            {
                path: 'menuListPage',
                component: 'menu-list-Page',
                children: [
                    {
                        path: '',
                        component: 'menu-list-Page',
                        action: async (routerContext, commands) => {
                            const token = localStorage.getItem('token');
                            const verified = await verify(token);
                            if(!verified)  {
                                return commands.redirect('/login');
                            }
                            return await import('./Pages/MenuListPage')
                        }
                    },
                    {
                        path: 'addList',
                        component: 'add-list',
                        action: async (routerContext, commands) => {
                            const token = localStorage.getItem('token');
                            const verified = await verifyAdmin(token);
                            if(!verified.admin)  {
                                return commands.redirect('/dashboard');
                            }
                            return await import('./Pages/AddList')
                        }
                    },
                    {
                        path: 'list-admin/:id',//lista vendedor
                        component: 'list-admin-page',
                        action: async (routerContext, commands) => await import('./Pages/ListAdminPage')
                    },
                    {
                        path: 'listJuridico/:id',
                        component: 'list-juridico-page',
                        action: async(routerContext, commands) => await import('./Pages/ListJuridicoPage')
                    },
                    {
                        path: 'list/:id',// admin list
                        component: 'list-page',
                        action: async(routerContext, commands) => {
                            const token = localStorage.getItem('token');
                            const verified = await verifyAdmin(token);
                            if(!verified.admin)  {
                                return commands.redirect('/dashboard');
                            }
                            return await import('./Pages/listPage')
                        }

                    }
                ]
            },
            {
                path: 'message/:id',
                component: 'message-page',
                action: async(routerContext, commands) => {
                    const token = localStorage.getItem('token');
                    const verified = await verifyAdmin(token);
                    if(!verified.admin)  {
                        return commands.redirect('/dashboard');
                    }
                    return await import('./Pages/MessagePage')
                }
            },
            {
                path: 'uploadList',
                component: 'upload-List',
                action: async() => {
                    const token = localStorage.getItem('token');
                    const verified = await verifyAdmin(token);
                    if(!verified.admin)  {
                        return commands.redirect('/dashboard');
                    }
                    return await import('./Pages/UploadList')
                }
            },
            {
                path: 'search',
                component: 'search-page',
                action: async(routerContext, commands) => {
                    const token = localStorage.getItem('token');
                    const verified = await verify(token);
                    if(!verified)  {
                        return commands.redirect('/login');
                    }
                    return await import('./Pages/SearchPage')
                }
            },
            {
                path: 'register',
                component: 'register-user',
                action: async(routerContext, commands) => {
                    // const id = routerContext.params.id;
                    // console.log(id);
                    return await import('./components/RegisterUser')
                }

            }
        ]
    },
    {
        path: '(.*)',
        component: 'not-found-page',
        action: async() => await import ('./Pages/NotfoundPage')
    }
];


const app = document.getElementById('app');
export const router = new Router(app);

router.setRoutes(routes);
