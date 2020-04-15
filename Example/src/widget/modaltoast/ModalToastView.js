import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    Modal
} from 'react-native'
import {ToastInOutDuration, ToastInHeight} from '../data/Constants'

const MaxWidthRatio = 0.8
export default class ModalToastView extends Component{

    constructor(props) {
        super(props)

        const {width,height} = Dimensions.get('window')

        this.state = {
            deviceWidth: width,
            deviceHeight: height,
            animatedValue1: new Animated.Value( props.isUpdate ? 1 : 0),
            animatedValue2: new Animated.Value(props.isUpdate ? 1 : 0.2),
        }

        // React after 17
        Dimensions.addEventListener('change', this.onWindowChange);
    }

    componentDidMount() {
        this.onLifeCycleManage()
    }

    componentWillUnmount() {
        if (this.liftCycleAnimated) {
            this.liftCycleAnimated.stop()
            this.liftCycleAnimated = undefined
        }
        Dimensions.removeEventListener('change', this.onWindowChange);
    }

    render() {


        const containerStyle = {}
        const contentStyle = {
            backgroundColor: this.props.backgroundColor,
            opacity: this.state.animatedValue2.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [0, 1, 0]
            }),
            minWidth: this.props.icon ? this.state.deviceWidth*0.4 : 0,
            maxWidth: this.state.deviceWidth*MaxWidthRatio,
        }

        if (this.props.position > 0) {
            containerStyle.justifyContent = 'flex-start';
            containerStyle.top = 40
            containerStyle.bottom = 0;
            contentStyle.marginTop = this.state.animatedValue1.interpolate({
                inputRange: [0, 1],
                outputRange: [ToastInHeight/2, 0]
            });
        } else if (this.props.position == 0) {
            containerStyle.justifyContent = 'center';
            containerStyle.top = 0
            containerStyle.bottom = 0;
            contentStyle.marginTop = this.state.animatedValue1.interpolate({
                inputRange: [0, 1],
                outputRange: [ToastInHeight, 0]
            });
        } else if (this.props.position < 0) {
            containerStyle.justifyContent = 'flex-end';
            containerStyle.top = 0
            containerStyle.bottom = 40;
            contentStyle.marginBottom = this.state.animatedValue1.interpolate({
                inputRange: [0, 1],
                outputRange: [0, ToastInHeight/2]
            });
        }



        return (
            <Modal
                pointerEvents="none"
                transparent={true}
                visible={true}
                onRequestClose={this.props.onRequestClose}
            >
                <View style={[styles.container,containerStyle]}>
                    <Animated.View style={[styles.content,contentStyle]}>
                        {this.props.icon}
                        <Text style={[styles.text,{color: this.props.textColor}]}>
                            {this.props.data}
                        </Text>
                    </Animated.View>
                </View>
            </Modal>
        )
    }

    onLifeCycleManage = () => {

        if (this.liftCycleAnimated) {
            this.liftCycleAnimated.stop()
            this.liftCycleAnimated = undefined
        }

        if (!this.props.isUpdate) {
            this.liftCycleAnimated = Animated.parallel([
                Animated.timing(
                    this.state.animatedValue1,
                    {
                        toValue: 1,
                        duration: ToastInOutDuration,
                        easing: this.props.inEasing,
                        useNativeDriver: false,
                    }
                ),
                Animated.timing(
                    this.state.animatedValue2,
                    {
                        toValue: 1,
                        duration: ToastInOutDuration,
                        useNativeDriver: false,
                    }
                ),
            ])
            this.liftCycleAnimated.start()
        }


    }

    onWindowChange = ({ window }) => {
        const {width,height} = window
        if (width != this.state.deviceWidth && height != this.state.deviceHeight) {
            this.setState({
                deviceWidth: width,
                deviceHeight: height
            })
        }
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0
    },
    content: {
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',

        elevation: 2,
        shadowOffset:{ width: 0, height: 1},
        shadowColor:'gray',
        shadowOpacity:0.2,
        shadowRadius:1,
    },
    icon: {

    },
    text: {
        fontSize: 16
    }
})

