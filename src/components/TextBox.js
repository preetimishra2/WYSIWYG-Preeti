import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { Editor, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

const TextBox = ({ id, onEdit, initialContent, onSelect, style, isPreviewMode }) => {
  const [editorState, setEditorState] = useState(
    initialContent
      ? EditorState.createWithContent(convertFromRaw(initialContent))
      : EditorState.createEmpty()
  );

  useEffect(() => {
    if (initialContent) {
      setEditorState(EditorState.createWithContent(convertFromRaw(initialContent)));
    }
  }, [initialContent]);

  const [{ isDragging }, drag] = useDrag({
    type: 'text',
    item: { id, type: 'text' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleEditorChange = (state) => {
    setEditorState(state);
    onEdit(id, convertToRaw(state.getCurrentContent()));
  };

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: style.fontSize ? `${style.fontSize}px` : 'inherit',
        color: style.color,
        textAlign: style.textAlign,
        padding: '10px',
      }}
      onClick={() => onSelect(id)}
    >
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        placeholder="Enter text here..."
        readOnly={isPreviewMode}
      />
    </div>
  );
};

export default TextBox;
