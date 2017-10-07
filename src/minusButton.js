import React from 'react'
import './button.css'

const MinusButton = ({ onLoseLife }) => (
    <button
        className="button minus"
        onClick={onLoseLife}
    >-</button>
)

export default MinusButton
