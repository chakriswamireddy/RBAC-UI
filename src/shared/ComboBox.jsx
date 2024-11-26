import React, { useEffect, useRef } from 'react';
import '@vaadin/multi-select-combo-box';
import useRoleStore from '../zustand/rolesStore';

const ComboBox = ({ items, selectedItems, onSelectionChange }) => {
  const comboBoxRef = useRef(null);
  const addPermissions = useRoleStore((state) => state.addPermissions)


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

      const handleCustomValueSet = (event) => {
        const newValue = event.detail; 
        const updatedItems = [...(items || []), newValue];
  
        comboBox.items = updatedItems;  
        comboBox.selectedItems = [...comboBox.selectedItems, newValue];  
  
        if (onSelectionChange) {
          onSelectionChange([...comboBox.selectedItems]);
          addPermissions(newValue)

        }
      };

    comboBox.addEventListener('selected-items-changed', handleSelectionChange);
    comboBox.addEventListener('custom-value-set', handleCustomValueSet);
    document.addEventListener('mousedown', handleOutsideClick);


    
    return () => {
      comboBox.removeEventListener('selected-items-changed', handleSelectionChange);
      comboBox.removeEventListener('custom-value-set', handleCustomValueSet);
    document.removeEventListener('mousedown', handleOutsideClick);


    };
  }, [items, selectedItems, onSelectionChange]);

  return (
    <vaadin-multi-select-combo-box  auto-expand-horizontally
    allow-custom-value  
    auto-expand-vertically ref={comboBoxRef} style={{ width: '220px' }}></vaadin-multi-select-combo-box>
  );
};

export default ComboBox;
