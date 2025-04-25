const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello, {props.name}. You are {props.age} years old.</p>
    </div>)
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/agonzalez9784'>Adrian Gonzalez</a>
    </div>
  )
}

const App = () => {
  
  const friends = ['Peter', 'Maya']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App