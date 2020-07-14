import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    TouchableOpacity,
    PanResponder,
} from 'react-native'
import {SnackBarDuration, SnackBarInOutDuration, SnackBarPosition} from '../data/Constants'
import {isIphoneX,iosStatusBarXHeight,iosBottomXHeight,defaultStatusBarHeight, shadowBlackstyleTop,shadowBlackStyleBottom} from "../util/UiUtil";

class SnackView extends Component{

    constructor(props) {
        super(props)

        const {width,height} = Dimensions.get('window')
        this.state = {
            deviceWidth: width,
            deviceHeight: height,
            animatedValue1: new Animated.Value(0),
            animatedValue2: new Animated.Value(1),
        }

        // React after 17
        Dimensions.addEventListener('change', this.onWindowChange);

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                let {dx,dy} = gestureState;
                if((Math.abs(dx) > 5) || (Math.abs(dy) > 5)){
                    return true
                }else{
                    return false
                }
            },
            onPanResponderGrant: (evt, gestureState) => {},
            onPanResponderMove: (evt, gestureState) => this.moveTouch(evt, gestureState),
            // onPanResponderRelease: (evt, gestureState) => this.endTouch(evt),
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onShouldBlockNativeResponder: (evt, gestureState) => false,
        })
    }

    componentDidMount() {
        this.onLifeCycleManage()
    }

    componentWillUnmount() {
        this.onRelease()
    }

    render() {

        let contentHeight = this.props.height

        const baseStyle = {}
        const statusBarStyle = {}
        const containerStyle = {
            backgroundColor: this.props.backgroundColor,
        }
        const contentStyles = {
            height: contentHeight,
        }

        let containerHeight = contentHeight
        if (this.props.position === SnackBarPosition.TOP) {
            baseStyle.top = 0

            const statusBarHeight = this.getStatusBarHeight()
            containerHeight = contentHeight + statusBarHeight
            statusBarStyle.height = statusBarHeight
            statusBarStyle.backgroundColor = this.props.backgroundColor

            containerStyle.height = containerHeight
            containerStyle.top = this.state.animatedValue1.interpolate({
                inputRange: [0, 1],
                outputRange: [-containerHeight, 0]
            })
        } else {

            if (isIphoneX()) {
                containerHeight = containerHeight+iosBottomXHeight
            }

            containerStyle.height = containerHeight

            baseStyle.bottom = 0

            containerStyle.bottom = this.state.animatedValue1.interpolate({
                inputRange: [0, 1],
                outputRange: [-containerHeight, 0]
            })
        }

        let actionView = undefined
        if (this.props.actionText) {
            actionView = (
                <TouchableOpacity style={[styles.content_btn,{
                    maxWidth: (this.state.deviceWidth - 40)*0.2,
                    height: contentHeight
                }]} onPress={() => this.onHideAnimated(false)} activeOpacity={0.8}>
                    <Text style={[styles.content_title,{color: this.props.actionTextColor}]} numberOfLines={1}>{this.props.actionText}</Text>
                </TouchableOpacity>
            )
        }

        let shadowStyle = {};
        if (this.props.isShowShadow) {
            if (this.props.position === SnackBarPosition.TOP) {
                shadowStyle = shadowBlackStyleBottom;
            } else {
                shadowStyle = shadowBlackstyleTop;
            }
        }

        return (
            <View style={[styles.base,baseStyle]} pointerEvents="box-none">
                <Animated.View style={[styles.container,containerStyle,shadowStyle]} {...this._panResponder.panHandlers}>
                    <View style={statusBarStyle}/>
                    <View style={[styles.content,contentStyles]}>
                        <Text style={[styles.content_title,{
                            color: this.props.textColor,
                            maxWidth: (this.state.deviceWidth - 40)*0.8
                        }]} numberOfLines={this.props.numberOfLines}>
                            {this.props.data}
                        </Text>
                        {actionView}
                    </View>
                </Animated.View>
            </View>
        )
    }

    moveTouch = (evt, gestureState) => {
        if (this.props.isAllowSlideExit) {
            if (this.props.position === SnackBarPosition.TOP && gestureState.vy < -0.2) {
                this.onHideAnimated(true)
            } else if (this.props.position === SnackBarPosition.BOTTOM && gestureState.vy > 0.2) {
                this.onHideAnimated(true)
            }
        } 
    }

    onLifeCycleManage = () => {
        this.inAnimated = Animated.timing(
            this.state.animatedValue1,
            {
                toValue: 1,
                duration: SnackBarInOutDuration,
                easing: this.props.inEasing,
                useNativeDriver: false,
            }
        )

        this.inAnimated.start(()=>{
            if (this.props.duration !== SnackBarDuration.INDEFINITE) {
                this.commonAnimated = Animated.sequence([
                    Animated.timing(
                        this.state.animatedValue2,
                        {
                            toValue: 1,
                            duration: this.props.duration,
                            useNativeDriver: false,
                        }
                    ),
                    Animated.timing(
                        this.state.animatedValue1,
                        {
                            toValue: 0,
                            duration: SnackBarInOutDuration,
                            useNativeDriver: false,
                        }
                    )
                ])
                this.commonAnimated.start()
            }
        })

    }

    onHideAnimated = (isSlideHide) => {
        if (!this.isHasHide) {
            this.isHasHide = true;
        } else {
            return;
        }
        if (this.props.onActionHide) this.props.onActionHide(isSlideHide)
        this.hideAnimated = Animated.timing(
            this.state.animatedValue1,
            {
                toValue: 0,
                duration: SnackBarInOutDuration,
                useNativeDriver: false,
            }
        )
        this.hideAnimated.start(()=>{
            this.onRelease()
        })
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

    onRelease = () => {
        if (this.inAnimated) {
            this.inAnimated.stop()
            this.inAnimated = undefined
        }
        if (this.commonAnimated) {
            this.commonAnimated.stop()
            this.commonAnimated = undefined
        }
        if (this.hideAnimated) {
            this.hideAnimated.stop()
            this.hideAnimated = undefined
        }
        Dimensions.removeEventListener('change', this.onWindowChange);
    }

    getStatusBarHeight = () => {
        if (this.props.statusBarHeight < 0) {
            if (isIphoneX()) {
                return iosStatusBarXHeight
            } else {
                return defaultStatusBarHeight
            }
        } else {
            return this.props.statusBarHeight
        }
    }

}

const styles = StyleSheet.create({
    base: {
        position: 'absolute',
        left: 0,
        right: 0,
    },
    container: {
        flexDirection: 'column'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    content_title: {
        fontSize: 16,
        marginRight: 10
    },
    content_btn: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SnackView


