import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
  }
  componentDidCatch (error, errorInfo) {
    console.log(error, errorInfo)
  }
  render () {
    return this.props.children
  }
}

export default ErrorBoundary
