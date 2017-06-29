import React from 'react';
import { render } from 'react-dom';

import App from 'pages/App';
import 'styles/index.scss';

const root = document.querySelector('#root');

render(<App />, root);
