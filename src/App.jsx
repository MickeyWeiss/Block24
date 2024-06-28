import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log([puppies])
  return (
    <>
    {
         puppies.map((puppy) => {
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
    }
    </>
  )
}

export default App
