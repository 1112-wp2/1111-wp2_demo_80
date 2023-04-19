import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_80 from './App_80';

import { DemoProvider_80 } from './context/DemoContext_80';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoProvider_80>
      <App_80 />
    </DemoProvider_80>
  </React.StrictMode>
);

