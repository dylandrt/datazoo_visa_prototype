import React, { Component, Fragment } from 'react'
import TextFieldGroup from '../Commons/TextFieldGroup'
import Link from 'next/link'
import Header from '../Header/Header'

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
      <div className="form-page form-page-four">
        <Header title="Military History" />
  
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
