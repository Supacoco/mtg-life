import React from 'react'
import './button.css'

const PlusButton = ({ onGainLife }) => (
    <button
        className="button plus"
        onClick={onGainLife}
    >+</button>
)

export default PlusButton
