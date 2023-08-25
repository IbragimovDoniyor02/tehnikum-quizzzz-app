import React,{useState} from "react";
import { AppButton } from "./components/AppButton";
import { Header } from "./components/Header";
import { ListedAnswerItem } from "./components/ListedAnswerItem";
import { Indicator } from "./components/indecator";

export const StepThree = ({onGoNettPage}) => {
  const [checkedItem, setCheckedItem] = useState(null)
  const  answerType = [
    {
      id:"variant-1",
      text:"Ваш ответ 1",
      img:"./img/laugh.png",
    },
    {
      id:"variant-2",
      text:"Ваш ответ 2",
      img:"./img/hearts.png",
    },
    {
      id:"variant-3",
      text:"Ваш ответ 3",
      img:"./img/smirk.png",
    },
    {
      id:"variant-4",
      text:"Ваш ответ 4",
      img:"./img/fright.png",
    },


  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator progress={3}/>
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
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <div className="question">
            <Header type="h2" headerText="3. Занимательный вопрос "/>
            
         
            <ul className="emoji-variants">
            {
              answerType.map(answerItem => (
                <ListedAnswerItem 
                key={answerItem.id} 
                id={answerItem.id} 
                answerText={answerItem.text} 
                answerImg={answerItem.img}
                isChecked={checkedItem === answerItem.id}
                onChange={() => setCheckedItem (answerItem.id)}
                />
              ))
            }
            </ul>
            <AppButton 
            id="next-btn"
            isDisabled={!checkedItem}
            type="submit"
            buttonText="Далее"
            onClick={() => onGoNettPage()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

