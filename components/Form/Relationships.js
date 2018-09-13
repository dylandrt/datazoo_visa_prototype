import React, { Component, Fragment } from 'react'
import TextFieldGroup from '../Commons/TextFieldGroup'
import Link from 'next/link'
import Heading from '../Heading/Heading'

export default class Relationships extends Component {
  constructor(props) {
    super(props)
    this.state = {
      familyMemberName: '',
      familyMemberRelationship: '',
      familyMemberDateOfBirth: ''
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
      <div className="form-page form-page-five">
        <Heading title="Relationships" />
        
        <h3 className="form-subheading">
          Provide details of your parents, partner/spouse and children (even if
          they're not travelling with you
        </h3>
        
        <TextFieldGroup
          label="Name"
          htmlFOR="familyMemberName"
          name="familyMemberName"
          id="familyMemberName"
          value={this.state.familyMemberName}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Relationship"
          htmlFOR="familyMemberRelationship"
          name="familyMemberRelationship"
          id="familyMemberRelationship"
          value={this.state.familyMemberRelationship}
          handleChange={this.handleChange}
        />
        <TextFieldGroup
          label="Date of birth"
          htmlFOR="familyMemberDateOfBirth"
          name="familyMemberDateOfBirth"
          id="familyMemberDateOfBirth"
          value={this.state.familyMemberDateOfBirth}
          handleChange={this.handleChange}
        />

        <Link href="/steps/4">
          <a className="previous">Previous</a>
        </Link>

        <Link href="/steps/6">
          <a className="continue" onClick={this.handleSubmit}>Continue</a>
        </Link>
      </div>
    )
  }
}
