import React, { Component, Fragment } from 'react'
import TextFieldGroup from '../Commons/TextFieldGroup'
import Link from 'next/link'
import Heading from '../Heading/Heading'

export default class WorkAndEducation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visaType: '',
      visaTypeOther: '',
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
              defaultChecked={this.state.visaType == 'Tourism' ? true : false}
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
              defaultChecked={this.state.visaType == 'Study' ? true : false}
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
              defaultChecked={this.state.visaType == 'Business' ? true : false}
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
              defaultChecked={this.state.visaType == 'Visiting friends/relatives' ? true : false}
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
              defaultChecked={this.state.visaType == 'Work' ? true : false}
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
              defaultChecked={this.state.visaType == 'Conference' ? true : false}
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
              defaultChecked={this.state.visaType == 'Other' ? true : false}
            />
            <span className="checkmark" />
          </label>
        </div>

        <TextFieldGroup
          label="Enter other here:"
          htmlFOR="visaOtherInput"
          name="visaOtherInput"
          id="visaOtherInput"
          value={this.state.visaTypeOther}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Intended date of arrival"
          htmlFOR="visaDateStart"
          name="visaDateStart"
          id="visaDateStart"
          value={this.state.visaDateStart}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Intended date of departure"
          htmlFOR="visaDateEnd"
          name="visaDateEnd"
          id="visaDateEnd"
          value={this.state.visaDateEnd}
          handleChange={this.handleChange}
        />

        <div className="visa-business">
          <h3 className="form-subheading">
            If visiting New Zealand for business purposes/a conference, please
            provide the following details
          </h3>

          <TextFieldGroup
            label="Name of person/organisation you are visiting or conference you are attending"
            htmlFOR="visaBusinessName"
            name="visaBusinessName"
            id="visaBusinessName"
            value={this.state.visaBusinessName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Address"
            htmlFOR="visaBusinessAddress"
            name="visaBusinessAddress"
            id="visaBusinessAddress"
            value={this.state.visaBusinessAddress}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Phone"
            htmlFOR="visaBusinessTelephone"
            name="visaBusinessTelephone"
            id="visaBusinessTelephone"
            value={this.state.visaBusinessTelephone}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Email"
            htmlFOR="visaBusinessEmail"
            name="visaBusinessEmail"
            id="visaBusinessEmail"
            value={this.state.visaBusinessEmail}
            handleChange={this.handleChange}
          />

          {/* Here */}
        </div>

        <div className="visa-work">
          <h3 className="form-subheading">
            If coming to work in New Zealand, please provide the following
            details
          </h3>

          <TextFieldGroup
            label="Name of company/business"
            htmlFOR="visaWorkName"
            name="visaWorkName"
            id="visaWorkName"
            value={this.state.visaWorkName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Address"
            htmlFOR="visaWorkAddress"
            name="visaWorkAddress"
            id="visaWorkAddress"
            value={this.state.visaWorkAddress}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Telephone"
            htmlFOR="visaWorkTelephone"
            name="visaWorkTelephone"
            id="visaWorkTelephone"
            value={this.state.visaWorkTelephone}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Email"
            htmlFOR="visaWorkEmail"
            name="visaWorkEmail"
            id="visaWorkEmail"
            value={this.state.visaWorkEmail}
            handleChange={this.handleChange}
          />
        </div>

        <div className="visa-study">
          <h3 className="form-subheading">
            If coming to New Zealand for study, please provide the following
            details
          </h3>

          <TextFieldGroup
            label="Name of institution"
            htmlFOR="visaStudyInstitution"
            name="visaStudyInstitution"
            id="visaStudyInstitution"
            value={this.state.visaStudyInstitution}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Intended programme of study"
            htmlFOR="visaStudyProgramme"
            name="visaStudyProgramme"
            id="visaStudyProgramme"
            value={this.state.visaStudyProgramme}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Area of study (for postgraduate/Masters/PhD students please specify thesis topic)"
            htmlFOR="visaStudyArea"
            name="visaStudyArea"
            id="visaStudyArea"
            value={this.state.visaStudyArea}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Programme of study start date"
            htmlFOR="visaStudyStartDate"
            name="visaStudyStartDate"
            id="visaStudyStartDate"
            value={this.state.visaStudyStartDate}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Programme of study end date"
            htmlFOR="visaStudyEndDate"
            name="visaStudyEndDate"
            id="visaStudyEndDate"
            value={this.state.visaStudyEndDate}
            handleChange={this.handleChange}
          />
        </div>

        <Link href="/steps/5">
          <a className="previous">Previous</a>
        </Link>

        <Link href="/steps/7">
          <a className="continue" onClick={this.handleSubmit}>Continue</a>
        </Link>
      </div>
    )
  }
}
