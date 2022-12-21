import React from "react";
import { Navbar } from "../components/navbar";
import { TitleHome } from "../components/title";
import { CurrenciesInputs } from "../components/currenciesInputsContainer";
export const Home = () => {
  return (
    <>
      <Navbar />
      <TitleHome />
      <CurrenciesInputs />
    </>
  );
};
