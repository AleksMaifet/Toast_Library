import React, { memo } from 'react';

import { types } from '@/components/Icon/types';

const Icon = ({ icon }) => {
  const Icon = icon;
  return <Icon />;
};

export default memo(Icon);

Icon.propTypes = types;
