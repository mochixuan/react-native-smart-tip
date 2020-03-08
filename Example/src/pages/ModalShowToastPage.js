import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    Image
} from 'react-native'
import StatusBarView from "../components/StatusBarView";
import ModalShowToastView from '../widget/modaltoast/ModalShowToastView'
import Toast from '../widget/toast/Toast'

const main_color = '#3aafff'

const toastOpt1 = {
    data: 'Sow nothing, reap nothing',
    position: Toast.position.TOP,
    textColor: '#fff',
    backgroundColor: main_color,
}

const toastOpt2 = {
    data: 'Success',
    textColor: '#ffffff',
    backgroundColor: '#000',
    position: Toast.position.CENTER,
    icon: <Image source={require('../data/img/success.png')} style={{width: 32,height: 32,resizeMode: 'contain'}}/>
}

export default class ModalShowToastPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isShowModal: false,
            tipData: null,
        }
    }

    getToastInstance = (toastInstance) => {
        this.toastInstance = toastInstance;
    }

    show1 = () => this.toastInstance(toastOpt1)
    show2 = () => this.toastInstance(toastOpt2)

    render() {
        return (
            <SafeAreaView style={styles.safe_container}>
                <StatusBarView backgroundColor={main_color}/>
                <Modal
                    transparent={true}
                    animationType={'slide'}
                    visible={this.state.isShowModal}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.btn_view} onPress={()=>{ this.setState({isShowModal: false}) }}>
                            <Text style={styles.btn_text}>Hide Modal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn_view} onPress={this.show1}>
                            <Text style={styles.btn_text}>Toast1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn_view} onPress={this.show2}>
                            <Text style={styles.btn_text}>Toast2</Text>
                        </TouchableOpacity>
                        <ModalShowToastView toastInstance={this.getToastInstance} />
                    </View>
                </Modal>
                
                <View style={styles.container}>
                    <View style={styles.header} >
                        <TouchableOpacity style={styles.header_back} onPress={()=>{this.props.navigation.goBack()}}>
                            <Text style={[styles.btn_text,{fontSize: 18}]}>{'Back'}</Text>
                        </TouchableOpacity>
                        <Text style={[styles.btn_text,{fontSize: 18}]}>{'Toast'}</Text>
                    </View>
                     <TouchableOpacity
                        style={styles.btn_view}
                        onPress={()=>{ this.setState({isShowModal: true}) }}>
                        <Text style={styles.btn_text}>Show Modal</Text>
                    </TouchableOpacity>
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
        Toast.show(toastOpts)
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
    },
    modal: {
        flex: 1, 
        justifyContent: 'flex-end', 
        backgroundColor: 'rgba(0, 0, 0, .5)',
        paddingBottom: 20
    }
})
