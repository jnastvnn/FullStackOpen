const Header = (props) => {  return (
  <h1>{props.course}</h1>    
)
}
const Content =(props) => { 
  return (
    <div>
      <Part part={props.part1}/>
      <Part part={props.part2}/>
      <Part part={props.part3}/>
    </div>
)}
const Total = (props) => { return (
  <p>
    Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}
  </p>
)}
const Part =(props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}
const App = () => {
  const course = 'Half Stack application development' 
  const parts = [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]}/>
      <Total part1={parts[0]} part2={parts[1]} part3={parts[2]}/>
    </div>
  )
}

export default App