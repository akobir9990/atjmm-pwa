import { Container } from "@mui/system";
import React from "react";

import one from "./images/1.svg";
import two from "./images/2.svg";
import three from "./images/3.svg";
import four from "./images/4.svg";
import five from "./images/5.svg";
import six from "./images/6.svg";
import seven from "./images/7.svg";
import eight from "./images/8.svg";
import nine from "./images/9.svg";
import ten from "./images/10.svg";
import eleven from "./images/11.svg";
import twelve from "./images/12.svg";
import thurteen from "./images/13.svg";
import fourteen from "./images/14.svg";
import fifteen from "./images/15.svg";
import sixteen from "./images/16.svg";
import seventeen from "./images/17.svg";
import eightteen from "./images/18.svg";
import nineteen from "./images/19.svg";
import twenty from "./images/20.svg";
import twentyOne from "./images/21.svg";
import twentyTwo from "./images/22.svg";
import twentyThree from "./images/23.svg";
import twentyFour from "./images/24.svg";
import twentyFive from "./images/25.svg";
import twentySix from "./images/26.svg";
import twentySeven from "./images/27.svg";

function index() {
  const items = [
    { id: 1, name: one },
    { id: 2, name: two },
    { id: 3, name: three },
    { id: 4, name: four },
    { id: 5, name: five },
    { id: 6, name: six },
    { id: 7, name: seven },
    { id: 8, name: eight },
    { id: 9, name: nine },
    { id: 10, name: ten },
    { id: 11, name: eleven },
    { id: 12, name: twelve },
    { id: 13, name: thurteen },
    { id: 14, name: fourteen },
    { id: 15, name: fifteen },
    { id: 16, name: sixteen },
    { id: 17, name: seventeen },
    { id: 18, name: eightteen },
    { id: 19, name: nineteen },
    { id: 20, name: twenty },
    { id: 21, name: twentyOne },
    { id: 22, name: twentyTwo },
    { id: 23, name: twentyThree },
    { id: 24, name: twentyFour },
    { id: 25, name: twentyFive },
    { id: 26, name: twentySix },
    { id: 27, name: twentySeven },
  ];
  return (
    <Container>
      {items.map((item) => (
        <img
          className="w-[100%]"
          key={item.id}
          src={item.name}
          alt={item.name}
        />
      ))}
    </Container>
  );
}

export default index;
