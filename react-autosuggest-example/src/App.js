import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaticAutosuggest from './components/StaticAutosuggest';
import AsyncAutosuggest from './components/AsyncAutosuggest';
import IntegrationWithRestAPIAutosuggest from './components/IntegrationWithRestAPIAutosuggest';
import IntegrationWithRestAPIAutosuggestFunctional from './components/IntegrationWithRestAPIAutosuggestFunctional';

function App() {
  return (
    <React.Fragment>
        <StaticAutosuggest />
        <AsyncAutosuggest />
        <IntegrationWithRestAPIAutosuggest />
        <IntegrationWithRestAPIAutosuggestFunctional onChange={ (value) => console.log(value) } />
    </React.Fragment>
  );
}

export default App;
