import React from 'react';
import { Well, Panel, Label } from 'react-bootstrap';
import PropTypes from 'prop-types';

const EmployeeDetails = props => (
  <Panel>
    {props.showHeader ? <Panel.Heading>Employee - {props.employee.id}</Panel.Heading> : null}
    <Panel.Body>
      <Well>
        <p> Name - <Label>{props.employee.name}</Label></p>
        <p> Department - <Label>{props.employee.department}</Label></p>
        <p> Address - <Label>{props.employee.address}</Label></p>
        <p> Mobile - <Label>{props.employee.mobile}</Label></p>
      </Well>
    </Panel.Body>
  </Panel>
);

EmployeeDetails.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    address: PropTypes.string,
    mobile: PropTypes.string,
  }).isRequired,
  showHeader: PropTypes.bool,
};

EmployeeDetails.defaultProps = {
  showHeader: true,
};

export default EmployeeDetails;
