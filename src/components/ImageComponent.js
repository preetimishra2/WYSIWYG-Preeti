import React, { useState } from 'react';

const ImageComponent = ({ style, isPreviewMode }) => {
  const [src, setSrc] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-component" style={style}>
      {src ? (
        <img src={src} alt="uploaded" style={{ maxWidth: '30%', maxHeight: '30%' }} />
      ) : (
        !isPreviewMode && <input type="file" onChange={handleImageUpload} />
      )}
    </div>
  );
};

export default ImageComponent;

