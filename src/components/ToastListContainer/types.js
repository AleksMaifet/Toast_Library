import PropTypes, { objectOf } from 'prop-types';

export const types = {
  position: PropTypes.string,
  spacing: objectOf({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
  }),
  toastList: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.func.isRequired,
        currentLabel: PropTypes.string.isRequired,
        toastContent: PropTypes.string.isRequired,
        currentColor: PropTypes.string.isRequired,
        autoCloseTime: PropTypes.number.isRequired,
        currentBackgroundColor: PropTypes.string.isRequired,
        animation: PropTypes.string.isRequired,
        autoClose: PropTypes.bool.isRequired,
      }),
    ),
  ),
  handleCloseToast: PropTypes.func.isRequired,
}.isRequired;
