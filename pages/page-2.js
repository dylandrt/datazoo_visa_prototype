import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Heading from '../components/Heading/Heading'
import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class ResidentialAndContactInfo extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      step: '2',
      data: {
        flatNo: '',
        entranceNo: '',
        buildingNo: '',
        streetNo: '',
        streetName: '',
        complexName: '',
        district: '',
        city: '',
        province: '',
        telephone: '',
        email: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getUserInfo() {
    axios.get(`http://159.89.194.187:8082/applicants/5ba0a294e4a2796119f9e810`)
    .then(res => {
      if (res.data.person.residentialInfo) {
        let data = res.data.person.residentialInfo
        for (let property in data) {
          if (data[property] == null || data[property] == undefined) {
            data[property] = ''
          }
        }
        this.setState({data: data})
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
    const id = '5ba0a294e4a2796119f9e810'
    const step = this.state.step
    const data = this.state.data

    axios.post(`http://159.89.194.187:8082/applicants/`, {
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
        <div className="form-page form-page-two">
          <Heading title="Residential Address & Contact Information" />
    
          <TextFieldGroup
            type="number"
            label="Flat number"
            htmlFOR="flatNo"
            name="flatNo"
            id="flatNo"
            value={`${this.state.data.flatNo}`}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="number"
            label="Entrance number"
            htmlFOR="entranceNo"
            name="entranceNo"
            id="entranceNo"
            value={`${this.state.data.entranceNo}`}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="number"
            label="Building number"
            htmlFOR="buildingNo"
            name="buildingNo"
            id="buildingNo"
            value={`${this.state.data.buildingNo}`}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="number"
            label="Street number"
            htmlFOR="streetNo"
            name="streetNo"
            id="streetNo"
            value={`${this.state.data.streetNo}`}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="text"
            label="Street name"
            htmlFOR="streetName"
            name="streetName"
            id="streetName"
            value={this.state.data.streetName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="text"
            label="Complex name"
            htmlFOR="complexName"
            name="complexName"
            id="complexName"
            value={this.state.data.complexName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="text"
            label="District"
            htmlFOR="district"
            name="district"
            id="district"
            value={this.state.data.district}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="text"
            label="City"
            htmlFOR="city"
            name="city"
            id="city"
            value={this.state.data.city}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="text"
            label="Province"
            htmlFOR="province"
            name="province"
            id="province"
            value={this.state.data.province}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="number"
            label="Telephone"
            htmlFOR="telephone"
            name="telephone"
            id="telephone"
            value={`${this.state.data.telephone}`}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Email"
            htmlFOR="email"
            name="email"
            id="email"
            type="email"
            value={this.state.data.email}
            handleChange={this.handleChange}
          />

          <Link href="/steps/1">
            <a className="previous">Previous</a>
          </Link>

          <Link href="/steps/3">
            <a className="continue" onClick={this.handleSubmit}>Continue</a>
          </Link>
        </div>
      </section>
    )
  }
}
