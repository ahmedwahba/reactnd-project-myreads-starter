import React from 'react';

function Options (props) {
    const options = [
        {key: 'move', text: 'Move to...', disabled: true},
        {key: 'currentlyReading' ,text: 'Currently Reading'},
        {key: 'wantToRead', text: 'Want to Read'},
        {key: 'read', text: 'Read'},
        {key: 'none', text: 'None'},
    ];

    let currentValue = props.currentSelection || 'move'

    return (
        <select value={currentValue}  onChange={props.onOptionChange}>
            {options.map((option) => (
                <option key={option.key} 
                        value={option.key}
                        disabled={option.disabled}>{option.text}
                </option>
            ))}
      </select>
    )
}

export default Options