import React, { Component } from 'react';
import axios from 'axios';
import TableList from './containers/table_list';
import Footer from './components/footer';
import './style/App.css';

const RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentUsers: [],
      allTimeUsers: []
    }
  }

  componentDidMount() {
    axios.all([this.fetchRecentUsers(), this.fetchAllTimeUsers()])
      .then(axios.spread((recentUsers, allTimeUsers) => {
        this.setState({ recentUsers: recentUsers.data, allTimeUsers: allTimeUsers.data });
    }));
  }

  fetchRecentUsers() {
    return axios.get(RECENT);
  }

  fetchAllTimeUsers() {
    return axios.get(ALLTIME);
  }

  render() {
    return (
      <div className="container">
        <TableList users={this.state.recentUsers} />
        <Footer />
      </div>
    )
  }
}

export default App;
