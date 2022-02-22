const baseUrl = "https://api.giphy.com/v1/"
const api_key = 'TxWDtHEUBEXF4Doj8GtRavX0lfhn8aZM'
const searchBar = document.getElementById("searchBar")
const searchButton = document.getElementById("search")
const translateButton = document.getElementById("translate")
const displayContainer = document.getElementById("displayContainer")

/*
let giphyAPIGIF = `https://api.giphy.com/v1/gifs/search?q=${searchRequest}&api_key=${api_key}&limit=5;`
let giphyAPISTICKER = `https://api.giphy.com/v1/stickers/search?q=${searchRequest}&api_key=${api_key}&limit=5;`
*/

searchButton.addEventListener("click", () => {
    displayContainer.innerHTML = ""
    const request = searchBar.value
    getGifsResults(request)
})

translateButton.addEventListener("click", () => {
    displayContainer.innerHTML = ""
    const request = searchBar.value
    getStickersResults(request)
})

const getGifsResults = async(searchRequest) => {
    try {
        let giphyAPIGIF = `https://api.giphy.com/v1/gifs/search?q=${searchRequest}&api_key=${api_key}&limit=5;`
        const results = await fetch(giphyAPIGIF, { mode: "cors" })
        const dataResults = await results.json()
            // console.log(dataResults) // POUR DEBUGGER
        dataResults.data.forEach(element => {
            const img = document.createElement("img")
            img.src = element.images["original"].url
            displayContainer.appendChild(img)
        })
        if (dataResults.data.length === 0) displayContainer.textContent = "Aucun résultat trouvé"
    } catch (error) {
        console.log(error)
    }
}

const getStickersResults = async(searchRequest) => {
    try {
        let giphyAPISTICKER = `https://api.giphy.com/v1/stickers/search?q=${searchRequest}&api_key=${api_key}&limit=5;`
        const results = await fetch(giphyAPISTICKER, { mode: "cors" })
        const dataResults = await results.json()
            // console.log(dataResults) // POUR DEBUGGER
        dataResults.data.forEach(element => {
            const img = document.createElement("img")
            img.src = element.images["original"].url
            displayContainer.appendChild(img)
        })
        if (dataResults.data.length === 0) displayContainer.textContent = "Aucun résultat trouvé"
    } catch (error) {
        console.log(error)
    }
}