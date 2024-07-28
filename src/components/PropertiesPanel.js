import React from 'react';

const PropertiesPanel = ({ selectedItem, onStyleChange }) => {
  if (!selectedItem) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onStyleChange(name, value);
  };

  return (
    <div className="properties-panel">
      <label>
        Font Size:
        <input
          type="number"
          name="fontSize"
          value={selectedItem.style.fontSize || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Color:
        <input
          type="color"
          name="color"
          value={selectedItem.style.color || '#000000'}
          onChange={handleChange}
        />
      </label>
      <label>
        Alignment:
        <select
          name="textAlign"
          value={selectedItem.style.textAlign || 'left'}
          onChange={handleChange}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>
    </div>
  );
};

export default PropertiesPanel;
