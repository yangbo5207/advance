import React from 'react';
import { render } from 'react-dom';

import Home from 'pages/Home';
import 'styles/index.scss';

const root = document.querySelector('#root');

render(<Home />, root);
