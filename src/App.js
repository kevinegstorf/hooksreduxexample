import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../src/store/users';
import './App.css';

const App = props => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const loading = props.state.users.loading;
  const data = props.state.users.data.data;
  const error = props.state.users.error;

  const renderUsers = data => {
    return data.map(users => {
      return <h1 key={users.id}>{users.name}</h1>;
    });
  };

  return (
    <div className="App">
      {error ? (
        <div>{error}</div>
      ) : loading ? (
        <div>....loading</div>
      ) : (
        data && renderUsers(data)
      )}
    </div>
  );
};

const mapStateToProps = state => ({ state });

export default connect(
  mapStateToProps,
  { fetchUsers }
)(App);
