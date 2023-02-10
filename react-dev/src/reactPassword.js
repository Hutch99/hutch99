import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
    this.logout = this.logout.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }

  logout() {
    this.setState({
      authorized: false });
  }

  render() {
    const login = (<form action ="#" onSubmit={ this.authorize }><input type="password" plaseholder="password"/><input type="submit" />  Its definatly not "swordfish".</form>);
    const contactInfo = (
      <div>      
        <ul>
          <li>
            hutch@hutchresources.com
          </li>
          <li>
            602-740-3656
          </li>
        </ul>
        <button action ="#" onClick={ this.logout } value="Logout" >Logout</button>
      </div>
    );
    return (
      <div id="authorization">
        <h1>{ this.state.authorized ? 'Contact' : 'Enter the Password' }</h1>
        { this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

export default Contact;