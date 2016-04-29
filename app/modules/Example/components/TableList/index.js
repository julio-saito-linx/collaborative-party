import React, {PropTypes} from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import {  Table,
          TableHeaderColumn,
          TableRow,
          TableHeader,
          TableRowColumn,
          TableBody } from 'material-ui';

@Cerebral({
  usersList: ['example', 'usersList']
})

class TableList extends React.Component {

  static propTypes = {
    usersList: PropTypes.array,
    signals: PropTypes.object,
  };

  renderItens() {
    if (!this.props.usersList || this.props.usersList.length === 0) {
      return (
        <TableRow>
          <TableRowColumn>no-data</TableRowColumn>
          <TableRowColumn>no-data</TableRowColumn>
          <TableRowColumn>no-data</TableRowColumn>
        </TableRow>
      );
    }

    return this.props.usersList.map(item => (
      <TableRow key={item.id}>
        <TableRowColumn>{item.id}</TableRowColumn>
        <TableRowColumn>{item.name}</TableRowColumn>
        <TableRowColumn>{item.username}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    return (
      <Table onRowSelection={(selected) => console.log(selected)}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Body</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderItens()}
        </TableBody>
      </Table>
    );
  }
}

export default TableList;
