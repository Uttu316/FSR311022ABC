import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  onAdd = () => {
    this.setState({
      value: this.state.value + 1
    })
  }
  onMinus = () => {
    this.setState({
      value: this.state.value - 1
    })
  }

  render () {
    const { title } = this.props
    return (
      <div className='counter'>
        <h1>{title}</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.onAdd}> Add+</button>
        <button onClick={this.onMinus}> Minus-</button>
      </div>
    )
  }
}

export default Counter
