import React from "react";

export const NumericAnswerItem = ( { id, answerText, isChecked, name} ) => {
    return (
        <li className="variant-wrapper">
                <input required type="radio" name={name} id={id} />
                <label htmlFor={id}>{answerText}</label>
              </li>
    )
}