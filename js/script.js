console.log("script.js loaded");
// Giphy API key
const API_KEY = "s2SYHnCQ2JKcLIz5QzgmlsFO0ZWFQ6Ar"

// Grab elements
const fetchBtn = document.getElementById("fetch-gif-btn")
const gifContainer = document.getElementById("gif-container")
const searchInput = document.getElementById("search-input")

// Fetch GIFs
async function fetchGifs(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=6&rating=g`

  try {
    const response = await fetch(endpoint)
    const json = await response.json()
    const gifs = json.data

    // Clear old GIFs
    gifContainer.innerHTML = ""

    // Add new GIFs
    gifs.forEach(gif => {
      const imgUrl = gif.images.fixed_height.url
      gifContainer.innerHTML += `<img src="${imgUrl}" class="col-3 mb-3">`
    })

  } catch (error) {
    console.error("Error fetching GIFs:", error)
  }
}