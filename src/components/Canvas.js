import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import TextBox from './TextBox';
import ImageComponent from './ImageComponent';
import ButtonComponent from './ButtonComponent';
import PropertiesPanel from './PropertiesPanel';

const Canvas = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const [, drop] = useDrop({
    accept: ['text', 'image', 'button'],
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      addNewItem(item.type, offset);
    },
  });

  const addNewItem = (type, offset) => {
    const newItem = { id: items.length + 1, type, offset, style: {} };
    setItems([...items, newItem]);
  };

  const handleEdit = (id, content) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, content } : item
      )
    );
  };

  const handleStyleChange = (name, value) => {
    if (selectedItem) {
      const updatedItems = items.map((item) =>
        item.id === selectedItem.id
          ? { ...item, style: { ...item.style, [name]: value } }
          : item
      );
      setItems(updatedItems);
      setSelectedItem(updatedItems.find((item) => item.id === selectedItem.id));
    }
  };

  const selectItem = (id) => {
    setSelectedItem(items.find((item) => item.id === id));
  };

  return (
    <div className="editor-container">
      {!isPreviewMode && (
        <PropertiesPanel
          selectedItem={selectedItem}
          onStyleChange={handleStyleChange}
        />
      )}
      <div ref={drop} className="canvas">
        {items.map((item) => {
          const style = {
           
            left: item.offset.x,
            top: item.offset.y,
            ...item.style,
          };
          switch (item.type) {
            case 'text':
              return (
                <TextBox
                  key={item.id}
                  id={item.id}
                  onEdit={handleEdit}
                  initialContent={item.content}
                  onSelect={selectItem}
                  style={style}
                  isPreviewMode={isPreviewMode}
                />
              );
            case 'image':
              return (
                <div key={item.id} style={style}>
                  <ImageComponent isPreviewMode={isPreviewMode} />
                </div>
              );
            case 'button':
              return (
                <div key={item.id} style={style}>
                  <ButtonComponent
                    id={item.id}
                    onEdit={handleEdit}
                    style={style}
                    isPreviewMode={isPreviewMode}
                  />
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
      <button
        className="toggle-mode-button"
        onClick={() => setIsPreviewMode(!isPreviewMode)}
      >
        {isPreviewMode ? 'Edit' : 'Preview'}
      </button>
    </div>
  );
};

export default Canvas;
