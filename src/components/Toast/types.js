import PropTypes from 'prop-types';

export const types = {
  value: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.func.isRequired,
      currentLabel: PropTypes.string.isRequired,
      toastContent: PropTypes.string.isRequired,
      autoCloseTime: PropTypes.number.isRequired,
      currentColor: PropTypes.string.isRequired,
      currentBackgroundColor: PropTypes.string.isRequired,
      animation: PropTypes.string.isRequired,
      autoClose: PropTypes.bool.isRequired,
    }),
  ),
  onCloseToast: PropTypes.func.isRequired,
}.isRequired;
