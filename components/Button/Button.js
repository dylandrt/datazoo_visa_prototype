import React, { Component } from 'react'
import Link from 'next/link'
 
const Button = (props) => {
  return (
    <Link href={props.href}>
      <a className="button button__left">{props.title}</a>
    </Link>
  )
}

export default Button
