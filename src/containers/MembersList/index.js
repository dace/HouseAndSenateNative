import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { bindActionCreators} from 'redux';
import { fetchMembers } from '../../actions/';


class MembersList extends Component {
  componentWillMount() {
    this.props.fetchMembers();
  }
  render() {
    return (
      <Text>Testing!!!</Text>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchMembers }, dispatch);
};

const mapStateToProps = state => {
  return {
    members: state.members,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);