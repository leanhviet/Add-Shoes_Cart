import React from "react";
import Card from "./Card";
import { useData } from "../contextProvider";

const CardPrice = () => {
  const {
    value: { dataValue, sumPrices },
  } = useData();

  return (
    <>
      <Card
        titleCard="Your cart"
        price={sumPrices <= 0 ? "$0.00" : `$${sumPrices.toFixed(2)}`}
        cardPrice={dataValue.length > 0 ? true : false}
      ></Card>
    </>
  );
};

export default CardPrice;
