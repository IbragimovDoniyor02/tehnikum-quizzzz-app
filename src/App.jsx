import React, { useState } from 'react';
import './styles/main.css';
import { Welcome } from './pages/Welcome';
import { StepOne }  from './pages/StepOne';
import { StepTwo }  from './pages/StepTwo';
import { StepThree } from './pages/StepThree';
import { Thanks } from './pages/Thanks';
import { StepFour } from './pages/StepFour';

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return <Welcome onGoNettPage={() => setCurrentPage (1)}/>
      case 1:
        return <StepOne onGoNettPage={() => setCurrentPage (2)}/>
      case 2:
        return <StepTwo onGoNettPage= {() => setCurrentPage(3)}/>
      case 3:
        return <StepThree onGoNettPage={() => setCurrentPage (4)}/>
      case 4:
        return <StepFour onGoNettPage={() => setCurrentPage (5)}/>
      case 5:
        return <Thanks />
        default:
          break;
    }
  }


  return (
    <div className="App">

    { renderCurrentPage()}

    </div>
     ); 
 }   


export default App;
