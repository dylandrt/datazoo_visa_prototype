import Link from 'next/link'
import React, { Component } from 'react'
import axios from 'axios'
import Heading from '../components/Heading/Heading'
import TextFieldGroup from '../components/Commons/TextFieldGroup'

export default class MilitaryHistory extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      step: '4',
      data: [{
        militaryRank: '',
        militaryUnit: '',
        militaryService: '',
        militaryDateStart: '',
        militaryDateEnd: ''
      }]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getUserInfo() {
    axios.get(`http://localhost:8080/applicants/${localStorage.id}`)
    .then(res => {
      if (res.data.person.militaryService) {
        console.log(res.data.person.militaryService)
        this.setState({data: res.data.person.militaryService})
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
        <div className="form-page form-page-four">
          <Heading title="Military History" />

          <TextFieldGroup
            label="Rank"
            htmlFOR="militaryRank"
            name="militaryRank"
            id="militaryRank"
            value={this.state.data.militaryRank}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Unit"
            htmlFOR="militaryUnit"
            name="militaryUnit"
            id="militaryUnit"
            value={this.state.data.militaryUnit}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            label="Service"
            htmlFOR="militaryService"
            name="militaryService"
            id="militaryService"
            value={this.state.data.militaryService}
            handleChange={this.handleChange}
          />

          <div className="form-field">
            <label htmlFor="militaryDateStart">Start date</label>
            <input
              type="date"
              id="militaryDateStart"
              min="1900-01-01" max="2018-12-31"
              name="militaryDateStart"
              value={this.state.data.militaryDateStart}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="militaryDateEnd">End date</label>
            <input
              type="date"
              id="militaryDateEnd"
              min="1900-01-01" max="2018-12-31"
              name="militaryDateEnd"
              value={this.state.data.militaryDateEnd}
              onChange={this.handleChange}
            />
          </div>

          <Link href="/steps/3">
            <a className="previous">Previous</a>
          </Link>

          <Link href="/steps/5">
            <a className="continue" onClick={this.handleSubmit}>Continue</a>
          </Link>
        </div>
      </section>
    )
  }
}
