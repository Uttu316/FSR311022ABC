import React, { useState } from 'react'
import './style.css'
import MyList from './components/list/list'
import MyCounter from './components/counter'
import ClassCounter from './components/counter/classCounter'
import ErrorBoundary from './components/errorBoundary'
import MyPureComponent from './components/pureComponent'
import UsersList from './components/usersList'

function App () {
  const [state, setState] = useState(0)
  return (
    <div>
      {/* <h1>Hello, React</h1> */}
      <MyList />

      {/* <MyCounter /> */}
      {/* <button onClick={() => setState(state + 1)}>{state}</button> */}
      {/* <ErrorBoundary>
        <ClassCounter title='Class Counter' parentState={state} />
      </ErrorBoundary> */}
      {/* <MyPureComponent a={1} b={2} /> */}
      <UsersList />
    </div>
  )
}

export default App

// JSX: Javascript Syntax Extensions
