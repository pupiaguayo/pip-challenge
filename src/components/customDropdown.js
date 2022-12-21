import React, { useState, useContext } from "react";
import CurrenciesContext from "../context/currencies/currencies-context";
import styled, { css } from "styled-components";
import { ArrowDropdown } from "../utils/icons";

const SelectContainer = styled.div`
  height: 20%;
  width: 24%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  span {
    font-weight: bold;
  }
  @media screen and (max-width: 725px) {
    width: 80%;
  }
`;
const SelectLabelButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  height: 45px;
  border-radius: 4px;
  width: 100%;
  background: transparent;
  border: 1px solid #cccccc;
  span {
    font-weight: 100;
  }
`;

const DropdownStyle = styled.div`
  position: fixed;
  margin-top:280px;
  max-height: 160px;
  width: 19.5%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: #0e1342;
  padding: 20px 0;
  ${(p) =>
    p.isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
  @media screen and (max-width: 725px) {
    width: 64%;
  }
`;

const DropdownItem = styled.div`
  width: auto;
  display: flex;
  color: white;
  margin: 0.15rem 0;
  padding: 2px 15px;
  cursor: pointer;
  font-weight: lighter;
  font-size: 1em;
  &:hover,
  :focus,
  :focus:hover {
    outline: none;
  }
`;

export const SelectDropdown = ({ onChange, spanData }) => {
  const { getCurrencies, currencies } = useContext(CurrenciesContext);
  const [defaultCurrencie, setDefaultCurrencie] = useState("EUR");
  const result = Object.values(currencies);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value) => {
    getCurrencies(value);
  };
  const handleChange = (value) => {
    setDefaultCurrencie(value)
    console.log(value, "prueba valor");
    handleValueChange(value);

    if (onChange) onChange(value);
    handleClose();
  };
  return (
    <SelectContainer>
      <span>{spanData}</span>
      <SelectLabelButton onClick={handleOpen} aria-label="Button Select Label">
        <span>{defaultCurrencie}</span>
        <ArrowDropdown />
      </SelectLabelButton>

      <DropdownStyle isVisible={open} open={open}>
        {result?.map((value, index) => (
          <DropdownItem
            onClick={() => handleChange(value.name)}
            key={index}
          >
            {value.name}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};
