import React, { Component, Fragment } from 'react'
import TextFieldGroup from '../Commons/TextFieldGroup'
import Link from 'next/link'
import Heading from '../Heading/Heading'

export default class WorkAndEducation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      occupation: '',
      companyName: '',
      companyBuildingName: '',
      companyStreetNo: '',
      companyStreetName: '',
      companyDistrict: '',
      companyProvince: '',
      companyTelephone: '',
      companyEmail: '',
      attendanceDateStart: '',
      attendanceDateEnd: '',
      institutionName: '',
      studyProgramme: ''
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
      <div className="form-page form-page-three">
        <Heading title="Work & Tertiary Education" />
  
        <TextFieldGroup
          label="Occupation/job title"
          htmlFOR="occupation"
          name="occupation"
          id="occupation"
          value={this.state.occupation}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Name of company/business"
          htmlFOR="companyName"
          name="companyName"
          id="companyName"
          value={this.state.companyName}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Building name"
          htmlFOR="companyBuildingName"
          name="companyBuildingName"
          id="companyBuildingName"
          value={this.state.companyBuildingName}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Street number"
          htmlFOR="companyStreetNo"
          name="companyStreetNo"
          id="companyStreetNo"
          value={this.state.companyStreetNo}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Street name"
          htmlFOR="companyStreetName"
          name="companyStreetName"
          id="companyStreetName"
          value={this.state.companyStreetName}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="District"
          htmlFOR="companyDistrict"
          name="companyDistrict"
          id="companyDistrict"
          value={this.state.companyDistrict}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="City"
          htmlFOR="companyProvince"
          name="companyProvince"
          id="companyProvince"
          value={this.state.companyProvince}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="City"
          htmlFOR="companyProvince"
          name="companyProvince"
          id="companyProvince"
          value={this.state.companyProvince}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Telephone"
          htmlFOR="companyTelephone"
          name="companyTelephone"
          id="companyTelephone"
          value={this.state.companyTelephone}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Email"
          htmlFOR="companyEmail"
          name="companyEmail"
          id="companyEmail"
          value={this.state.companyEmail}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Name of institution"
          htmlFOR="institutionName"
          name="institutionName"
          id="institutionName"
          value={this.state.institutionName}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Programme of study"
          htmlFOR="studyProgramme"
          name="studyProgramme"
          id="studyProgramme"
          value={this.state.studyProgramme}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Started attendance"
          htmlFOR="attendanceDateStart"
          name="attendanceDateStart"
          id="attendanceDateStart"
          value={this.state.attendanceDateStart}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Ended attendance"
          htmlFOR="attendanceDateEnd"
          name="attendanceDateEnd"
          id="attendanceDateEnd"
          value={this.state.attendanceDateEnd}
          handleChange={this.handleChange}
        />

        <Link href="/steps/2">
          <a className="previous">Previous</a>
        </Link>

        <Link href="/steps/4">
          <a className="continue" onClick={this.handleSubmit}>Continue</a>
        </Link>
      </div>
    )
  }
}
