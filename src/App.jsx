import React from 'react'
import Skills from './Components/Skills'
import './index.css'
import Data from './Data.json'
import UserData from "./Components/UserData";
import Counter from "./Components/Counter"
import Info from "./Components/DataFetching"

const name = "Joshua"


const App = () => {

  // How to map through data with loop
  // let items = [];
  // for(let i = 0; i < Data.length; i++)
  // items.push(<Skills CardTitle = {Data[i].title} Desc = {Data[i].Desc}/>  )
 

  // for mapping 
let items = [];
items = Data.map((i) => {
  return (<Skills key={i.id} CardTitle = {i.title} Desc = {i.Desc}/>)
})


  return (
    <>
     <h1>Refreshing my React.js skill</h1>
     <p>My name is {name}</p>

{/* the result will put here */}
     {items} 
     <UserData />
     <Counter />
     <Info />

    </>
  )
}

export default App