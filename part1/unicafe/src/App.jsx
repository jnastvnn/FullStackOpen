import { useState } from 'react'

const StatisticsLine = ({ text, value }) => (
  <table>
    <tbody>
     <tr>
      <td>{text}</td>
      <td>{value}</td>
     </tr>
    </tbody>
  </table>

)

const Statistics = ({clicks}) => {

  let average = (clicks.good + clicks.bad*-1)/(clicks.good+clicks.bad+clicks.neutral)
  let positive = 100*(clicks.good)/(clicks.good+clicks.bad+clicks.neutral)

  return(
    <div>
        <h2>statistics</h2>

        <StatisticsLine text={"Good"} value={clicks.good} />
        <StatisticsLine text={"Neutral"} value={clicks.neutral} />
        <StatisticsLine text={"Bad: "} value={clicks.bad} />

        <StatisticsLine text={`Average: ${average}`} />
        <StatisticsLine text={`Positive: ${positive}%`} />

    </div>
  )

}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })
  

  const handleGoodClick = () =>
    setClicks({ ...clicks, good: clicks.good + 1 })
  
  const handleNeutralClick = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })

  const handleBadClick = () =>
    setClicks({ ...clicks, bad: clicks.bad + 1 })

  
  return (
    <div>
      <div>
        <h1>Give feedback</h1>       
        <Button handleClick={handleGoodClick} text={"good"}/>
        <Button handleClick={handleNeutralClick} text={"neutral"}/>       
        <Button handleClick={handleBadClick} text={"bad"}/>

        <Statistics clicks={clicks}></Statistics>
      </div>
    </div>
  )
}

export default App