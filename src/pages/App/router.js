import Home from 'pages/Home';
import LearnReact from 'pages/LearnReact';
import LearnJS from 'pages/LearnJs';
import LearnCSS from 'pages/LearnCSS';
import LearnDOM from 'pages/LearnDOM';

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
    }
]
