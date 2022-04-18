class simNavigation {
    constructor(){
        this.navigation = 0
        this.slides = document.querySelectorAll('.sim-slide').length
    }

    onNavigationBack() {
        this.navigation--
    }

    onNavigationForward() {
        this.navigation++
    }

    onSetNavigation(key) {
        this.navigation = key
    }
}