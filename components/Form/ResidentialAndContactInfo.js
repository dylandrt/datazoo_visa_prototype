import Link from 'next/link'
import React, { Component } from 'react'
import axios from 'axios'
import Heading from '../components/Heading/Heading'
import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class ResidentialAndContactInfo extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      step: '2'
      data: {
        flatNo: '',
        entranceNo: '',
        buildingNo: '',
        streetName: '',
        complexName: '',
        district: '',
        province: '',
        telephone: '',
        email: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserInfo() {
    axios.get(`http://localhost:8080/applicants/${localStorage.id}`)
    .then(res => {
      if (res.data.person.residentialAndContactInfo) {
        this.setState({data: res.data.person.residentialAndContactInfo})
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
    console.log({ data: { ...this.state.data, [e.target.name]: e.target.value }})
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value }})
  }

  handleSubmit(e) {
    const id = String(localStorage.id)
    const step = this.state.step
    const data = this.state.data

    axios.post(`http://localhost:8080/applicants/`, {
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
      <div className="form-page form-page-two">
        <Heading title="Residential Address & Contact Information" />
  
        <TextFieldGroup
          label="Flat number"
          htmlFOR="flatNo"
          name="flatNo"
          id="flatNo"
          value={this.state.flatNo}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Entrance number"
          htmlFOR="entranceNo"
          name="entranceNo"
          id="entranceNo"
          value={this.state.entranceNo}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Building number"
          htmlFOR="buildingNo"
          name="buildingNo"
          id="buildingNo"
          value={this.state.buildingNo}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Street name"
          htmlFOR="streetName"
          name="streetName"
          id="streetName"
          value={this.state.streetName}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Complex name"
          htmlFOR="complexName"
          name="complexName"
          id="complexName"
          value={this.state.complexName}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="District"
          htmlFOR="district"
          name="district"
          id="district"
          value={this.state.district}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Province"
          htmlFOR="province"
          name="province"
          id="province"
          value={this.state.province}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Telephone"
          htmlFOR="telephone"
          name="telephone"
          id="telephone"
          value={this.state.telephone}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Email"
          htmlFOR="email"
          name="email"
          id="email"
          type="email"
          value={this.state.email}
          handleChange={this.handleChange}
        />

        <Link href="/steps/1">
          <a className="previous">Previous</a>
        </Link>

        <Link href="/steps/3">
          <a className="continue" onClick={this.handleSubmit}>Continue</a>
        </Link>
      </div>
    )
  }
}
