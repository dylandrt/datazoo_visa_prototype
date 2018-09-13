import React, { Component, Fragment } from 'react'
import TextFieldGroup from '../Commons/TextFieldGroup'
import Link from 'next/link'
import Heading from '../Heading/Heading'

export default class NewZealandContacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nzContactName: '',
      nzContactAddress: '',
      nzContactTelephone: '',
      nzContactEmail: ''
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
      <div className="form-page form-page-seven">
        <Heading title="New Zealand Contacts" />
      
        <TextFieldGroup
          label="Name"
          htmlFOR="nzContactName"
          name="nzContactName"
          id="nzContactName"
          value={this.state.nzContactName}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Address"
          htmlFOR="nzContactAddress"
          name="nzContactAddress"
          id="nzContactAddress"
          value={this.state.nzContactAddress}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Telephone"
          htmlFOR="nzContactTelephone"
          name="nzContactTelephone"
          id="nzContactTelephone"
          value={this.state.nzContactTelephone}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Email"
          htmlFOR="nzContactEmail"
          name="nzContactEmail"
          id="nzContactEmail"
          value={this.state.nzContactEmail}
          handleChange={this.handleChange}
        />

        <Link href="/steps/6">
          <a className="previous">Previous</a>
        </Link>

        <Link href="/success">
          <a className="continue" onClick={this.handleSubmit}>Submit</a>
        </Link>
      </div>
    )
  }
}
