import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import { colourOptions } from './data';

export default class CreatableMulti extends Component {
  render() {
    return (
      <CreatableSelect
        isClearable
        isMulti
        options={colourOptions}
      />
    );
  }
}