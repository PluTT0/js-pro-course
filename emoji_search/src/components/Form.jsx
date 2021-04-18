import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import EmojiContainer from './EmojiContainer';
import data from '../emojiList.json';
import './Form.scss';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const emojiList = data.filter((emoji) => emoji.title.includes(inputValue) || emoji.keywords.includes(inputValue));

  return (
    <div className="emojiSerch">
      <TextField id="outlined-basic" label="Serch emoji" variant="outlined" type="text" value={inputValue} onChange={onInputChange} />
      <EmojiContainer emojiList={emojiList.slice(0, 20)} />
    </div>
  );
};

export default Form;
