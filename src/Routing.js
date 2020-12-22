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
                path: 'list-admin',
                component: 'list-admin-page',
                action: async(routerContext, commands) => {
                    const token = localStorage.getItem('token');
                    const verifiedAdmin = await verifyAdmin(token);
                    if (verifiedAdmin.admin) {
                        return await import('./Pages/ListAdminPage');
                    } else if(verifiedAdmin.sale) {
                        return commands.redirect('/list');
                    } else {
                        return commands.redirect('/login');
                    }
                }
            },
            {
                path: 'list',
                component: 'list-page',
                action: async(routerContext, commands) => await import('./Pages/listPage')
            },
            {
                path: 'uploadList',
                component: 'upload-List',
                action: async() => await import('./Pages/UploadList')
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
                path: 'register/:id',
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
