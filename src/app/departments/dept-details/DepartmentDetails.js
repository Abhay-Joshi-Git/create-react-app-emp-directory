import React from 'react';
import PropTypes from 'prop-types';
import { Well, Label } from 'react-bootstrap';
import { getDepartment } from '../departmets-service';
import EmployeeList from '../../employees/emp-list/EmployeeList';

class DepartmentDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      department: null,
    };
  }

  componentDidMount() {
    /* eslint-disable no-console */
    console.log(this.props.match.params.id, this.state.department);
    getDepartment(+this.props.match.params.id).then((dept) => {
      this.setState({
        department: dept,
      });
    });
  }

  renderDepartmentDetails() {
    return this.state.department ?
      (
        <div>
          <Well style={{ textAlign: 'left' }}>
            <p>Department Id: <Label>{this.state.department.id}</Label></p>
            <p>Department Name: <Label>{this.state.department.name}</Label></p>
          </Well>
          <EmployeeList department={{ ...this.state.department }} />
        </div>
      ) :
      null;
  }

  render() {
    console.log('dept details state', this.state);
    return (
      <div className="container d-flex flex-column" style={{ flexGrow: 1 }}>
        {this.renderDepartmentDetails()}
      </div>
    );
  }
}

DepartmentDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default DepartmentDetails;
