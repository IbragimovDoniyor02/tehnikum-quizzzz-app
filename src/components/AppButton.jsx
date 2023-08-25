import React from "react";

export const AppButton = ({ isDisabled, type, id, buttonText, ...props }) => {
    return(
        <button disabled= {isDisabled}
         type={type} 
         id={id}
         {...props}
         >
            {buttonText}
         </button>
    )
}