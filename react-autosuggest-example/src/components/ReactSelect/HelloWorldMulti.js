import React from 'react';

import Select from 'react-select';
import { colourOptions } from './data';

export default function MyComponent() {
  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}