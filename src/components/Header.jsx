import React from "react";

export const Header = ({ headerText, type }) => {
    const renderHeader = (type) => {
        switch (type) {
            case 'h1':
                return <h1>{headerText}</h1>
            case 'h2':
                return <h2>{headerText}</h2> 
            case 'h3':
                return <h3>{headerText}</h3>      
            case 'h4':
                return <h4>{headerText}</h4>
            default:
                break;
        }
    }

    return (renderHeader(type))
}