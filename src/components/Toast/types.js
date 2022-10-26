import PropTypes from 'prop-types';

export const types = {
  value: PropTypes.objectOf(
    PropTypes.shape({
      icon: PropTypes.func.isRequired,
      currentTitle: PropTypes.string.isRequired,
      toastContent: PropTypes.string.isRequired,
      currentColor: PropTypes.string.isRequired,
      currentBackgroundColor: PropTypes.string.isRequired,
      animation: PropTypes.string.isRequired,
    }),
  ),
  onCloseToast: PropTypes.func.isRequired,
}.isRequired;
