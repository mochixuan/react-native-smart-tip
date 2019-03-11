import React from 'react'
import RootSiblings from 'react-native-root-siblings'
import ToastView from "./ToastView"
import {ToastDuration,ToastInOutDuration,ToastPosition,ToastDefaultOpt} from '../data/Constants'

let rootSiblings = undefined
let liftCycleManage = undefined
export default class Toast {

    static duration = ToastDuration
    static position = ToastPosition

    static show = (toastOpts) => {

        const data = toastOpts.data
        if (typeof data !== 'string' || data.length <= 0) {
            return
        }

        toastOpts = Object.assign({},ToastDefaultOpt,toastOpts)

        Toast.hide();

        rootSiblings = new RootSiblings(
            <ToastView {...toastOpts}/>
        )

        liftCycleManage = setTimeout(()=>{
            Toast.hide()
        }, toastOpts.duration+ToastInOutDuration*2)
    }

    static hide = () => {
        if (liftCycleManage) {
            clearTimeout(liftCycleManage)
            liftCycleManage = undefined
        }
        if (rootSiblings) {
            rootSiblings.destroy()
            rootSiblings = undefined
        }
    }

}

