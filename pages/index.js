 import React, { Component } from 'react'
 import Button from '../components/Button/Button'
 import Link from 'next/link'
 import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      referenceLogin: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    console.log('submitted: ' + JSON.stringify(this.state));
  }

  render() {
    return (
      <section className="container">
        <div className="user-login form-page">
          <h1 className="heading">
            Supplementary Form
          </h1>

          <h2 className="subheading">
            For Chinese visitors, workers and students
          </h2>
          
          <div className="button-group">
            <Button href="/steps/0" title="Start" />
          </div>

          <div className="separator"></div>

          <h2 className="subheading">
            Already started the form? Enter your reference number here:
          </h2>

          <TextFieldGroup
            label="Reference Number"
            htmlFOR="referenceLogin"
            name="referenceLogin"
            id="referenceLogin"
            value={this.state.referenceLogin}
            handleChange={this.handleChange}
          />

          <Link href="">
            <a className="continue" onClick={this.handleSubmit}>Continue</a>
          </Link>
        </div>

        <div className="user-login form-page">
          <h1 className="heading">
            login
          </h1>
        </div>
      </section>
    )
  }
}
