// src/routes.ts

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";

import { IRoute } from './interfaces'
import Login from "./pages/Login";

export const routes: Array<IRoute> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        enabled: true,
        component: Login
    },
    {
        key: 'register-route',
        title: 'Register',
        path: '/register',
        enabled: true,
        component: Register
    }
]