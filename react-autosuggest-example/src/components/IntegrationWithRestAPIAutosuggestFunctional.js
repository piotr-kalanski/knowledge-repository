import React, { useState, useCallback } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Autosuggest from 'react-autosuggest';
import './Autosuggest.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const IntegrationWithRestAPIAutosuggestFunctional = (props) => {

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getSuggestionValue = useCallback(suggestion => {
    props.onChange(suggestion);
    return suggestion.name;
  }, [props]);
  
  const renderSuggestion = useCallback(suggestion => {
    return (
        <div>
            <strong>{suggestion.id}: </strong>
            <span>{suggestion.name}</span>
        </div>
    );
  }, []);

  const loadSuggestions = useCallback((value) => {
    setLoading(true);
    
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + value)
      .then(response => response.json())
      .then(json => {
        setSuggestions(json);
        setLoading(false);
      });
  }, []);
  
  const onChange = useCallback((event, { newValue }) => setValue(newValue), []);
      
  const onSuggestionsFetchRequested = useCallback(({ value }) => {
    loadSuggestions(value);
  }, [loadSuggestions]);
  
  const onSuggestionsClearRequested = useCallback(() => {
    setSuggestions([]);
  }, []);
  
  const inputProps = {
    placeholder: "Type '1'",
    value,
    onChange: onChange,
    className: 'form-control'
  };
      
  return (
    <Row>
      <Col xs={11}>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </Col>
      <Col xs={1}>
        { !isLoading || <Spinner animation="border" /> }
      </Col>
    </Row>
  );
}

export default IntegrationWithRestAPIAutosuggestFunctional;