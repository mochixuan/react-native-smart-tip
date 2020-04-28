import {Platform,Dimensions} from 'react-native'

const screenW = Dimensions.get('window').width
const screenH = Dimensions.get('window').height

export const defaultStatusBarHeight = 20
export const iosStatusBarXHeight = 44
export const iosBottomXHeight = 34

const IPHONEX_WIDTH = 375
const IPHONEX_HEIGHT = 812
const IPHONEX_MAX_WIDTH = 414
const IPHONEX_MAX_HEIGHT = 896

export const isIphoneX = () => {
    if (Platform.OS === 'ios') {
        if (
            ((screenH === IPHONEX_HEIGHT && screenW === IPHONEX_WIDTH) || (screenH === IPHONEX_WIDTH && screenW === IPHONEX_HEIGHT)) ||
            ((screenH === IPHONEX_MAX_HEIGHT && screenW === IPHONEX_MAX_WIDTH) || (screenH === IPHONEX_MAX_WIDTH && screenW === IPHONEX_MAX_HEIGHT))
        ) {
            return true
        }
    }
    return false
}

export const shadowBlackStyleBottom = {
    elevation: 4,

    shadowOffset: {
        width: 0,
        height: -2
    },
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 2
}

export const shadowBlackstyleTop = {
    elevation: 4,

    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 2
}