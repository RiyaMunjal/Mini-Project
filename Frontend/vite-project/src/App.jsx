import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const[jokes, setjokes]=useState([])

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  const ClickHandler=()=>{
      setCount(count+1)
  }

  return (
    <>
    <button type="submit" onClick={ClickHandler}>Submit{count}</button>
    <div>{jokes.length}</div>
      <div> 
       { jokes.map((joke) => (
        <div key ={joke.id}>
            <h2>{joke.name}</h2>
            <div>{joke.description}</div>
        </div>
        ))
        }
       </div>
    </>
  )
}

export default App
