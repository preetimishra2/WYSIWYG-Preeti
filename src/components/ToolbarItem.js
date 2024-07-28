import React from 'react';
import { useDrag } from 'react-dnd';

const ToolbarItem = ({ type, children }) => {
  const [, drag] = useDrag({
    type,
    item: { type },
  });

  return (
    <div ref={drag} className="toolbar-item">
      {children}
    </div>
  );
};

export default ToolbarItem;
