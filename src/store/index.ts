import { makeAutoObservable } from 'mobx'

import CharityDetailStore from '~/container/CharityDetail/CharityDetailStore'
import ReceiptDetailStore from '~/container/ReceiptDetail/ReceiptDetailStore'

import HomeStore from './HomeStore/HomeStore'
export class RootStore {
    homeStore: HomeStore
    charityDetailStore: CharityDetailStore
    receiptDetailStore: ReceiptDetailStore
    constructor() {
        makeAutoObservable(this)

        this.homeStore = new HomeStore()
        this.charityDetailStore = new CharityDetailStore()
        this.receiptDetailStore = new ReceiptDetailStore()
    }
}

const rootStore = new RootStore()

export default rootStore
