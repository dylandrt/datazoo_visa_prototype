import Link from 'next/link'
import React, { Component } from 'react'
import axios from 'axios'
import Heading from '../components/Heading/Heading'
import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '313233313233313233313233',
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
    axios.get(`http://172.17.160.49:3000/applicants/${this.state.id}`)
    .then(res => {
      // const persons = res.data.applicants
      // this.setState({ persons })
      this.setState({data: res.data.person.personalInfo})
      
      console.log(res.data.person.personalInfo)
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getUserInfo()
  }

  handleChange(e) {
    console.log({ data: { ...this.state.data, [e.target.name]: e.target.value }})
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value }})
  }

  handleSubmit(e) {
    // console.log('submitted: ' + JSON.stringify(this.state))
    // e.preventDefault()

    const id = this.state.id
    const step = this.state.step
    const data = this.state.data
    
    axios.post(`http://172.17.160.49:3000/applicants/`, {
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
            label="Family name"
            id="familyName"
            htmlFOR="familyName"
            value={this.state.data.familyName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            name="firstName"
            label="First name"
            id="firstName"
            htmlFOR="firstName"
            value={this.state.data.firstName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            name="dateOfBirth"
            label="Date of birth"
            id="dateOfBirth"
            htmlFOR="dateOfBirth"
            value={this.state.data.dateOfBirth}
            handleChange={this.handleChange}
          />

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
            label="Other names"
            id="otherNames"
            htmlFOR="otherNames"
            value={this.state.data.otherNames}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Citizenship"
            htmlFOR="citizenship"
            name="citizenship"
            id="citizenship"
            value={this.state.data.citizenship}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Place of birth"
            htmlFOR="placeOfBirth"
            name="placeOfBirth"
            id="placeOfBirth"
            value={this.state.data.placeOfBirth}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Country of birth"
            htmlFOR="countryOfBirth"
            name="countryOfBirth"
            id="countryOfBirth"
            value={this.state.data.countryOfBirth}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Chinese Commercial Code"
            htmlFOR="chineseCommercialCode"
            name="chineseCommercialCode"
            id="chineseCommercialCode"
            value={this.state.data.chineseCommercialCode}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Chinese National ID"
            htmlFOR="chineseNationalId"
            name="chineseNationalId"
            id="chineseNationalId"
            value={this.state.data.chineseNationalId}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Chinese Bank Card Number"
            htmlFOR="chineseCardNo"
            name="chineseCardNo"
            id="chineseCardNo"
            value={this.state.data.chineseCardNo}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Passport number"
            htmlFOR="passportNo"
            name="passportNo"
            id="passportNo"
            value={this.state.data.passportNo}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Date of issue"
            htmlFOR="dateOfIssue"
            name="dateOfIssue"
            id="dateOfIssue"
            value={this.state.data.dateOfIssue}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Date of expiry"
            htmlFOR="dateOfExpiry"
            name="dateOfExpiry"
            id="dateOfExpiry"
            value={this.state.data.dateOfExpiry}
            handleChange={this.handleChange}
          />

          <Link href="/steps/2">
            <a className="continue" onClick={this.handleSubmit}>Continue</a>
          </Link>
        </div>
      </section>
    )
  }
}
