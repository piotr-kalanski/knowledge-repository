import React, { Component } from 'react';

import AsyncCreatableSelect from 'react-select/async-creatable';
import { colourOptions } from './data';

const colourStyles = {
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "#fff",
      backgroundColor: "#007bff",
      display: "inline-block",
      padding: ".25em .4em",
      fontSize: "75%",
      fontWeight: 700,
      lineHeight: 1,
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "baseline",
      borderRadius: ".25rem 0 0 .25rem",
      transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"

    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "white",
      backgroundColor: "#007bff",      
      borderRadius: "0 .25rem .25rem 0",
      ':hover': {
        backgroundColor: "#007bff",
        color: "#dc3545",
      },
    }),
  };

const filterColors = (inputValue) => {
    return colourOptions.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

  
const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class WithPromises extends Component {
  render() {
    return (
      <AsyncCreatableSelect
        cacheOptions
        defaultOptions
        isMulti
        styles={colourStyles}
        loadOptions={promiseOptions}
      />
    );
  }
}