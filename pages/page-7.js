import Link from 'next/link'
import React, { Component } from 'react'
import axios from 'axios'
import Heading from '../components/Heading/Heading'
import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class NewZealandContacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      step: '7',
      data: {
        nzContactName: '',
        nzContactAddress: '',
        nzContactTelephone: '',
        nzContactEmail: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserInfo() {
    axios.get(`http://localhost:8080/applicants/${localStorage.id}`)
    .then(res => {
      if (res.data.person.nzContacts) {
        this.setState({data: res.data.person.nzContacts})
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
      <section className="container">
        <div className="form-page form-page-seven">
          <Heading title="New Zealand Contacts" />
        
          <TextFieldGroup
            label="Name"
            htmlFOR="nzContactName"
            name="nzContactName"
            id="nzContactName"
            value={this.state.data.nzContactName}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Address"
            htmlFOR="nzContactAddress"
            name="nzContactAddress"
            id="nzContactAddress"
            value={this.state.data.nzContactAddress}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Telephone"
            htmlFOR="nzContactTelephone"
            name="nzContactTelephone"
            id="nzContactTelephone"
            value={this.state.data.nzContactTelephone}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Email"
            htmlFOR="nzContactEmail"
            name="nzContactEmail"
            id="nzContactEmail"
            value={this.state.data.nzContactEmail}
            handleChange={this.handleChange}
          />

          <Link href="/steps/6">
            <a className="previous">Previous</a>
          </Link>

          <Link href="/success">
            <a className="continue" onClick={this.handleSubmit}>Submit</a>
          </Link>
        </div>
      </section>
    )
  }
}
