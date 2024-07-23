import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [yearOFBirth, setYearOFBirth] =useState('') 
  const [age, setAge] = useState()

  const handleDateChange = (event) => {
    // console.log(event.target.value)
    const Dob = event.target.value
    let [Year, Month, Day] = Dob.split("-")
    setYearOFBirth(Number(Year))
  }

  const calculateAge = () => {
    const date = new Date() 
    const year = date.getFullYear()
    const age = year - yearOFBirth
    console.log(age)
    setAge(age)
  }

  return (
    <div>
      <h2>Age calculator</h2>
      <h3>Enter your Date of Birth</h3>
      <input type="date" onChange={handleDateChange}/>
      <button onClick={calculateAge}>Calculate Age</button>

      {age && <p>You are {age} years old</p>}

      </div>
  )
}

export default App
