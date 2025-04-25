const Header = (props) => {

  console.log(props)
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  ) 
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  const courseInfo = props.courseInfo


  return (<div>
            <Part name={courseInfo[0].name} exercises={courseInfo[0].exercises} />
            <Part name={courseInfo[1].name} exercises={courseInfo[1].exercises} />
            <Part name={courseInfo[2].name} exercises={courseInfo[2].exercises} />
          </div> )
}

const Total = (props) => {
  const courseInfo = props.courseInfo
  return (<div>
            <p>--------------------------------------------------</p>
            <p>Number of exercises {courseInfo[0].exercises + courseInfo[1].exercises + courseInfo[2].exercises}</p>
          </div>)
}

const App = () => {

  const course = {name: 'Half Stack application development',
                  parts: [{name: 'Fundamentals of React', 
                         exercises: 10},
                         {name: 'Using props to pass data', 
                          exercises: 7},
                        {name: 'State of a component', 
                          exercises: 14}]}

  
  return (
    <div>
      <Header course={course.name}/>
      <Content courseInfo={course.parts}/>
      <Total courseInfo={course.parts}/>
    </div>
  )
}

export default App