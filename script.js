document.addEventListener("DOMContentLoaded", () => { 
    let nav = new simNavigation()

    sim_getDots(nav)

    // BOUTON BEFORE
    document.querySelectorAll(".sim-qst-action-before").forEach(item => {
        item.addEventListener('click', () => {
            if(nav.navigation > 0) {
                nav.onNavigationBack()
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
                nav.onNavigationForward()
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