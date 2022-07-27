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
            this.navigation == 1 || this.navigation == 5 || this.navigation == 9 || this.navigation == 10 ||
            (answers.work != null && this.navigation == 0) ||
            (answers.seo != null && this.navigation == 2) ||
            (answers.shop != null && this.navigation == 3) ||
            (answers.clientBoard != null && this.navigation == 4) ||
            (answers.writeCatPages != null && answers.writeProdPage != null && this.navigation == 6) ||
            (answers.blog != null && this.navigation == 7) ||
            (answers.graphic != null && this.navigation == 8)
        ) {
            if(answers.shop == false && this.navigation == 3) {
                this.navigation = 7
            } else {
                this.navigation++
            }
        } else {
            alert('Veuillez renseigner les informations demandées !')
        }

    }

    onSetNavigation(key) {
        this.navigation = key
    }
}

console.log('coucou')