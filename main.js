
console.log("JS LOADED")
function fetchJoke(type){
let fetchPromise = window.fetch(`https://sv443.net/jokeapi/v2/joke/${type}?type=single`)
let jsonPromise = fetchPromise.then(function(data){
    console.log("API CALLED", data)
    return data.json()
})

jsonPromise.then(function(json){
    console.log("actual payload", json)
    process(json)
})
}
function process(joke) {
    
    let ul = document.getElementById("joke")
    let li = document.createElement("li")
    ul.appendChild(li)
    let jokeListItem = joke.joke
    li.innerHTML = jokeListItem
    console.log(jokeListItem)
    
}

document.getElementById("jokeGen").addEventListener("click", function(){
    fetchJoke('any')
})
    document.getElementById("programming").addEventListener("click", function(){
        fetchJoke('programming')
})