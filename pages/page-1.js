import Link from 'next/link'
import React, { Component } from 'react'
import axios from 'axios'
import Heading from '../components/Heading/Heading'
import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class PersonalInfo extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      step: '1',
      data: {
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
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getUserInfo() {
    axios.get(`http://localhost:3001/applicants/${localStorage.id}`)
    .then(res => {
      if (res.data.person.personalInfo) {
        this.setState({data: res.data.person.personalInfo})
      } else {
        console.log('user has no data')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getUserInfo()
  }

  handleChange(e) {
    // console.log({ data: { ...this.state.data, [e.target.name]: e.target.value }})
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value }})
  }

  handleSubmit(e) {
    const id = String(localStorage.id)
    const step = this.state.step
    const data = this.state.data

    axios.post(`http://localhost:3001/applicants/`, {
      id, step, data
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <section className="container">
        <div className="form-page form-page-one">
          <Heading title="Personal Information" />
        
          <TextFieldGroup
            name="familyName"
            type="text"
            label="Family name"
            id="familyName"
            htmlFOR="familyName"
            value={this.state.data.familyName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            name="firstName"
            type="text"
            label="First name"
            id="firstName"
            htmlFOR="firstName"
            value={this.state.data.firstName}
            handleChange={this.handleChange}
          />

          <div className="form-field">
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input
              type="date"
              id="dateOfBirth"
              min="1900-01-01" max="2018-12-31"
              name="dateOfBirth"
              value={this.state.data.dateOfBirth}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="gender">Gender</label>
            <label htmlFor="male" className="radio">
              Male
              <input
                type="radio"
                name="gender"
                value="Male"
                id="male"
                onChange={this.handleChange}
                defaultChecked={this.state.data.gender == 'Male' ? true : false}
              />
              <span className="checkmark" />
            </label>

            <label htmlFor="female" className="radio">
              Female
              <input
                type="radio"
                name="gender"
                value="Female"
                id="female"
                onChange={this.handleChange}
                defaultChecked={this.state.data.gender == 'Female' ? true : false}
              />
              <span className="checkmark" />
            </label>
          </div>

          <TextFieldGroup
            name="otherNames"
            type="text"
            label="Other names"
            id="otherNames"
            htmlFOR="otherNames"
            value={this.state.data.otherNames}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Citizenship"
            type="text"
            htmlFOR="citizenship"
            name="citizenship"
            id="citizenship"
            value={this.state.data.citizenship}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Place of birth"
            type="text"
            htmlFOR="placeOfBirth"
            name="placeOfBirth"
            id="placeOfBirth"
            value={this.state.data.placeOfBirth}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Country of birth"
            type="text"
            htmlFOR="countryOfBirth"
            name="countryOfBirth"
            id="countryOfBirth"
            value={this.state.data.countryOfBirth}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Chinese Commercial Code"
            type="number"
            htmlFOR="chineseCommercialCode"
            name="chineseCommercialCode"
            id="chineseCommercialCode"
            value={this.state.data.chineseCommercialCode}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="number"
            label="Chinese National ID"
            htmlFOR="chineseNationalId"
            name="chineseNationalId"
            id="chineseNationalId"
            value={this.state.data.chineseNationalId}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="number"
            label="Chinese Bank Card Number"
            htmlFOR="chineseCardNo"
            name="chineseCardNo"
            id="chineseCardNo"
            value={this.state.data.chineseCardNo}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="number"
            label="Passport number"
            htmlFOR="passportNo"
            name="passportNo"
            id="passportNo"
            value={this.state.data.passportNo}
            handleChange={this.handleChange}
          />

          <div className="form-field">
            <label htmlFor="dateOfIssue">Date of Issue</label>
            <input
              type="date"
              id="dateOfIssue"
              min="1900-01-01" max="2018-12-31"
              name="dateOfIssue"
              value={this.state.data.dateOfIssue}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="dateOfExpiry">Date of Expiry</label>
            <input
              type="date"
              id="dateOfExpiry"
              min="1900-01-01" max="2018-12-31"
              name="dateOfExpiry"
              value={this.state.data.dateOfExpiry}
              onChange={this.handleChange}
            />
          </div>

          <Link href="/steps/2">
            <a className="continue" onClick={this.handleSubmit}>Continue</a>
          </Link>
        </div>
      </section>
    )
  }
}
