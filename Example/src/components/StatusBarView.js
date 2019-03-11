import React,{Component} from 'react'
import {
    View,
    Dimensions,
    StatusBar,
    Platform
} from 'react-native'
const PropTypes = require('prop-types')

export default class StatusBarView extends Component{

    render() {
        if (Platform.OS === 'ios') {
            return (
                <StatusBar
                    barStyle={this.props.barStyle}
                    backgroundColor={this.props.backgroundColor}
                />
            )
        } else {
            return (
                <View style={{paddingTop: 20,backgroundColor: this.props.backgroundColor}}>
                    <StatusBar
                        barStyle={this.props.barStyle}
                        backgroundColor={this.props.backgroundColor}
                    />
                </View>
            )
        }

    }

}

StatusBarView.defaultProps = {
    backgroundColor: 'white',
    barStyle: 'dark-content', //'default', 'light-content', 'dark-content'
}

StatusBarView.propTypes = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.string,
}
