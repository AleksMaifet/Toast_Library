import { memo, useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import { types } from '@/components/Portal/types';

const Index = ({ children }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default memo(Index);

Index.propTypes = types;
