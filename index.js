// Write your solution here!

let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(newcat){
    cats.push(newcat)
    console.log(cats)
}

function destructivelyPrependCat(newcat){
    cats.unshift(newcat)
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function destructivelyRemoveLastCat(){
    cats.pop()
}
function appendCat(newcat){
    return[...cats, newcat]
}

function prependCat(newcat){
    return[newcat, ...cats]
}

function removeFirstCat(){
    return(cats.slice(1))
}

function removeLastCat(){
    return(cats.slice(0, (cats.length -1)))
}