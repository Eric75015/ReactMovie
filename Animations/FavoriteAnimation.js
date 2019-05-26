// Animations/FadeIn.js

import React from 'react'
import { Animated, Dimensions } from 'react-native'

class FavoriteAnimation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            size: new Animated.Value(this._getSize())
        }
    }

    _getSize(){
        if(this.props.Large){
            return 80;
        }
        return 40;
    }
    componentDidUpdate() {
        Animated.spring(
            this.state.size,
            {
                toValue: this._getSize(),
                speed: 1

            }
        ).start()
    }

    render() {
        return (
            <Animated.View
                style={{ width: this.state.size, height: this.state.size }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default FavoriteAnimation