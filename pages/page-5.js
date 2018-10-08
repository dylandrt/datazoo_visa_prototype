import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Heading from '../components/Heading/Heading'
import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class Relationships extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      step: '5',
      data: [
        {
          familyMemberName: '',
          familyMemberRelationship: '',
          familyMemberDateOfBirth: ''
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserInfo() {
    axios.get(`http://159.89.194.187:8082/applicants/5ba0a294e4a2796119f9e810`)
    .then(res => {
      if (res.data.person.relationships[0]) {
        this.setState({data: [res.data.person.relationships[0]]})
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
    // console.log({ data: [{ ...this.state.data[0], [e.target.name]: e.target.value }]})
    this.setState({ data: [{ ...this.state.data[0], [e.target.name]: e.target.value }]})
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
        <div className="form-page form-page-five">
          <Heading title="Relationships" />
          
          <h3 className="subheading">
            Provide details of your parents, partner/spouse and children (even if
            they're not travelling with you
          </h3>
          
          <TextFieldGroup
            type="text"
            label="Name"
            htmlFOR="familyMemberName"
            name="familyMemberName"
            id="familyMemberName"
            value={this.state.data[0].familyMemberName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="text"
            label="Relationship"
            htmlFOR="familyMemberRelationship"
            name="familyMemberRelationship"
            id="familyMemberRelationship"
            value={this.state.data[0].familyMemberRelationship}
            handleChange={this.handleChange}
          />
          
          <div className="form-field">
            <label htmlFor="familyMemberDateOfBirth">Date of birth</label>
            <input
              type="date"
              id="familyMemberDateOfBirth"
              min="1900-01-01" max="2018-12-31"
              name="familyMemberDateOfBirth"
              value={this.state.data[0].familyMemberDateOfBirth}
              onChange={this.handleChange}
            />
          </div>

          <Link href="/steps/4">
            <a className="previous">Previous</a>
          </Link>

          <Link href="/steps/6">
            <a className="continue" onClick={this.handleSubmit}>Continue</a>
          </Link>
        </div>  
      </section>
    )
  }
}
