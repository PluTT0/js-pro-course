import React from 'react';

const EmojiRow = ({ emoji }) => {
  const codePointHex = emoji.symbol.codePointAt(0).toString(16);
  const emojiSrc = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  return (
    <li>
      <img src={emojiSrc} alt="emojiImg" />
      {' '}
      {emoji.title}
    </li>
  );
};

export default EmojiRow;
