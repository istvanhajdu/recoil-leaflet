import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { locationsQuery } from '../../recoil/selectors';
import { mapCenterState, mapZoomState, selectedLocationState } from '../../recoil/atoms';

import './SearchLocaton.scss';

const theme = {
  container: {
    position: 'relative',
  },
  input: {
    width: 240,
    height: 25,
    padding: '10px 20px',
    fontWeight: 300,
    fontSize: 16,
    border: '2px solid #2f89cd',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  inputFocused: {
    outline: 'none',
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  suggestionsContainer: {
    display: 'none',
  },
  suggestionsContainerOpen: {
    display: 'block',
    maxHeight: 145,
    overflow: 'auto',
    position: 'absolute',
    top: 45,
    width: 280,
    border: '1px solid #aaa',
    backgroundColor: '#fff',
    fontWeight: 300,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#2f89cd',
    borderTop: 'none',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 2,
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px',
  },
  suggestionHighlighted: {
    backgroundColor: '#ddd',
  },
};

export default function SearchLocation() {
  const { state, contents } = useRecoilValueLoadable(locationsQuery);
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const setZoomState = useSetRecoilState(mapZoomState);
  const setCenterState = useSetRecoilState(mapCenterState);
  const setselectedLocation = useSetRecoilState(selectedLocationState);

  const renderSuggestion = (suggestion) => <div>{suggestion.city}</div>;

  const onValueChange = (event, { newValue }) => {
    // Zoom out to default when user remove value after selected
    setValue(newValue);
    if (newValue === '') {
      setZoomState(2);
      setselectedLocation(null);
    }
  };
  const onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    setZoomState(10);
    setCenterState(suggestion.coordinates);
    setselectedLocation(suggestion);
  };
  const inputProps = {
    placeholder: 'Search for fake city',
    value,
    onChange: onValueChange,
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const getSuggestionValue = (suggestion) => suggestion.city;

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : contents.filter((content) => content.city.toLowerCase().slice(0, inputLength) === inputValue);
  };

  return state === 'hasValue' ? (
    <div className='search-location'>
      <Autosuggest
        suggestions={suggestions}
        theme={theme}
        renderSuggestion={renderSuggestion}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionSelected={onSuggestionSelected}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        inputProps={inputProps}
      ></Autosuggest>
    </div>
  ) : null;
}
