import React from 'react';

function Options () {
    const options = [
        {key: 'move', text: 'Move to...', disabled: true},
        {key: 'currentlyReading' ,text: 'Currently Reading'},
        {key: 'wantToRead', text: 'Want to Read'},
        {key: 'read', text: 'Read'},
        {key: 'none', text: 'None'},
    ];
    return (
        <select>
            {options.map((option) => (
                <option key={option.key} value={option.key} disabled={option.disabled}>{option.text}</option>
            ))}
      </select>
    )
}

export default Options