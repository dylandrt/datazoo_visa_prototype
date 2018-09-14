 import React, { Component } from 'react'
 import Button from '../components/Button/Button' 

export default class extends Component {
  render() {
    return (
      <section className="container">
        <div className="user-login form-page">
          <h1 className="heading">
            Chinese Immigration Applicant Form
          </h1>
          
          <div className="button-group">
            <Button href="/steps/1" title="Yeah" />
          </div>
        </div>

        <div className="user-login form-page">
          <h1 className="heading">
            login
          </h1>
        </div>
      </section>
    )
  }
}
