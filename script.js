document.addEventListener("DOMContentLoaded", () => { 

    let answers = new sim_Simulator()

    // CREATION OU REFONTE
    sim_setChoice('.sim-answer-creation', (data) => answers.setWork(data))
    // PAGES
    sim_setRange('.sim-answer-pages', () => answers.setPage())
    // SEO
    sim_setChoice('.sim-answer-seo', (data) => answers.setSeo(data))
    // SHOP
    sim_setChoice('.sim-answer-shop', (data) => answers.setShop(data))
    // CLIENT
    sim_setChoice('.sim-answer-client', (data) => answers.setClientBoard(data))
    // CAT
    sim_setRange('.sim-answer-cat', () => answers.setCatPages())
    // PROD
    sim_setRange('.sim-answer-prod', () => answers.setProdPage())
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
        item.addEventListener('click', () => {
            if(nav.navigation > 0) {
                nav.onNavigationBack(answers)
                document.querySelectorAll('.sim-slide').forEach(slide => {
                    slide.style.transform = `translateX(-${nav.navigation}00%)`
                    sim_getDots(nav)
                })
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
            }
        })
    })

    // BOUTON SUBMIT
    document.querySelector('.sim-qst-action-submit').addEventListener('click', () => {
        console.log('Formulaire soumis avec succès')
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
        this.graphic = false // Charte Graphique
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

}