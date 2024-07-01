import './App.css'
import './index.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)

  return (
    <>
      {featPupId && (
    <div>
      <h2 style={{fontWeight: 'bolder'}}>{featuredPup.name}</h2>
      <ul style={{fontFamily: 'fantasy'}}>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
      </ul>
    </div>
  )}

    {
         puppies.map((puppy) => {
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
    }
    <p>{featPupId}</p>

    </>
  )
}

export default App
