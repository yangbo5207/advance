import Home from 'pages/Home';
import LearnReact from 'pages/LearnReact';
import ReactCase from 'pages/ReactCase';
import LearnJS from 'pages/LearnJs';
import LearnCSS from 'pages/LearnCSS';
import LearnDOM from 'pages/LearnDOM';
import Profile from 'pages/Profile';
import Keypass from 'pages/Keypass';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/react',
        component: LearnReact
    },
    {
        path: '/js',
        component: LearnJS
    },
    {
        path: '/css',
        component: LearnCSS
    },
    {
        path: '/dom',
        component: LearnDOM
    },
    {
        path: '/reactcase',
        component: ReactCase
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/keypass',
        component: Keypass
    }
]
