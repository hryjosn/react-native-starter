import { makeAutoObservable } from 'mobx'

import HomeStore from './HomeStore/HomeStore'
export class RootStore {
    homeStore: HomeStore

    constructor() {
        makeAutoObservable(this)

        this.homeStore = new HomeStore()
    }
}

const rootStore = new RootStore()

export default rootStore
