import React, { Component } from 'react'
import Link from 'next/link'
import Logo from '../Logo/Logo'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: false}

    this.handleNavClick = this.handleNavClick.bind(this)
  }
  handleNavClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    return (
      <nav className="navigation">
        <i className="material-icons navigation--burger" onClick={this.handleNavClick}>
          {this.state.isToggleOn ? 'close' : 'menu'}
        </i>

        <Link href="/">
          <a><Logo /></a>
        </Link>

        <div className={this.state.isToggleOn ? 'navBox navBox__open' : 'navBox navBox__closed'}>
          <Link href="/">
            <a className="navBox--link" onClick={this.handleNavClick}>Home</a>
          </Link>

          <Link href="/dashboard">
            <a className="navBox--link" onClick={this.handleNavClick}>Dashboard</a>
          </Link>

          <Link href="/steps/1">
            <a className="navBox--link" onClick={this.handleNavClick}>Step 1</a>
          </Link>

          <Link href="/steps/2">
            <a className="navBox--link" onClick={this.handleNavClick}>Step 2</a>
          </Link>

          <Link href="/steps/3">
            <a className="navBox--link" onClick={this.handleNavClick}>Step 3</a>
          </Link>

          <Link href="/steps/4">
            <a className="navBox--link" onClick={this.handleNavClick}>Step 4</a>
          </Link>

          <Link href="/steps/5">
            <a className="navBox--link" onClick={this.handleNavClick}>Step 5</a>
          </Link>

          <Link href="/steps/6">
            <a className="navBox--link" onClick={this.handleNavClick}>Step 6</a>
          </Link>

          <Link href="/steps/7">
            <a className="navBox--link" onClick={this.handleNavClick}>Step 7</a>
          </Link>
        </div>
      </nav>
    )
  }
}
