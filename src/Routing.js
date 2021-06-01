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
                component: 'menu-list-page',
                children: [
                    {
                        path: '',
                        component: 'menu-list-page',
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
                        action: async () => await import('./Pages/AddList')
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

                    },
                    {
                        path: 'listSales',
                        component: 'list-sale-page',
                        action: async (routerContext, commands) => {
                            const token = localStorage.getItem('token');
                            const verified = await verify(token);
                            if(!verified) {
                                return commands.redirect('/dashboard')
                            }
                            return await import('./Pages/ListSalePage')
                        }
                    },

                    {
                        path: 'listSalesAdmin',
                        component: 'list-admin-sale',
                        action: async (routerContext, commands) => await import('./Pages/ListSaleAdmin')
                    },

                    {
                        path: 'listSalesJuridico',
                        component: 'list-juridico-sale',
                        action: async (routerContext, commands) => await import('./Pages/ListSaleJuridico')
                    },

                    {
                        path: 'listDown',
                        component: 'list-down',
                        action: async (routerContext, commands) => {
                            const token = localStorage.getItem('token');
                            const verified = await verify(token);
                            if(!verified) {
                                return commands.redirect('/dashboard')
                            }
                            return await import('./Pages/ListDown')
                        }
                    },
                    {
                        path: 'listDownAdmin',
                        component: 'list-down-admin',
                        action: async (routerContext, commands) => await import('./Pages/ListDownAdmin')
                    },
                    {
                        path: 'listDownJuridico',
                        component: 'list-down-juridico',
                        action: async (routerContext, commands) => await import('./Pages/ListDownJuridico')
                    }
                ]
            },
            {
                path: 'message/:id',
                component: 'message-page',
                action: async(routerContext, commands) => {
                    const token = localStorage.getItem('token');
                    const verified = await verifyAdmin(token);
                    return await import('./Pages/MessagePage')
                }
            },
            {
                path: 'uploadList',
                component: 'upload-List',
                action: async(routerContext, commands) => {
                    const token = localStorage.getItem('token');
                    const verified = await verifyAdmin(token);
                    if(verified.sale || verified.juridico)  {
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
                path: 'searchJuridico',
                component: 'search-juridico-page',
                action: async (routerContext, commands) => {
                    const token = localStorage.getItem('token');
                    const verified = await verifyAdmin(token);
                    if(!verified.juridico)  {
                        return commands.redirect('/dashboard');
                    }
                    return await import('./Pages/SearchJuridicoPage')
                }
            },
            {
                path: 'register',
                component: 'register-user',
                action: async(routerContext, commands) => {
                    // const id = routerContext.params.id;
                    // console.log(id);
                    const token = localStorage.getItem('token');
                    const verified = await verifyAdmin(token);
                    if(!verified.admin)  {
                        return commands.redirect('/dashboard');
                    }
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
