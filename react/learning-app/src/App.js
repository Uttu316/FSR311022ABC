import './style.css'

function App () {
  const name = 'Utkarsh Gupta'
  const age = 24

  const person = {
    name: 'Fahad',
    occupation: 'Hr',
    city: 'Bhopal'
  }

  const students = [
    {
      name: 'Shivam',
      age: 23
    },
    {
      name: 'Riyaz',
      age: 22
    },
    {
      name: 'Tara',
      age: 24
    },
    {
      name: 'Shazan',
      age: 21
    },
    {
      name: 'Zabi',
      age: 20
    }
  ]

  return (
    <div>
      <h1>Hello,</h1>
      <h2>We are here</h2>
      <sub>To</sub>
      <h3>learn</h3>
      <h1>React</h1>
      {name + ' ' + age}
      <div className='container'>
        <span>{person.name}</span> <span>{person.occupation}</span>{' '}
        <span>{person.city}</span>
      </div>
      <ul>
        {students.map((item, index) => {
          return (
            <li>
              {item.name} {item.age}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App

// JSX: Javascript Syntax Extensions
