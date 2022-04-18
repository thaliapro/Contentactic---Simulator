document.addEventListener("DOMContentLoaded", () => { 
    let answers = new sim_Simulator()

    // CREATION OU REFONTE
    document.querySelectorAll('.sim-answer-creation').forEach(item => {
        item.addEventListener('click', () => {
            answers.setWork(item.getAttribute('data-value'))
            document.querySelectorAll('.sim-answer-creation').forEach(i => {
                if(item != i) {
                    i.classList.remove('sim-qst-content-answer-active')
                }
            })
            item.classList.add('sim-qst-content-answer-active')
        })
    })

    // PAGES
    document.querySelector('.sim-answer-pages').addEventListener('change', () => {
        // answers.setWork(item.getAttribute('data-value'))
        let value = this.event.target.value
        this.event.target.closest('.sim-qst-content').querySelector('.sim-qst-content-range-value').textContent = value
        answers.setPage(value)
    })

    // SEO
    document.querySelectorAll('.sim-answer-seo').forEach(item => {
        item.addEventListener('click', () => {
            
            answers.setSeo(item.getAttribute('data-value') == 'y' ? true : false)

            document.querySelectorAll('.sim-answer-seo').forEach(i => {
                if(item != i) {
                    i.classList.remove('sim-qst-content-answer-active')
                }
            })
            item.classList.add('sim-qst-content-answer-active')
        })
    })

    // SHOP
    document.querySelectorAll('.sim-answer-shop').forEach(item => {
        item.addEventListener('click', () => {
            
            answers.setShop(item.getAttribute('data-value') == 'y' ? true : false)

            document.querySelectorAll('.sim-answer-shop').forEach(i => {
                if(item != i) {
                    i.classList.remove('sim-qst-content-answer-active')
                }
            })
            item.classList.add('sim-qst-content-answer-active')
        })
    })

    // CLIENT
    document.querySelectorAll('.sim-answer-client').forEach(item => {
        item.addEventListener('click', () => {
            
            answers.setClientBoard(item.getAttribute('data-value') == 'y' ? true : false)

            document.querySelectorAll('.sim-answer-client').forEach(i => {
                if(item != i) {
                    i.classList.remove('sim-qst-content-answer-active')
                }
            })
            item.classList.add('sim-qst-content-answer-active')
        })
    })

    // CAT
    document.querySelector('.sim-answer-cat').addEventListener('change', () => {
        // answers.setWork(item.getAttribute('data-value'))
        let value = this.event.target.value
        this.event.target.closest('.sim-qst-content').querySelector('.sim-qst-content-range-value').textContent = value
        answers.setCatPages(value)
    })

    // PROD
    document.querySelector('.sim-answer-prod').addEventListener('change', () => {
        // answers.setWork(item.getAttribute('data-value'))
        let value = this.event.target.value
        this.event.target.closest('.sim-qst-content').querySelector('.sim-qst-content-range-value').textContent = value
        answers.setProdPage(value)
    })

    // CAT SEO
    document.querySelectorAll('.sim-answer-cat-seo').forEach(item => {
        item.addEventListener('click', () => {
            
            answers.setWriteCatPages(item.getAttribute('data-value') == 'y' ? true : false)

            document.querySelectorAll('.sim-answer-cat-seo').forEach(i => {
                if(item != i) {
                    i.classList.remove('sim-qst-content-answer-active')
                }
            })
            item.classList.add('sim-qst-content-answer-active')
        })
    })

    // PROD SEO
    document.querySelectorAll('.sim-answer-prod-seo').forEach(item => {
        item.addEventListener('click', () => {
            
            answers.setWriteProdPage(item.getAttribute('data-value') == 'y' ? true : false)

            document.querySelectorAll('.sim-answer-prod-seo').forEach(i => {
                if(item != i) {
                    i.classList.remove('sim-qst-content-answer-active')
                }
            })
            item.classList.add('sim-qst-content-answer-active')
        })
    })

    // BLOG
    document.querySelectorAll('.sim-answer-blog').forEach(item => {
        item.addEventListener('click', () => {
            
            answers.setBlog(item.getAttribute('data-value') == 'y' ? true : false)

            document.querySelectorAll('.sim-answer-blog').forEach(i => {
                if(item != i) {
                    i.classList.remove('sim-qst-content-answer-active')
                }
            })
            item.classList.add('sim-qst-content-answer-active')
        })
    })

    // GRAPHIC
    document.querySelectorAll('.sim-answer-graphic').forEach(item => {
        item.addEventListener('click', () => {
            
            answers.setGraphic(item.getAttribute('data-value') == 'y' ? true : false)

            document.querySelectorAll('.sim-answer-graphic').forEach(i => {
                if(item != i) {
                    i.classList.remove('sim-qst-content-answer-active')
                }
            })
            item.classList.add('sim-qst-content-answer-active')
        })
    })

    // LANG
    document.querySelectorAll('.sim-answer-lang').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.contains('sim-qst-content-answer-active') ? item.classList.remove('sim-qst-content-answer-active') : item.classList.add('sim-qst-content-answer-active')
        })
    })

});


class sim_Simulator {
    constructor(){
        this.work = '' // Création || Refonte
        this.page = 1 // Nombre de page
        this.seo = '' // type d'analyse sémantique
        this.shop = false // E-commerce
        this.clientBoard = false // Espace client
        this.catPages = 0 // Nombre de page catégories
        this.prodPage = 0 // Nombre de page produits
        this.writeCatPages = false // Rédaction des pages catégories
        this.writeProdPage = false // Rédaction des pages produits
        this.blog = false // Blog
        this.graphic = false // Charte Graphique
        this.lang = [] // Choix de la langue
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
}