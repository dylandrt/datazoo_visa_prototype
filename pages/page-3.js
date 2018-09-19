import Link from 'next/link'
import React, { Component } from 'react'
import axios from 'axios'
import Heading from '../components/Heading/Heading'
import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class WorkAndEducation extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      step: '3',
      data: {
        occupation: '',
        companyName: '',
        companyBuildingName: '',
        companyStreetNo: '',
        companyStreetName: '',
        companyDistrict: '',
        companyProvince: '',
        companyCity: '',
        companyTelephone: '',
        companyEmail: '',
        attendanceDateStart: '',
        attendanceDateEnd: '',
        institutionName: '',
        studyProgramme: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserInfo() {
    axios.get(`http://172.17.160.49:3000/applicants/${localStorage.id}`)
    .then(res => {
      if (res.data.person.workAndEducation) {
        let data = res.data.person.workAndEducation
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
        <div className="form-page form-page-three">
          <Heading title="Work & Tertiary Education" />
    
          <TextFieldGroup
            label="Occupation/job title"
            htmlFOR="occupation"
            name="occupation"
            id="occupation"
            value={this.state.data.occupation}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Name of company/business"
            htmlFOR="companyName"
            name="companyName"
            id="companyName"
            value={this.state.data.companyName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Building name"
            htmlFOR="companyBuildingName"
            name="companyBuildingName"
            id="companyBuildingName"
            value={this.state.data.companyBuildingName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Street number"
            htmlFOR="companyStreetNo"
            name="companyStreetNo"
            id="companyStreetNo"
            value={this.state.data.companyStreetNo}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Street name"
            htmlFOR="companyStreetName"
            name="companyStreetName"
            id="companyStreetName"
            value={this.state.data.companyStreetName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="District"
            htmlFOR="companyDistrict"
            name="companyDistrict"
            id="companyDistrict"
            value={this.state.data.companyDistrict}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Province"
            htmlFOR="companyProvince"
            name="companyProvince"
            id="companyProvince"
            value={this.state.data.companyProvince}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="City"
            htmlFOR="companyCity"
            name="companyCity"
            id="companyCity"
            value={this.state.data.companyCity}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Telephone"
            htmlFOR="companyTelephone"
            name="companyTelephone"
            id="companyTelephone"
            value={this.state.data.companyTelephone}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Email"
            htmlFOR="companyEmail"
            name="companyEmail"
            id="companyEmail"
            value={this.state.data.companyEmail}
            handleChange={this.handleChange}
          />

          <h3 className="subheading">List your tertiary education</h3>

          <TextFieldGroup
            label="Name of institution"
            htmlFOR="institutionName"
            name="institutionName"
            id="institutionName"
            value={this.state.data.institutionName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Programme of study"
            htmlFOR="studyProgramme"
            name="studyProgramme"
            id="studyProgramme"
            value={this.state.data.studyProgramme}
            handleChange={this.handleChange}
          />

          <div className="form-field">
            <label htmlFor="attendanceDateStart">Started attendance</label>
            <input
              type="date"
              id="attendanceDateStart"
              min="1900-01-01" max="2018-12-31"
              name="attendanceDateStart"
              value={this.state.data.attendanceDateStart}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="attendanceDateEnd">Ended attendance</label>
            <input
              type="date"
              id="attendanceDateEnd"
              min="1900-01-01" max="2018-12-31"
              name="attendanceDateEnd"
              value={this.state.data.attendanceDateEnd}
              onChange={this.handleChange}
            />
          </div>

          <Link href="/steps/2">
            <a className="previous">Previous</a>
          </Link>

          <Link href="/steps/4">
            <a className="continue" onClick={this.handleSubmit}>Continue</a>
          </Link>
        </div>
      </section>
    )
  }
}
