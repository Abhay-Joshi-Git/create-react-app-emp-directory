import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Department from '../dept-item/Department';
import { getDepartments } from '../departmets-service';

class DepartmentList extends React.Component {
  constructor() {
    super();
    this.state = {
      depts: [],
    };
  }

  componentDidMount() {
    const deptsPromise = getDepartments();
    deptsPromise.then((depts) => {
      this.setState({
        depts,
      });
    });
  }

  departmentClickHandler = (event) => {
    this.props.history.push(`departments/${event.currentTarget.dataset.deptId}`);
  }

  renderDeptList() {
    return this.state.depts.map(dept => (
      <ListGroupItem data-dept-id={dept.id} key={dept.id} onClick={this.departmentClickHandler}>
        <Department department={{ ...dept }} />
      </ListGroupItem>
    ));
  }

  render() {
    return (
      <ListGroup style={{ width: 300 }}>
        {this.renderDeptList()}
      </ListGroup>
    );
  }
}

DepartmentList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default DepartmentList;
