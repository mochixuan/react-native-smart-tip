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

// 判断是否iPhone x
export const isIphoneX = (): boolean => {
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
