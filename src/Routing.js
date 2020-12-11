import { Router } from '@vaadin/router';


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
                action: async() => await import('./Pages/DashboardPage')
            },
            {
                path: 'list',
                component: 'list-page',
                action: async() => await import('./Pages/ListPage')
            },
            {
                path: 'uploadList',
                component: 'upload-List',
                action: async() => await import('./Pages/UploadList')
            },
            {
                path: 'search',
                component: 'search-page',
                action: async() => await import('./Pages/SearchPage')
            },
            {
                path: 'register',
                component: 'register-user',
                action: async() => await import('./components/RegisterUser')
            }
        ]
    },
    {
        path: '(.*)',
        component: 'not-found-page',
        action: async() => await import ('./Pages/NotfoundPage')
    }
];

// NOTA: exports routes

const app = document.getElementById('app');
export const router = new Router(app);

router.setRoutes(routes);
