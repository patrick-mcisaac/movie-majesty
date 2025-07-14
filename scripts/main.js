import { generateMoviesHTML } from './movie-converter.js'
import { renderMoviesToDom } from './movie-render.js'

const movieHTML = generateMoviesHTML()
renderMoviesToDom(movieHTML)