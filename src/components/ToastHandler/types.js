import PropTypes, { objectOf } from 'prop-types';

export const types = {
  position: PropTypes.string,
  spacing: objectOf({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
  }),
}.isRequired;
