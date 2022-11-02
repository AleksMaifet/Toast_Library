import { useState } from 'react';

import ReactDOM from 'react-dom';

import { types } from './types';

const Portal = ({ children }) => {
  const [container, _] = useState(document.body);

  return ReactDOM.createPortal(children, container);
};

export default Portal;

Portal.propTypes = types;
