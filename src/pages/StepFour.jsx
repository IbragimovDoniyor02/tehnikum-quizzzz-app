import React, {useState} from "react";
import { Indicator } from "./components/indecator";
import { NumericAnswerItem } from "./components/NumericAnswerItem";
import { AppButton } from "./components/AppButton";
import { Header } from "./components/Header";
import { ListedAnswerItem } from "./components/ListedAnswerItem";


export  const StepFour = ( {onGoNettPage}) => {
  const [checkedItem, setCheckedItem] = useState(null)

  const answerOptions = [
    {
      id: 'numeric-answer-1',
      answerText:1
    },
    {
      id: 'numeric-answer-2',
      answerText:2
    },
    {
      id: 'numeric-answer-3',
      answerText:3
    },
    {
      id: 'numeric-answer-4',
      answerText:4
    },
    {
      id: 'numeric-answer-5',
      answerText:5
    },

  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator progress={4}/>
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description"
                >Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3 _active"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <div className="question">
            <Header type="h2" headerText="4. Занимательный вопрос"/> 
            
            <ul className="level-variants">
              {answerOptions.map (answerItem => (
                <ListedAnswerItem
                key={answerItem.id} 
                id={answerItem.id} 
                answerText={answerItem.answerText}
                isChecked={checkedItem === answerItem.id}
                onChange={() => setCheckedItem (answerItem.id)}
                />
              )) }
             </ul>
             <AppButton
              id="next-btn"
              isDisabled={false}
              type="submit"
              buttonText="Завершить"
              onClick={() => onGoNettPage ()} />
          </div>
        </div>
      </div>
    </div>
  )
}


