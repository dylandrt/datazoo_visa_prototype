import React, { Component } from 'react'
import axios from 'axios'
import TextFieldGroup from '../Commons/TextFieldGroup'
import Link from 'next/link'
import Heading from '../Heading/Heading'

export default class MilitaryHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      militaryRank: '',
      militaryUnit: '',
      militaryService: '',
      militaryDateStart: '',
      militaryDateEnd: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    const data = [
      {
        militaryRank: this.state.militaryRank,
        militaryUnit: this.state.militaryUnit,
        militaryService: this.state.militaryService,
        militaryDateStart: this.state.militaryDateStart,
        militaryDateEnd: this.state.militaryDateEnd
      }
    ]
    
    const step = '4'
    const id = this.props.id
    
    axios.post(url, {
      step, id, data
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
      <div className="form-page form-page-four">
        <Heading title="Military History" />
  
        <TextFieldGroup
          label="Rank"
          htmlFOR="militaryRank"
          name="militaryRank"
          id="militaryRank"
          value={this.state.militaryRank}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Unit"
          htmlFOR="militaryUnit"
          name="militaryUnit"
          id="militaryUnit"
          value={this.state.militaryUnit}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Service"
          htmlFOR="militaryService"
          name="militaryService"
          id="militaryService"
          value={this.state.militaryService}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="Start date"
          htmlFOR="militaryDateStart"
          name="militaryDateStart"
          id="militaryDateStart"
          value={this.state.militaryDateStart}
          handleChange={this.handleChange}
        />

        <TextFieldGroup
          label="End date"
          htmlFOR="militaryDateEnd"
          name="militaryDateEnd"
          id="militaryDateEnd"
          value={this.state.militaryDateEnd}
          handleChange={this.handleChange}
        />

        <Link href="/steps/3">
          <a className="previous">Previous</a>
        </Link>

        <Link href="/steps/5">
          <a className="continue" onClick={this.handleSubmit}>Continue</a>
        </Link>
      </div>
    )
  }
}
