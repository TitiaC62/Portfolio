const IDtext = document.getElementById('IDtext')
const IDtext2 = document.getElementById('IDtext2')



const text = 'En formation développement Web Full Stack '
const text2 = "A la recherche d'un stage, un contrat.."
const limit = text.length
const interval = 200
let index = 0



const idInterval = setInterval(function(){
    console.log(index)
    if(index <= limit){
        IDtext.innerText = text.slice(0, index++)
    } else {
        clearInterval(idInterval)
    }
}, interval)



const idInterval2 = setInterval(function(){
    console.log(index)
    if(index <= limit){
        IDtext2.innerText = text2.slice(0, index++)
    } else {
        clearInterval(idInterval)
    }
}, interval)