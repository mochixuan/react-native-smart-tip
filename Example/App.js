import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import MainPage from './src/pages/MainPage'
import SmartToastPage from './src/pages/SmartToastPage'
import ModalToastPage from './src/pages/ModalToastPage'
import SnackBarPage from './src/pages/SnackBarPage'

const App = createStackNavigator({
    MainPage: {screen: MainPage},
    SmartToastPage: {screen: SmartToastPage},
    SnackBarPage: {screen: SnackBarPage},
    ModalToastPage: {screen: ModalToastPage}
},{
    navigationOptions: {
        gesturesEnabled:  true
    },
    headerMode:  'none'
})

export default createAppContainer(App)
