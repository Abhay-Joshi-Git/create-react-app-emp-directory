import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
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
      /* eslint-disable no-console */
      console.log('got depts', depts);
      this.setState({
        depts,
      });
    });
  }

  renderDeptList() {
    console.log('state', this.state);
    return this.state.depts.map(dept => (
      <ListGroupItem key={dept.id}>
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

export default DepartmentList;
