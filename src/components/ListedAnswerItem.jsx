import React from "react";

export const ListedAnswerItem = ({id, isChecked, answerText, onChange, answerParagraph,answerImg}) => {
    return(
        <li className="variant-wrapper">
              <input required 
              type="radio" 
              name="variant" 
              id={id} 
              checked={isChecked}
              onChange={onChange}
              />
              <label
               htmlFor={id}>
                {answerText}
                <p>{answerParagraph}</p>
                <img src={answerImg} alt="" />
              </label>
            </li>
    )
}