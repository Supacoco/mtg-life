import React, { Component } from 'react'
import MinusButton from './minusButton.js'
import PlusButton from './plusButton.js'

import './player.css'

export default class Player extends Component {
    constructor (props) {
        super(props)
        this.state = {
            life: 20,
            poison: 0
        }
    }

    render () {
        return (
            <div className="player">
                <MinusButton onLoseLife={() => this.loseLife() } />
                <div>{this.state.life}</div>
                <PlusButton onGainLife={() => this.gainLife() } />
            </div>
        )
    }

    loseLife () {
        const actualLife = this.state.life
        this.setState({ life: actualLife - 1 })
    }

    gainLife () {
        const actualLife = this.state.life
        this.setState({ life: actualLife + 1 })
    }
}
