import React from "react";
import {Header} from "react";
import { Paragraph } from "./components/Paragraph";
import { AppButton } from "./components/AppButton";

export const Thanks = () => {
  return (
    <div class="container">
      <div class="wrapper">
        <div class="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header type="h1" headerText="Спасибо за прохождение опроса!" />
          <Paragraph paragraphText="Получи свою скидку по ссылке ниже или другое блаблабла" />
          <AppButton id="get-link" buttonText="Получить ссылку" />
        </div>
      </div>
    </div>
  )
}


