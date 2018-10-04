 import React, { Component } from 'react'
 import Button from '../components/Button/Button'
 
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      referenceLogin: '',
      username: '',
      password: '',
      loggedIn: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    if (this.state.username == 'admin' && this.state.password == 'password') {
      this.state.loggedIn = true
    }
  }

  handleSubmit(e) {
    
  }

  render() {
    return (
      <section className="container">
        <div className="user-login form-page">
          <h1 className="heading">
            Supplementary Visa Form
          </h1>

          <h2 className="subheading">
            For Chinese visitors, workers and students. Please read specifications and requirements related to your application.
          </h2>
          
          <div className="button-group">
            <Button href="/steps/0" title="Start" />
          </div>
        </div>

        <div className="user-login form-page">
          <h1 className="heading">
            Admin Login
          </h1>
          <div className="form-field">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={this.handleChange}
            />
          </div>

          <div className="button-group">
            <Button href={this.state.loggedIn ? '/dashboard' : '/'} title="Login" onClick={this.handleSubmit} />
          </div>
        </div>
      </section>
    )
  }
}
