import {Easing} from 'react-native'

const ToastDuration = {
    LONG: 3500,
    SHORT: 2000
}

const ToastInHeight = 120

const ToastInOutDuration = 240

const ToastPosition = {
    TOP: 1,
    CENTER: 0,
    BOTTOM: -1
}

const ToastDefaultOpt = {
    data: '',  //required
    duration: ToastDuration.SHORT,
    position: ToastPosition.BOTTOM,
    inEasing: Easing.elastic(1),
    textColor: 'white',
    backgroundColor: 'black',
    icon: undefined,
}

// ---------

const SnackBarDuration = {
    LONG: 3500,
    SHORT: 2000,
    INDEFINITE: -1
}

const SnackBarPosition = {
    TOP: 1,
    BOTTOM: -1
}


const SnackBarDefaultOpt = {
    data: '',  //required
    statusBarHeight: -1,
    height: 44,
    duration: SnackBarDuration.SHORT,
    position: SnackBarPosition.BOTTOM,
    inEasing: Easing.linear,
    textColor: 'white',
    backgroundColor: 'black',
    actionText: undefined,
    actionTextColor: 'white',
    actionClick: undefined,
}

const SnackBarInOutDuration = 200

// --------
const ModalDefaultOpt = {
    data: '',  //required
    position: ToastPosition.BOTTOM,
    inEasing: Easing.elastic(1),
    textColor: 'white',
    backgroundColor: 'black',
    icon: undefined,
    onRequestClose: undefined
}

export {
    ToastDuration,ToastInOutDuration,ToastInHeight,ToastPosition,ToastDefaultOpt,
    SnackBarDuration,SnackBarPosition,SnackBarDefaultOpt,SnackBarInOutDuration,
    ModalDefaultOpt
}
