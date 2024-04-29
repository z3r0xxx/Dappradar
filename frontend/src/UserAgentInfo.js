import React from 'react';

class UserAgentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAgent: navigator.userAgent
    };
  }

  render() {
    return (
      <div>
        <h2>User Agent Info</h2>
        <p>User Agent: {this.state.userAgent}</p>
      </div>
    );
  }
}

export default UserAgentInfo;
