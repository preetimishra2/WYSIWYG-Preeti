import React from 'react';
import ToolbarItem from './ToolbarItem.js';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <ToolbarItem type="text">Text Box</ToolbarItem>
      <ToolbarItem type="image">Image</ToolbarItem>
      <ToolbarItem type="button">Button</ToolbarItem>
    </div>
  );
};

export default Toolbar;
