## Test 1 - Task statement

Create an interface that consumes the [omdb api](http://www.omdbapi.com/) & displays information about a movie,
given it's [imdb ID](https://www.imdb.com/). 

The interface should consist of an input field that accepts "comma separated" IMDB IDs, and shows the movies information (title, poster, plot, director, actor, etc.) in a clean UI.

#### Interface should include the following:
1. An additional input that allows to filter a movie by title (substring match).
2. Update the interface as the user types his search query.
3. Allow the user to click on any particular movie to view its details.
4. Favourite a movie by clicking on its poster or a start icon (no server side implementation required, some temporary in browser way to indicate that on UI should be sufficient). Once favorited, there should be a filter somewhere, that shows all favorited movies.
5. Make the interface as clean and user-friendly as possible, be creative.
6. No need to make data persistent across refresh. We're imagining it to be working as long as the app is open. Once refreshed, its starts blank again.

#### Requirements.
● Create a repo on your github & provide a link.   
● Use any Vue.js version   
● Use any CSS framework for the UI   
● Include appropriate instructions in the Readme   

#### Good to have.
● Typescript

#### Task duration.
2 hours approx.

NOTE: OMDBAPI requires an api key for all its endpoints, the same can be obtained from the linked source above.
