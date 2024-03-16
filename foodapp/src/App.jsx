import { useState } from 'react'
import Search from "./Components/Search"
import FoodList from './Components/FoodList'
import Nav from "./Components/Nav"
import "./App.css"
import Container from "./Components/Container"
import InnerContainer from './Components/InnerContainer'
import FoodDetail from './Components/FoodDetail'
function App() {
  const [foodData,setFoodData]=useState([])
  const [foodId,setFoodId]=useState("656329")
 // const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Nav/>
     <Search foodData={foodData} setFoodData={setFoodData}/>
     <Container>
      <InnerContainer>
    <FoodList setFoodId={setFoodId} foodData={foodData}/>
    
     {/* <FoodList foodData={foodData}/> */}
     </InnerContainer>
     <InnerContainer>
    <FoodDetail foodId={foodId}/>
     </InnerContainer>
     </Container>
    </div>
  )
}

export default App
