import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import StatusBarView from "../components/StatusBarView";
import SmartToastPage from "./SmartToastPage";
import ModalToastPage from "./ModalToastPage";
const {width} = Dimensions.get('window')

const main_color = '#1ABc9c'
export default class MainPage extends Component{

    render() {
        return (
            <SafeAreaView style={styles.safe_container}>
                <StatusBarView backgroundColor={main_color}/>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={[styles.btn_text,{fontSize: 18}]}>{'SmartTip'}</Text>
                    </View>
                    <TouchableOpacity style={styles.btn_view} onPress={this.onJumpSmartToastPage}>
                        <Text style={styles.btn_text}>{'Toast'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_view} onPress={this.onJumpSnackBarPage}>
                        <Text style={styles.btn_text}>{'SnackBar'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_view} onPress={this.onJumpModalToastPage}>
                        <Text style={styles.btn_text}>{'ModalToast'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_view} onPress={this.onJumpModalShowToastPage}>
                        <Text style={styles.btn_text}>{'ModalShowToastPage'}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    onJumpSmartToastPage = () => {
        this.props.navigation.navigate('SmartToastPage')
    }

    onJumpSnackBarPage = () => {
        this.props.navigation.navigate('SnackBarPage')
    }

    onJumpModalToastPage = () => {
        this.props.navigation.navigate('ModalToastPage')
    }

    onJumpModalShowToastPage = () => {
        this.props.navigation.navigate('ModalShowToastPage')
    }

}

const styles = StyleSheet.create({
    safe_container: {
        flex: 1,
        backgroundColor: main_color
    },
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0'
    },
    header: {
        height: 44,
        backgroundColor: main_color,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    btn_view: {
        height: 48,
        backgroundColor: main_color,
        borderRadius: 24,
        width: width*0.6,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    btn_text: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    }
})
