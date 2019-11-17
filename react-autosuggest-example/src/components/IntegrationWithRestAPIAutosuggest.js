import React from 'react';
import Autosuggest from 'react-autosuggest';
import './Autosuggest.css';
  
  function getSuggestionValue(suggestion) {
    return suggestion.name;
  }
  
  function renderSuggestion(suggestion) {
    return (
        <div>
            <strong>{suggestion.id}: </strong>
            <span>{suggestion.name}</span>
        </div>
    );
  }
  
  class IntegrationWithRestAPIAutosuggest extends React.Component {
    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: [],
        isLoading: false
      };
    }
    
    loadSuggestions(value) {
      this.setState({
        isLoading: true
      });
    
      fetch('https://jsonplaceholder.typicode.com/comments?postId=' + value)
        .then(response => response.json())
        .then(json => this.setState({suggestions: json, isLoading: false}));
    }
  
    onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
    };
      
    onSuggestionsFetchRequested = ({ value }) => {
      this.loadSuggestions(value);
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions, isLoading } = this.state;
      const inputProps = {
        placeholder: "Type '1'",
        value,
        onChange: this.onChange
      };
      const status = (isLoading ? 'Loading...' : 'Type to load suggestions');
      
      return (
        <div>
          <div className="status">
            <strong>Status:</strong> {status}
          </div>
          <Autosuggest 
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} />
        </div>
      );
    }
  }
  

export default IntegrationWithRestAPIAutosuggest;
