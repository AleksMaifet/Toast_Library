import { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import { types } from '@/components/Portal/types';
import { ID_PORTAL_TITLE } from '@/constants';

const createPortal = () => {
  const portal = document.createElement('div');
  portal.setAttribute('id', ID_PORTAL_TITLE);
  return portal;
};

const Portal = ({ children }) => {
  const [container, _] = useState(() => createPortal());

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
