import React, { useState } from 'react';

const ButtonComponent = ({ style, isPreviewMode }) => {
  const [text, setText] = useState('Click me');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="button-component" style={style}>
      {isPreviewMode ? (
        <button>{text}</button>
      ) : (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Button text"
        />
      )}
    </div>
  );
};

export default ButtonComponent;
