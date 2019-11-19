import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaticAutosuggest from './components/StaticAutosuggest';
import AsyncAutosuggest from './components/AsyncAutosuggest';
import IntegrationWithRestAPIAutosuggest from './components/IntegrationWithRestAPIAutosuggest';
import IntegrationWithRestAPIAutosuggestFunctional from './components/IntegrationWithRestAPIAutosuggestFunctional';
import ReactSelectHelloWorld from './components/ReactSelect/HelloWorld';
import ReactSelectHelloWorldMulti from './components/ReactSelect/HelloWorldMulti';
import ReactSelectAsyncPromise from './components/ReactSelect/AsyncPromise';
import ReactSelectCreatable from './components/ReactSelect/Createable';
import ReactSelectCreatableMulti from './components/ReactSelect/CreateableMulti';
import ReactSelectAsynCreateableMulti from './components/ReactSelect/AsynCreateableMulti';

function App() {
  return (
    <React.Fragment>
        <StaticAutosuggest />
        <hr />
        <AsyncAutosuggest />
        <hr />
        <IntegrationWithRestAPIAutosuggest />
        <hr />
        <IntegrationWithRestAPIAutosuggestFunctional onChange={ (value) => console.log(value) } />
        <hr />
        <ReactSelectHelloWorld />
        <hr />
        <ReactSelectHelloWorldMulti />
        <hr />
        <ReactSelectAsyncPromise />
        <hr />
        <ReactSelectCreatable />
        <hr />
        <ReactSelectCreatableMulti />
        <hr />
        <ReactSelectAsynCreateableMulti />
    </React.Fragment>
  );
}

export default App;
