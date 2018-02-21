import React from 'react';
import { ListGroup, ListGroupItem, Well, Label } from 'react-bootstrap';
import { getEmployees, getEmployeeByDeptId } from '../employee-service';
import DepartmentType from '../../departments/department.type';

class EmployeeList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      employees: [],
    };
    /* eslint-disable no-console */
    console.log('in constructor', props);
    this.getEmployees(props.department);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    this.getEmployees(nextProps.department);
  }

  getEmployees = (dept) => {
    let empPromise;
    if (dept) {
      empPromise = getEmployeeByDeptId(dept.id);
    } else {
      empPromise = getEmployees();
    }
    empPromise.then((employees) => {
      console.log('employees', employees);
      this.setState({
        employees,
      });
    });
  }

  empClickHandler = () => {
  }

  renderEmpList() {
    return this.state.employees ?
      this.state.employees.map(emp => (
        <ListGroupItem data-dept-id={emp.id} key={emp.id} onClick={this.empClickHandler}>
          <Well>
            <p>Employee Id: <Label>{emp.id}</Label></p>
            <p>Employee Name: <Label>{emp.name}</Label></p>
          </Well>
        </ListGroupItem>
      )) :
      null;
  }

  render() {
    /* eslint-disable no-console */
    console.log('rendering emp', this.state.employees);
    return (
      <ListGroup style={{ width: 300 }}>
        {this.renderEmpList()}
      </ListGroup>
    );
  }
}

EmployeeList.propTypes = {
  department: DepartmentType || null,
};

EmployeeList.defaultProps = {
  department: null,
};

export default EmployeeList;
