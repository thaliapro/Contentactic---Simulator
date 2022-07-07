class simNavigation {
    constructor(){
        this.navigation = 0
        this.slides = document.querySelectorAll('.sim-slide').length
    }

    onNavigationBack(answers) {

        if(answers.shop == false && this.navigation == 7) {
            this.navigation = 3
        } else {
            this.navigation--
        }

    }

    onNavigationForward(answers) {

        if(
            (answers.work != null && this.navigation == 0) ||
            (answers.seo != null && this.navigation == 2)
        ) {
            if(answers.shop == false && this.navigation == 3) {
                this.navigation = 7
            } else {
                this.navigation++
            }
        } else {
            alert('Veuillez renseigner les informations demandée ' + this.navigation)
        }

    }

    onSetNavigation(key) {
        this.navigation = key
    }
}