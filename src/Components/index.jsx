import React, { useState } from 'react';

function ColorBox(props) {
    const [color, setcolor] = useState('white');
    return (
        <div>
            {color}
            <button onClick={() => setcolor('red')}>Set background Red</button>
            <button onClick={() => setcolor('yellow')}>Set background Yellow</button>
        </div>
    );
}

export default ColorBox;
