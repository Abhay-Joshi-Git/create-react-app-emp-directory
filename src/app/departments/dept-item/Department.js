import React from 'react';
import { Well, Label } from 'react-bootstrap';
import DepartmentType from '../department.type';

const Department = props => (
  <Well style={{ margin: '1rem 0px' }}>
    <p>Department Id: <Label>{props.department.id}</Label></p>
    <p>Department Name: <Label>{props.department.name}</Label></p>
  </Well>
);

Department.propTypes = {
  department: DepartmentType.isRequired,
};

export default Department;
