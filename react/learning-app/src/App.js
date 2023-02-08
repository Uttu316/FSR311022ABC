import React from 'react'
import './style.css'
import MyList from './components/list/list'
import MyCounter from './components/counter'
import ClassCounter from './components/counter/classCounter'

function App () {
  return (
    <div>
      <h1>Hello, React</h1>
      <MyList />
      {/* <MyCounter /> */}
      <ClassCounter title='Class Counter' />
    </div>
  )
}

export default App

// JSX: Javascript Syntax Extensions
