import React from 'react';
import * as components from './components';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...components,
};

export default ReactLiveScope;
