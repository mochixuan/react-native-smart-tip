import React from 'react'
import ToastView from "../toast/ToastView"
import {ToastInOutDuration,ToastDefaultOpt} from '../data/Constants'

export default class ModalShowToastView extends React.Component {

    constructor(props) {
        super(props);

        props.toastInstance(this.show)
        this.toastTemp = null;
        this.state = {
            toastOpts: null,
        }
    }

    render() {
        const toastOpts = this.state.toastOpts;
        if (toastOpts == null || toastOpts.data == null) return null;

        return <ToastView {...toastOpts}/>
    }

    componentWillUnmount() {
        if (this.liftCycleManage) {
            clearTimeout(this.liftCycleManage)
        }
    }

    show = (Opts) => {

        const data = Opts.data
        if (typeof data !== 'string' || data.length <= 0) {
            return
        }

        if (this.state.toastOpts != null) {
            this.toastTemp = Opts;
            this.hide();
            return;
        }

        const toastOpts = Object.assign({}, ToastDefaultOpt, Opts)

        this.setState({
            toastOpts
        },() => {
            this.liftCycleManage = setTimeout(() => {
                this.hide()
            }, toastOpts.duration + ToastInOutDuration * 2)
        })
    }

    hide = () => {
        if (this.liftCycleManage) {
            clearTimeout(this.liftCycleManage);
        }
        if (this.state.toastOpts != null) {
            this.setState({ toastOpts: null }, () => {
                const toastTemp = this.toastTemp;
                if (toastTemp != null) {
                    this.toastTemp = null;
                    this.show(toastTemp);
                }
            })
        }
    }

}

