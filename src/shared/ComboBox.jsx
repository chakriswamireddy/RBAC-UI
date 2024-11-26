import React, { useEffect, useRef } from 'react';
import '@vaadin/multi-select-combo-box';

const ComboBox = ({ items, selectedItems, onSelectionChange }) => {
  const comboBoxRef = useRef(null);

  useEffect(() => {
    const comboBox = comboBoxRef.current;

  
    comboBox.items = items || [];
    comboBox.selectedItems = selectedItems || [];

    
    const handleSelectionChange = (event) => {
      if (onSelectionChange) {
        onSelectionChange(event.detail.value);  
      }
    };

    const handleOutsideClick = (event) => {
        if (comboBox && !comboBox.contains(event.target)) {
          comboBox.blur();  
        }
      };

    comboBox.addEventListener('selected-items-changed', handleSelectionChange);
    document.addEventListener('mousedown', handleOutsideClick);

    
    return () => {
      comboBox.removeEventListener('selected-items-changed', handleSelectionChange);

    };
  }, [items, selectedItems, onSelectionChange]);

  return (
    <vaadin-multi-select-combo-box  auto-expand-horizontally
    auto-expand-vertically ref={comboBoxRef} style={{ width: '220px' }}></vaadin-multi-select-combo-box>
  );
};

export default ComboBox;
