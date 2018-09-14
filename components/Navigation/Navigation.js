import React, { Component } from 'react'
import Link from 'next/link'
import Logo from '../Logo/Logo'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: false}

    this.handleNavClick = this.handleNavClick.bind(this)
  }

  componentDidMount() {
    
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

        <Logo />

        <div className={this.state.isToggleOn ? 'navBox navBox__open' : 'navBox navBox__closed'}>
          <Link href="">
            <a className="navBox--link">Link</a>
          </Link>

          <Link href="">
            <a className="navBox--link">Link</a>
          </Link>

          <Link href="">
            <a className="navBox--link">Link</a>
          </Link>

          <Link href="">
            <a className="navBox--link">Link</a>
          </Link>
        </div>
      </nav>
    )
  }
}
