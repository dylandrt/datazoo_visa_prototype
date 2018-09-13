import React, { Component, Fragment } from 'react'
import TextFieldGroup from '../Commons/TextFieldGroup'
import Link from 'next/link'
import Header from '../Header/Header'

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      familyName: '',
      firstName: '',
      dateOfBirth: '',
      otherNames: '',
      citizenship: '',
      placeOfBirth: '',
      chineseCommercialCode: '',
      chineseNationalId: '',
      chineseCardNo: '',
      passportNo: '',
      dateOfIssue: '',
      countryOfBirth: '',
      dateOfExpiry: '',
      gender: ''
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
      <div className="form-page form-page-one">
        <Header title="Personal Information" />
      
        <TextFieldGroup
          name="familyName"
          label="Family name"
          id="familyName"
          htmlFOR="familyName"
          value={this.state.familyName}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          name="firstName"
          label="First name"
          id="firstName"
          htmlFOR="firstName"
          value={this.state.firstName}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          name="dateOfBirth"
          label="Date of birth"
          id="dateOfBirth"
          htmlFOR="dateOfBirth"
          value={this.state.dateOfBirth}
          handleChange={this.handleChange}
        />

        {/* add to a new component later */}
        <div className="form-field">
          <label htmlFor="gender">Gender</label>
          <label htmlFor="male" className="radio">
            Male
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              defaultChecked={this.state.gender == 'male' ? true : false}
            />
            <span className="checkmark" />
          </label>

          <label htmlFor="female" className="radio">
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              defaultChecked={this.state.gender == 'female' ? true : false}
            />
            <span className="checkmark" />
          </label>
        </div>

        <TextFieldGroup
          name="otherNames"
          label="Other names"
          id="otherNames"
          htmlFOR="otherNames"
          value={this.state.otherNames}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Citizenship"
          htmlFOR="citizenship"
          name="citizenship"
          id="citizenship"
          value={this.state.citizenship}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Place of birth"
          htmlFOR="placeOfBirth"
          name="placeOfBirth"
          id="placeOfBirth"
          value={this.state.placeOfBirth}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Country of birth"
          htmlFOR="countryOfBirth"
          name="countryOfBirth"
          id="countryOfBirth"
          value={this.state.countryOfBirth}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Chinese Commercial Code"
          htmlFOR="chineseCommercialCode"
          name="chineseCommercialCode"
          id="chineseCommercialCode"
          value={this.state.chineseCommercialCode}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Chinese National ID"
          htmlFOR="chineseNationalId"
          name="chineseNationalId"
          id="chineseNationalId"
          value={this.state.chineseNationalId}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Chinese Bank Card Number"
          htmlFOR="chineseCardNo"
          name="chineseCardNo"
          id="chineseCardNo"
          value={this.state.chineseCardNo}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Passport number"
          htmlFOR="passportNo"
          name="passportNo"
          id="passportNo"
          value={this.state.passportNo}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Date of issue"
          htmlFOR="dateOfIssue"
          name="dateOfIssue"
          id="dateOfIssue"
          value={this.state.dateOfIssue}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Date of expiry"
          htmlFOR="dateOfExpiry"
          name="dateOfExpiry"
          id="dateOfExpiry"
          value={this.state.dateOfExpiry}
          handleChange={this.handleChange}
        />

        <Link href="/steps/2">
          <a className="continue" onClick={this.handleSubmit}>Continue</a>
        </Link>
      </div>
    )
  }
}
