document.addEventListener("DOMContentLoaded", () => { 

    let answers = new sim_Simulator()
    let lastSlide = 1

    // CREATION OU REFONTE
    sim_setChoice('.sim-answer-creation', (data) => answers.setWork(data))
    // PAGES
    sim_setRange('.sim-answer-pages', (data) => answers.setPage(data))
    // SEO
    sim_setChoice('.sim-answer-seo', (data) => answers.setSeo(data))
    // SHOP
    sim_setChoice('.sim-answer-shop', (data) => answers.setShop(data))
    // CLIENT
    sim_setChoice('.sim-answer-client', (data) => answers.setClientBoard(data))
    // CAT
    sim_setRange('.sim-answer-cat', (data) => answers.setCatPages(data))
    // PROD
    sim_setRange('.sim-answer-prod', (data) => answers.setProdPage(data))
    // CAT SEO
    sim_setChoice('.sim-answer-cat-seo', (data) => answers.setWriteCatPages(data))
    // PROD SEO
    sim_setChoice('.sim-answer-prod-seo', (data) => answers.setWriteProdPage(data))
    // BLOG
    sim_setChoice('.sim-answer-blog', (data) => answers.setBlog(data))
    // GRAPHIC
    sim_setChoice('.sim-answer-graphic', (data) => answers.setGraphic(data))
    // LANG
    sim_setMultiple('.sim-answer-english', () => answers.toggleEnglish())
    sim_setMultiple('.sim-answer-spanish', () => answers.toggleSpanish())
    sim_setMultiple('.sim-answer-italian', () => answers.toggleItalian())
    sim_setMultiple('.sim-answer-deutsch', () => answers.toggleDeutsch())
    sim_setMultiple('.sim-answer-netherlands', () => answers.toggleNetherlands())
    sim_setMultiple('.sim-answer-portuguese', () => answers.togglePortuguese())


    let nav = new simNavigation()

    sim_getDots(nav)

    // BOUTON BEFORE
    document.querySelectorAll(".sim-qst-action-before").forEach(item => {
        item.addEventListener('click', element => {
            if(nav.navigation > 0) {
                nav.onNavigationBack(answers)
                document.querySelectorAll('.sim-slide').forEach(slide => {
                    slide.style.transform = `translateX(-${nav.navigation}00%)`
                    sim_getDots(nav)
                })
                document.querySelector(`#sim-slide-${lastSlide}`).style.height = 0
                lastSlide = nav.navigation+1
                document.querySelector(`#sim-slide-${lastSlide}`).style.height = 'inherit'
            }
        })
    })

    // BOUTON NEXT
    document.querySelectorAll(".sim-qst-action-next").forEach(item => {
        item.addEventListener('click', () => {
            if(nav.navigation >= 0 && nav.navigation <= nav.slides) {
                nav.onNavigationForward(answers)
                document.querySelectorAll('.sim-slide').forEach(slide => {
                    slide.style.transform = `translateX(-${nav.navigation}00%)`
                    sim_getDots(nav)
                })
                document.querySelector(`#sim-slide-${lastSlide}`).style.height = 0
                lastSlide = nav.navigation+1
                document.querySelector(`#sim-slide-${lastSlide}`).style.height = 'inherit'
            }
        })
    })

    // BOUTON SUBMIT
    document.querySelector('.sim-qst-action-submit').addEventListener('click', () => {

        let name = document.querySelector('#sim-form-name').value
        let society = document.querySelector('#sim-form-society').value
        let email = document.querySelector('#sim-form-email').value

        if(name != '' && email != '') {
            let total = answers.getContentMakerEstimation() + answers.getDesignerEstimation() + answers.getDevelopperEstimation()
            let totalMin = 100*Math.floor((total*0.9)/100);
            let totalMax = 100*Math.floor((total*1.1)/100);



            document.querySelector('#sim-estimation').textContent = `${totalMin} et ${totalMax} €`

            if(nav.navigation >= 0 && nav.navigation <= nav.slides) {
                nav.onNavigationForward(answers)
                document.querySelectorAll('.sim-slide').forEach(slide => {
                    slide.style.transform = `translateX(-${nav.navigation}00%)`
                    sim_getDots(nav)
                })
            }

        } else {
            alert('Veuillez compléter tous les champs !')
        }



    })
});

function sim_getDots(nav){
    
    let navigation = nav.navigation + 1

    document.querySelector('.sim-navigation-row').innerHTML = ''

    for(i = 1; i <= nav.slides; i++){
        let className = navigation < i ? 'sim-navigation-dot' : 'sim-navigation-dot sim-navigation-dot-active' 
        document.querySelector('.sim-navigation-row').innerHTML += `
            <button data-key="${i}" class="${className}"></button>
        `
    }

}

function sim_setChoice(theClass, theFunction) {
    document.querySelectorAll(theClass).forEach(item => {
        item.addEventListener('click', () => {
                
            theFunction(item.getAttribute('data-value') == 'y' ? true : false)

            document.querySelectorAll(theClass).forEach(i => {
                if(item != i) {
                    i.classList.remove('sim-qst-content-answer-active')
                }
            })
            item.classList.add('sim-qst-content-answer-active')
        })
    })
}

function sim_setRange(theClass, theFunction) {
    document.querySelector(theClass).addEventListener('input', () => {
        let value = this.event.target.value
        this.event.target.closest('.sim-qst-content').querySelector('.sim-qst-content-range-value').textContent = value
        theFunction(value)
    })
}

