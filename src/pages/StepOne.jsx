import React, { useState } from "react";
import { AppButton } from "../components/AppButton";
import { Header } from "../components/Header";
import { AppImput } from "../components/AppImput";
import { Indicator } from "../components/Indicator";

export const StepOne = ({ onGoNettPage}) => {
  const[ userText, setUsertext ] = useState(null) 
  
  const isNextButtonDisablid = !userText
  

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Indicator progress={1}/>
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
              </label>
                <AppButton
                  isDisabled={isNextButtonDisablid}
                  type="submit"
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

