const Header = (props) => {
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
            <Part name={courseInfo[0].part} exercises={courseInfo[0].noExercises} />
            <Part name={courseInfo[1].part} exercises={courseInfo[1].noExercises} />
            <Part name={courseInfo[2].part} exercises={courseInfo[2].noExercises} />
          </div> )
}

const Total = (props) => {
  const courseInfo = props.courseInfo
  return (<div>
            <p>--------------------------------------------------</p>
            <p>Number of exercises {courseInfo[0].noExercises + courseInfo[1].noExercises + courseInfo[2].noExercises}</p>
          </div>)
}

const App = () => {

  const course = 'Half Stack application development'

  const courseInfo = [{part: 'Fundamentals of React', noExercises: 10},
                      {part: 'Using props to pass data', noExercises: 7},
                      {part: 'State of a component', noExercises: 14}]

  return (
    <div>
      <Header course={course}/>
      <Content courseInfo={courseInfo}/>
      <Total courseInfo={courseInfo}/>
    </div>
  )
}

export default App