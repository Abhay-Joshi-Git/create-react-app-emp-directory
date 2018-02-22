import React from 'react';
import { ListGroup, ListGroupItem, Well, Label, Modal } from 'react-bootstrap';
import find from 'lodash/find';
import { getEmployees, getEmployeeByDeptId } from '../employee-service';
import { getDepartment } from '../../departments/departmets-service';
import DepartmentType from '../../departments/department.type';
import EmployeeDetails from './employee-details.js';

class EmployeeList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      employees: [],
      showEmpDetails: false,
      selectedEmp: null,
    };
    /* eslint-disable no-console */
    this.getEmployees(props.department);
  }

  componentWillReceiveProps(nextProps) {
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
      this.setState({
        employees,
      });
    });
  }

  empClickHandler = (event) => {
    const emp = find(this.state.employees, item => item.id === +event.currentTarget.dataset.empId);
    if (emp) {
      getDepartment(emp.deptId).then((dept) => {
        const selectedEmp = {
          ...emp,
          department: dept ? dept.name : '',
        };
        console.log('click handler', emp, dept, selectedEmp);
        this.setState({
          showEmpDetails: true,
          selectedEmp,
        });
      });
    }
  }

  handleClose = () => {
    this.setState({
      showEmpDetails: false,
    });
  }

  renderEmpList() {
    return this.state.employees ?
      this.state.employees.map(emp => (
        <ListGroupItem
          data-emp-id={emp.id}
          key={emp.id}
          onClick={this.empClickHandler}
          style={{ margin: '1rem 0px' }}
        >
          <Well>
            <p>Employee Id: <Label>{emp.id}</Label></p>
            <p>Employee Name: <Label>{emp.name}</Label></p>
          </Well>
        </ListGroupItem>
      )) :
      null;
  }

  renderEmpDetails() {
    return (
      this.state.showEmpDetails ?
        <Modal show={this.state.showEmpDetails} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="float-left">Employee - {this.state.selectedEmp.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EmployeeDetails employee={this.state.selectedEmp} showHeader={false} />
          </Modal.Body>
        </Modal> :
        null
    );
  }

  render() {
    /* eslint-disable no-console */
    console.log('rendering emp', this.state.employees);
    return (
      <ListGroup style={{ width: 300 }}>
        {this.renderEmpList()}
        {this.renderEmpDetails()}
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
