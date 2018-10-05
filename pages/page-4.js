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
      data: [
        {
          militaryRank: '',
          militaryUnit: '',
          militaryService: '',
          militaryDateStart: '',
          militaryDateEnd: ''
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getUserInfo() {
    axios.get(`http://localhost:8082/applicants/5ba0a294e4a2796119f9e810`)
    .then(res => {
      let data = res.data.person.militaryHistory[0]
      if (data) {
        this.setState({data: [data]})
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

    axios.post(`http://localhost:8082/applicants/`, {
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
            type="text"
            label="Rank"
            htmlFOR="militaryRank"
            name="militaryRank"
            id="militaryRank"
            value={this.state.data[0].militaryRank}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="text"
            label="Unit"
            htmlFOR="militaryUnit"
            name="militaryUnit"
            id="militaryUnit"
            value={this.state.data[0].militaryUnit}
            handleChange={this.handleChange}
          />

          <TextFieldGroup
            type="text"
            label="Service"
            htmlFOR="militaryService"
            name="militaryService"
            id="militaryService"
            value={this.state.data[0].militaryService}
            handleChange={this.handleChange}
          />

          <div className="form-field">
            <label htmlFor="militaryDateStart">Start date</label>
            <input
              type="date"
              id="militaryDateStart"
              min="1900-01-01" max="2018-12-31"
              name="militaryDateStart"
              value={this.state.data[0].militaryDateStart}
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
              value={this.state.data[0].militaryDateEnd}
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
