import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native'
import StatusBarView from "../components/StatusBarView";
import ModalToast from '../widget/modaltoast/ModalToast'

const main_color = '#3aafff'

const toast1 = {
    data: 'Sow nothing, reap nothing',
    backgroundColor: '#666666',
    position: ModalToast.position.TOP
}

const toast2 = {
    data: '1. Sow nothing, reap nothing。\n2. Sow nothing, reap nothing。\n 3. Sow nothing reap nothing。 \n4. Sow nothing, reap nothing。 \n5.Sow nothing, reap nothing。\n6. Sow nothing, reap nothing。\n7. Sow nothing, reap nothing。 \n8. Sow nothing reap nothing。 \n9. Sow nothing, reap nothing。 \n10.Sow nothing, reap nothing。',
    textColor: '#fff',
    backgroundColor: main_color,
    position: ModalToast.position.CENTER
}

const toast3 = {
    data: 'Hello World'
}

const toast4 = {
    data: 'Success',
    textColor: '#ffffff',
    backgroundColor: '#444444',
    icon: <Image source={require('../data/img/success.png')} style={{width: 32,height: 32,resizeMode: 'contain'}}/>
}

const toast5 = {
    data: 'Loading',
    textColor: '#fff',
    backgroundColor: '#444444',
    position: ModalToast.position.CENTER,
    icon: <ActivityIndicator color='#fff' size={'large'}/>
}

const toast6 = {
    data: 'Error',
    textColor: '#fff',
    backgroundColor: '#444444',
    icon: <Image source={require('../data/img/error.png')} style={{width: 32,height: 32,resizeMode: 'contain'}}/>
}

export default class ModalToastPage extends Component{

    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            tip: 'start'
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safe_container}>
                <StatusBarView backgroundColor={main_color}/>
                <View style={styles.container}>
                    <View style={styles.header} >
                        <TouchableOpacity style={styles.header_back} onPress={()=>{this.props.navigation.goBack()}}>
                            <Text style={[styles.btn_text,{fontSize: 18}]}>{'Back'}</Text>
                        </TouchableOpacity>
                        <Text style={[styles.btn_text,{fontSize: 18}]}>{'ModalToast'}</Text>
                    </View>
                    <View style={styles.item}>
                        {this._renderBtnView('Base Top',toast1)}
                        {this._renderBtnView('Base Center',toast2)}
                        {this._renderBtnView('Base Bottom',toast3)}
                    </View>
                    <View style={styles.item}>
                        {this._renderBtnView('Icon Top',toast4)}
                        {this._renderBtnView('Icon Center',toast5)}
                        {this._renderBtnView('Icon Bottom',toast6)}
                    </View>
                    <View style={styles.item}>
                        <TouchableOpacity
                            style={styles.btn_view}
                            onPress={this.analogNetworkRequest}
                        >
                            <Text style={styles.btn_text}>{'Analog network request'}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 18,color: main_color}}>{this.state.tip}</Text>
                </View>
            </SafeAreaView>
        )
    }

    _renderBtnView = (btnText,toastOpts) => {
        return (
            <TouchableOpacity
                style={styles.btn_view}
                onPress={()=>{this.show(toastOpts)}}
            >
                <Text style={styles.btn_text}>{btnText}</Text>
            </TouchableOpacity>
        )
    }

    show = (toastOpts) => {

        if (this.testTimeOut) {
            clearTimeout(this.testTimeOut)
            this.testTimeOut = undefined
            ModalToast.hide()
        }

        ModalToast.show(toastOpts)

        this.testTimeOut = setTimeout(()=>{
            ModalToast.hide()
        },3000)
    }

    analogNetworkRequest = () => {
        if (this.testInterval) {
            clearInterval(this.testInterval)
            this.testInterval = undefined
            ModalToast.hide()
        }

        let tempIndex = 0

        ModalToast.show(toast5)
        this.setState({tip: 'Loading'})

        this.testInterval =  setInterval(()=>{
            if(tempIndex === 0) {
                const tempToast4 = {...toast4}
                tempToast4.position = ModalToast.position.CENTER
                ModalToast.update(tempToast4)
                this.setState({tip: 'Success'})
            } else {
                if (this.testInterval) {
                    clearInterval(this.testInterval)
                    this.testInterval = undefined
                    ModalToast.hide()
                }
                this.setState({tip: 'end'})
            }
            tempIndex++;
        },3000)
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
    header_back: {
        color: 14,
        marginLeft: 5,
        height: 44,
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        position: 'absolute',
        top: 0,
        left: 0
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    btn_view: {
        height: 36,
        backgroundColor: main_color,
        borderRadius: 2,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    btn_text: {
        fontSize: 14,
        color: '#fff'
    }
})
