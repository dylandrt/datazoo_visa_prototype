import Link from 'next/link'
import React, { Component } from 'react'
import axios from 'axios'
import Heading from '../components/Heading/Heading'
import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class TypeOfVisa extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      step: '6',
      data: {
        visaType: '',
        visaOtherInput: '',
        visaDateStart: '',
        visaDateEnd: '',
        visaBusinessName: '',
        visaBusinessAddress: '',
        visaBusinessTelephone: '',
        visaBusinessEmail: '',
        visaWorkName: '',
        visaWorkAddress: '',
        visaWorkTelephone: '',
        visaWorkEmail: '',
        visaStudyArea: '',
        visaStudyProgramme: '',
        visaStudyInstitution: '',
        visaStudyStartDate: '',
        visaStudyEndDate: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserInfo() {
    axios.get(`http://localhost:3001/applicants/${localStorage.id}`)
    .then(res => {
      console.log(res.data.person.visaType)
      if (res.data.person.visaType) {
        let data = res.data.person.visaType
        for (let property in data) {
          if (data[property] == null || data[property] == undefined) {
            data[property] = ''
          }
        }
        this.setState({ data: data })
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
        <div className="form-page form-page-six">
          <Heading title="Type of Visa" />
          
          <div className="form-field">
            <label htmlFor="visaTourism" className="radio">
              Tourism
              <input
                type="radio"
                name="visaType"
                value="Tourism"
                id="visaTourism"
                onChange={this.handleChange}
                defaultChecked={this.state.data.visaType == 'Tourism' ? true : false}
              />
              <span className="checkmark" />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="visaStudy" className="radio">
              Study
              <input 
                type="radio"
                name="visaType"
                value="Study"
                id="visaStudy"
                onChange={this.handleChange}
                defaultChecked={this.state.data.visaType == 'Study' ? true : false}
              />
              <span className="checkmark" />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="visaBusiness" className="radio">
              Business
              <input
                type="radio"
                name="visaType"
                value="Business"
                id="visaBusiness"
                onChange={this.handleChange}
                defaultChecked={this.state.data.visaType == 'Business' ? true : false}
              />
              <span className="checkmark" />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="visaFriendsRelatives" className="radio">
              Visiting friends/relatives
              <input
                type="radio"
                name="visaType"
                value="Visiting friends/relatives"
                id="visaFriendsRelatives"
                onChange={this.handleChange}
                defaultChecked={this.state.data.visaType == 'Visiting friends/relatives' ? true : false}
              />
              <span className="checkmark" />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="visaWork" className="radio">
              To work in New Zealand
              <input 
                type="radio" 
                name="visaType" 
                value="Work" 
                id="visaWork" 
                onChange={this.handleChange}
                defaultChecked={this.state.data.visaType == 'Work' ? true : false}
              />
              <span className="checkmark" />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="visaConference" className="radio">
              Conference
              <input
                type="radio"
                name="visaType"
                value="Conference"
                id="visaConference"
                onChange={this.handleChange}
                defaultChecked={this.state.data.visaType == 'Conference' ? true : false}
              />
              <span className="checkmark" />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="visaOther" className="radio">
              Other
              <input
                type="radio"
                name="visaType"
                value="Other"
                id="visaOther"
                onChange={this.handleChange}
                defaultChecked={this.state.data.visaType == 'Other' ? true : false}
              />
              <span className="checkmark" />
            </label>
          </div>

          <TextFieldGroup
            type="text"
            label="Enter other here:"
            htmlFOR="visaOtherInput"
            name="visaOtherInput"
            id="visaOtherInput"
            value={this.state.data.visaOtherInput}
            handleChange={this.handleChange}
          />
          
          <div className="form-field">
            <label htmlFor="visaDateStart">Intended date of arrival</label>
            <input
              type="date"
              id="visaDateStart"
              min="1900-01-01" max="2018-12-31"
              name="visaDateStart"
              value={this.state.data.visaDateStart}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="visaDateEnd">Intended date of departure</label>
            <input
              type="date"
              id="visaDateEnd"
              min="1900-01-01" max="2018-12-31"
              name="visaDateEnd"
              value={this.state.data.visaDateEnd}
              onChange={this.handleChange}
            />
          </div>

          <div className="visa-business">
            <h3 className="subheading">
              If visiting New Zealand for business purposes/a conference, please
              provide the following details
            </h3>

            <TextFieldGroup
              type="text"
              label="Name of person/organisation you are visiting or conference you are attending"
              htmlFOR="visaBusinessName"
              name="visaBusinessName"
              id="visaBusinessName"
              value={this.state.data.visaBusinessName}
              handleChange={this.handleChange}
            />

            <TextFieldGroup
              type="text"
              label="Address"
              htmlFOR="visaBusinessAddress"
              name="visaBusinessAddress"
              id="visaBusinessAddress"
              value={this.state.data.visaBusinessAddress}
              handleChange={this.handleChange}
            />

            <TextFieldGroup
              type="number" 
              label="Phone"
              htmlFOR="visaBusinessTelephone"
              name="visaBusinessTelephone"
              id="visaBusinessTelephone"
              value={`${this.state.data.visaBusinessTelephone}`}
              handleChange={this.handleChange}
            />

            <TextFieldGroup
              type="email"
              label="Email"
              htmlFOR="visaBusinessEmail"
              name="visaBusinessEmail"
              id="visaBusinessEmail"
              value={this.state.data.visaBusinessEmail}
              handleChange={this.handleChange}
            />
          </div>

          <div className="visa-work">
            <h3 className="subheading">
              If coming to work in New Zealand, please provide the following
              details
            </h3>

            <TextFieldGroup
              type="text"
              label="Name of company/business"
              htmlFOR="visaWorkName"
              name="visaWorkName"
              id="visaWorkName"
              value={this.state.data.visaWorkName}
              handleChange={this.handleChange}
            />

            <TextFieldGroup
              type="text"
              label="Address"
              htmlFOR="visaWorkAddress"
              name="visaWorkAddress"
              id="visaWorkAddress"
              value={this.state.data.visaWorkAddress}
              handleChange={this.handleChange}
            />

            <TextFieldGroup
              type="number"
              label="Telephone"
              htmlFOR="visaWorkTelephone"
              name="visaWorkTelephone"
              id="visaWorkTelephone"
              value={`${this.state.data.visaWorkTelephone}`}
              handleChange={this.handleChange}
            />

            <TextFieldGroup
              type="email"
              label="Email"
              htmlFOR="visaWorkEmail"
              name="visaWorkEmail"
              id="visaWorkEmail"
              value={this.state.data.visaWorkEmail}
              handleChange={this.handleChange}
            />
          </div>

          <div className="visa-study">
            <h3 className="subheading">
              If coming to New Zealand for study, please provide the following
              details
            </h3>

            <TextFieldGroup
              type="text"
              label="Name of institution"
              htmlFOR="visaStudyInstitution"
              name="visaStudyInstitution"
              id="visaStudyInstitution"
              value={this.state.data.visaStudyInstitution}
              handleChange={this.handleChange}
            />

            <TextFieldGroup
              type="text"
              label="Intended programme of study"
              htmlFOR="visaStudyProgramme"
              name="visaStudyProgramme"
              id="visaStudyProgramme"
              value={this.state.data.visaStudyProgramme}
              handleChange={this.handleChange}
            />

            <TextFieldGroup
              type="text"
              label="Area of study (for postgraduate/Masters/PhD students please specify thesis topic)"
              htmlFOR="visaStudyArea"
              name="visaStudyArea"
              id="visaStudyArea"
              value={this.state.data.visaStudyArea}
              handleChange={this.handleChange}
            />

            <div className="form-field">
              <label htmlFor="visaStudyStartDate">Programme of study start date</label>
              <input
                type="date"
                id="visaStudyStartDate"
                min="1900-01-01" max="2018-12-31"
                name="visaStudyStartDate"
                value={this.state.data.visaStudyStartDate}
                onChange={this.handleChange}
              />
            </div>


            <div className="form-field">
              <label htmlFor="visaStudyEndDate">Programme of study end date</label>
              <input
                type="date"
                id="visaStudyEndDate"
                min="1900-01-01" max="2018-12-31"
                name="visaStudyEndDate"
                value={this.state.data.visaStudyEndDate}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <Link href="/steps/5">
            <a className="previous">Previous</a>
          </Link>

          <Link href="/steps/7">
            <a className="continue" onClick={this.handleSubmit}>Continue</a>
          </Link>
        </div>
      </section>
    )
  }
}
