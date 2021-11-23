
import "./app.css"
import Trivia from "./components/Trivia"
import Timer from  "./components/Timer"
import {data} from "./components/data"
import {useState , useEffect} from "react"

function App() {

  const [questionNumber , setQuestionNumber] = useState(1);
  const [Stop , setStop] = useState(false);
  const [earned , setEarned] = useState("R 0")


 const moneyPyramid = [
   
  {id : 1 , amount: "R 100"},
  {id : 2 , amount: "R 200"},
  {id : 3 , amount: "R 300"},
  {id : 4 , amount: "R 400"},
  {id : 5 , amount: "R 1 000"},
  {id : 6 , amount: "R 2 000"},
  {id : 7 , amount: "R 4 000"},
  {id : 8 , amount: "R 8 000"},
  {id : 9 , amount: "R 16 000"},
  {id : 10 , amount: "R 32 000"},
  {id : 11 , amount: "R 64 000"},
  {id : 12 , amount: "R 125 000"},
  {id : 13 , amount: "R 250 000"},
  {id : 14 , amount: "R 500 000"},
  {id : 15 , amount: "R 1 000 000"},
  
 ].reverse();

 useEffect(() => {
   questionNumber > 1 && 
       setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1 ).amount);
 } , [moneyPyramid , questionNumber])

  return (
    <div className="app">
    
       <div className="main">
          { Stop ? (<h1 className = "endText">You earned: {earned} </h1>) : (
          
        <>
         <div className="top">
           <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber} />
           </div>
         </div>
         <div className="bottom">
           <Trivia  
           data={data} 
           setStop={setStop} 
           questionNumber = {questionNumber}
           setQuestionNumber={setQuestionNumber}  
           />
         </div>  
         </> 
          )}  
       </div>
       <div className="pyramid">
         <ul className="moneyList">
           { moneyPyramid.map((m) => (

          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>

           )) }
         </ul>
       </div>
    </div>
  );
}

export default App;
