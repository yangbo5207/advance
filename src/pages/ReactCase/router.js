import Create from './Create';
import Props from './Props';
import State from './State';
import Refs from './Refs';
import Interactive from './Interactive';

export default [
    {
        path: '/create',
        component: Create,
        icon: 'create',
        title: '创建组件'
    },
    {
        path: '/props',
        component: Props,
        icon: 'props',
        title: 'props'
    },
    {
        path: '/state',
        component: State,
        icon: 'state',
        title: 'state'
    },
    {
        path: '/refs',
        component: Refs,
        icon: 'refs',
        title: 'refs'
    },
    {
        path: '/interactive',
        component: Interactive,
        icon: 'interactive',
        title: '组件交互方式'
    },
]
