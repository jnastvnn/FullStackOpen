const Header = ({course}) => {  return (
    <h1>{course.name}</h1>    
  )
  }
  const Content =({parts}) => { 
    return (
      <div>
        {parts.map(part => (<Part key={part.id}   part={part}/>))}
      </div>
  )}
  const Total = ({parts}) => { 
    const total = parts.reduce((sum, p) => sum + p.exercises, 0)
    return (
    <p>
      <strong>
      Number of exercises {total}
      </strong>
    </p>
  )}
  const Part =({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Course = ({course}) => {
    return(
      <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
    )
  }
  
export default Course