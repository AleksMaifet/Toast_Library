import { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import { ID_PORTAL_TITLE } from '@/constants';

import { types } from './types';

const handleSetPortal = () => {
  const portal = document.createElement('div');
  portal.setAttribute('id', ID_PORTAL_TITLE);
  return portal;
};

const Portal = ({ children }) => {
  const [container, _] = useState(() => handleSetPortal());

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;

Portal.propTypes = types;
