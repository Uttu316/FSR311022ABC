import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0,
      showLoader: false
    }

    this.onAdd = this.onAdd.bind(this)
    this.onMinus = this.onMinus.bind(this)
  }

  // static getDerivedStateFromProps (props, state) {
  //   console.log('I am getDerivedStateFromProps')
  //   return { value: props.title ? 3 : -1 }
  // }

  componentDidMount () {
    console.log('I am mounted')
    this.setState({ showLoader: true })
    setTimeout(() => {
      this.setState({ showLoader: false, value: 2 })
    }, 2000)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('I am shouldComponentUpdate')
    console.log(nextProps, nextState)
    if (nextState.value > 2 || nextProps.toggleState == true) {
      return false
    }
    return true
  }

  // getSnapshotBeforeUpdate (prevProps, prevStates) {
  //   console.log(
  //     'I am getSnapshotBeforeUpdate, Lets compare before values after updation '
  //   )
  //   console.log(prevProps, this.props, prevStates, this.state)
  //   return null
  // }
  componentDidUpdate () {
    console.log('Updation done Successfully ')
  }
  componentWillUnmount () {
    console.log('I am unmounting')
  }

  onAdd () {
    this.setState({
      value: this.state.value + 1
    })
  }
  onMinus () {
    this.setState({
      value: this.state.value - 1
    })
  }

  render () {
    console.log('I am rendering')
    const { title } = this.props
    const { showLoader } = this.state
    // throw new Error('I am random error')
    return (
      <div className='counter'>
        <h1>{title}</h1>
        <h2>{this.state.value}</h2>
        {showLoader && 'Loading...'}
        <button onClick={this.onAdd}> Add+</button>
        <button onClick={this.onMinus}> Minus-</button>
      </div>
    )
  }
}

export default Counter
