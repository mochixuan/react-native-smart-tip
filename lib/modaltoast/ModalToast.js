import React from 'react'
import RootSiblings from 'react-native-root-siblings'
import ModalToastView from "./ModalToastView"
import {ToastPosition,ModalDefaultOpt} from '../data/Constants'

let rootSiblings = undefined
let liftCycleManage = undefined
export default class ModalToast {

    static position = ToastPosition

    static show = (modalOpts) => {

        const data = modalOpts.data
        if (typeof data !== 'string' || data.length <= 0) {
            return
        }

        modalOpts = Object.assign({},ModalDefaultOpt,modalOpts)

        ModalToast.hide();

        rootSiblings = new RootSiblings(
            <ModalToastView {...modalOpts}/>
        )
    }

    static update = (modalOpts) => {
        const data = modalOpts.data
        if (typeof data !== 'string' || data.length <= 0) {
            return
        }

        modalOpts = Object.assign({},ModalDefaultOpt,modalOpts)

        ModalToast.hide();

        modalOpts.isUpdate = true

        rootSiblings = new RootSiblings(
            <ModalToastView {...modalOpts}/>
        )
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