function sim_setMultiple(theClass, theFunction) {
    document.querySelectorAll(theClass).forEach(item => {
        item.addEventListener('click', () => {
            theFunction()
            item.classList.contains('sim-qst-content-answer-active') ? item.classList.remove('sim-qst-content-answer-active') : item.classList.add('sim-qst-content-answer-active')
        })
    })
}

class sim_Simulator {
    constructor(){
        this.work = null // Création || Refonte
        this.page = 1 // Nombre de page
        this.seo = null // type d'analyse sémantique
        this.shop = null // E-commerce
        this.clientBoard = null // Espace client
        this.catPages = 0 // Nombre de page catégories
        this.prodPage = 0 // Nombre de page produits
        this.writeCatPages = null // Rédaction des pages catégories
        this.writeProdPage = null // Rédaction des pages produits
        this.blog = null // Blog
        this.graphic = null // Charte Graphique
        this.english = false
        this.spanish = false
        this.italian = false
        this.deutsch = false
        this.netherlands = false
        this.portuguese = false
    }

    setWork(value) {
        this.work = value
    }

    setPage(value) {
        this.page = value
    }

    setSeo(value) {
        this.seo = value
    }

    setShop(value) {
        this.shop = value
    }

    setClientBoard(value) {
        this.clientBoard = value
    }

    setCatPages(value) {
        this.catPages = value
    }

    setProdPage(value) {
        this.prodPage = value
    }

    setWriteCatPages(value) {
        this.writeCatPages = value
    }

    setWriteProdPage(value) {
        this.writeProdPage = value
    }

    setBlog(value) {
        this.blog = value
    }

    setGraphic(value) {
        this.graphic = value
    }

    toggleEnglish() {
        this.english = !this.english
    }

    toggleSpanish() {
        this.spanish = !this.spanish
    }

    toggleItalian() {
        this.italian = !this.italian
    }

    toggleDeutsch() {
        this.deutsch = !this.deutsch
    }

    toggleNetherlands() {
        this.netherlands = !this.netherlands
    }

    togglePortuguese() {
        this.portuguese = !this.portuguese
    }

    getDevelopperEstimation() {

        let shopPrice = this.shop ? 320 : 0
        let clientPagePrice = this.clientBoard ? 320 : 0

        let translationBasePrice = (this.english || this.spanish || this.italian || this.deutsch || this.netherlands || this.portuguese) ? 100 : 0

        let categoryPages = this.writeCatPages ? this.catPages : 0
        let productPages = this.writeProdPage ? this.prodPage : 0
        let blogPages = this.blog ? 1 : 0
        let translationPages = this.english + this.spanish + this.italian + this.deutsch + this.netherlands + this.portuguese + 1
        let pageNumber = (Number(this.page) + Number(productPages) + Number(categoryPages) + Number(blogPages)) * translationPages

        let pagePrice = 10 * pageNumber
        let sectionPrice = 0

        if(pageNumber == 1) {
            sectionPrice = 270
        } else if (pageNumber < 4 && pageNumber > 1) {
            sectionPrice = 360
        } else if (pageNumber <= 6) {
            sectionPrice = 540
        } else if (pageNumber <= 10) {
            sectionPrice = 780
        }  else if (pageNumber <= 20) {
            sectionPrice = 1080
        } else {
            sectionPrice = 1380
        }

        return 500 + pagePrice + shopPrice + clientPagePrice + sectionPrice + translationBasePrice
    }

    getDesignerEstimation() {
        let logoPrice = this.graphic ? 950 : 0

        let eShop = this.shop ? 50 : 0
        let client = this.clientBoard ? 30 : 0

        let catPage = Number(this.catPages) > 0  ? 1 : 0
        let prodPage = Number(this.prodPage) > 0 ? 1 : 0
        let blogPage = this.blog ? 1 : 0
        let eShopPage = this.shop ? 1 : 0
        let pagePrice = ((Number(this.page) + catPage + prodPage + blogPage + eShopPage) - 1) * 90

        return eShop + client + pagePrice + logoPrice + 460

    }

    getContentMakerEstimation() {
        
        let englishPrice = this.english ? 150 : 0
        let spanishPrice = this.spanish ? 150 : 0
        let italianPrice = this.italian ? 150 : 0
        let deutschPrice = this.deutsch ? 150 : 0
        let netherlandsPrice = this.netherlands ? 150 : 0
        let portuguesePrice = this.portuguese ? 150 : 0
        let langageCount = 1 + this.english + this.spanish + this.italian + this.deutsch + this.netherlands + this.portuguese

        let categoryPrice = this.writeCatPages ? this.catPages*langageCount*200 : 0
        let productPrice = this.writeProdPage ? this.prodPage*langageCount*150 : 0

        let pagePrice = (langageCount == 1 && Number(this.page) == 1 && this.catPages == 0 && this.prodPage == 0) ? Number(this.page)*langageCount : 390

        let semantiquePrice = 0

        if (this.seo) {
            semantiquePrice += (langageCount-1)*800

            if (this.work) {
                semantiquePrice += 800
            } else  {
                semantiquePrice += 1500
            } 
        }

        return  englishPrice + spanishPrice + italianPrice + deutschPrice + netherlandsPrice + portuguesePrice + categoryPrice + productPrice + pagePrice + semantiquePrice

    }

}