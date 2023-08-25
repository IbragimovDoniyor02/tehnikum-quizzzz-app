import React, { useState } from "react";
import { AppButton } from "./components/AppButton";
import { Header } from "./components/Header";
import { AppImput } from "./components/AppImput";
import { Indicator } from "./components/indecator";

export const StepOne = ({ onGoNettPage}) => {
  const[ userText, setUsertext ] = useState(null) 
  
  const isNextButtonDisablid = !userText
  

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Indicator progress={1}/>
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description"
                >Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <div className="question">
            <Header type="h2" headerText="1. Занимательный вопрос"/>
              <label className="input-wrapper">
                <AppImput
                  required="isRequired"
                  type="text"
                  name="answer"
                  placeholder="Ваш ответ"
                  errorText="Введите номер в правильном формате например"
                  onChange={(e) => setUsertext (e.target.value.trim())}
                />
                {/* <span id="error-message">
                  Введите номер в правильном формате например
                </span> */}
              </label>
                <AppButton
                  isDisabled={isNextButtonDisablid}
                  id="next-btn"
                  buttonText="Далее"
                  onClick={() => onGoNettPage()}
                />
          </div>
        </div>
      </div>
    </div>
  )
}

