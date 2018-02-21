import PropTypes from 'prop-types';

const EmployeeSummaryType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

const EmployeeType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  deptId: PropTypes.number.isRequired,
  address: PropTypes.string,
  mobile: PropTypes.string,
});

export { EmployeeSummaryType, EmployeeType };
