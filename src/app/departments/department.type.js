import PropTypes from 'prop-types';

const DepartmentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export default DepartmentType;
