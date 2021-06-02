import React from 'react';
import EmojiRow from './EmojiRow';

const EmojiContainer = ({ emojiList }) => (
  <ul className="emojiList">
    {emojiList.map((emoji) => <EmojiRow key={emoji.title} emoji={emoji} />)}
  </ul>
);

export default EmojiContainer;
