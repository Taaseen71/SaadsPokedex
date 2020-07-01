

 # Project Overview
https://taaseen71.github.io/SaadsPokedex/
## Project Name

<!-- The name of your project. -->
Saad's Pokedex

## Project Description

<!-- Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality. -->
My goal is to create a webpage that takes an input for a pokemon name, and returns descriptions such as types, 
descriptions, and images. 


## API and Data Sample

<!-- Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need -->
1. https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=151
2. https://pokeapi.co/api/v2/pokemon-species/25 (the last end of the link will post the numbers from a certain Array)
3. https://pokeapi.co/api/v2/pokemon/25

4. api snippet: ./images/sample_snippet1.png

## Wireframes

<!-- Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe. -->
https://wireframe.cc/tDFfNU
"./images/wireframe.png"

### MVP/PostMVP - 5min

◊ The website must be able to take an input.
           ◊ Must be able to use the input to hit an api and get name and url
           ◊ must give an index number
           ◊ must use the index number to search two new APIs. 
           ◊ must list name, stats and descriptions when searching up name
           ◊

#### MVP 
- add PokeApi 
- The website must be able to take an input.
<!-- - Find and use external api  -->

- Must be able to use the input to hit an api and get name and url
- Render data on page 
- must list name, stats and descriptions when searching up name
- make sure all data show up simultaneously from two separate API endpoints

  <!-- ! can I USE two separate js paths for two separate APIs? will that make my code work better? -->


#### PostMVP 

-  Style the HTML page to make it look nicer
- Add images from an external source that also uses the indexing to link images


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|April 2rd| <!-- Project Prompt -->approve project/pseudocode the day's objectives   | Done
|April 3rd - 5th| <!-- Wireframes / Priority Matrix / Functional Components-->Make sure the first API works/ use second API to merge wit h the first API's data  | Done
|April 6th| <!----> Structure the HTML on js | Done
|April 6th| Structure First HTML on js/ organize and show data on the webpages | Done
|April 7th|<!---->  make a 3rd api that add's to the data/ add images to each of the data/ make a constructor function that links all data together | Done/Didnt need
|April 8th| <!----> render all data on the page  | Complete
|April 9th| <!----> make sure all MVP and PostMVP files show up/ BUG FIXES  | Complete
|April 10th| <!----> Present | Incomplete

## Priority Matrix

| Objective | Deliverable | Priority
|-------- | --------- | -------|
| Hit all apis| Monday/Tuesday| High|
| merge all api Data| Monday/Tuesday | medium |
| use all data to form a constructor| Wednesday | High | 
| create HTML elements using data | Wednesday | medium | 
| refresh page/ style sections | Thursday | medium-low| 

## Timeframes




| Component | Priority | Estimated Time | Time Invested | 
| --- | :---: |  :---: | :---: |
| Adding Form | H | 3hrs| 6 |
| managing API | H | 12hrs| 12 |
| constructor Functions| H| 6hrs| 3 | 
| merge data | H | 3hrs | 3 |
| structuring HTML | M | 7hrs | 3 | 
| refresh pg/ style | L | 3hrs | 3 | 
| extra Features | L | 3hrs | 2 |
| bug Fixes | H | 10 | 18 | 
| Tracking Progress/Pseudocode | M | 3hrs | 2hrs |
| Total | H | 47hrs| 52hrs | 

## Code Snippet



https://i.imgur.com/sjqoNT4.png This changes the background every few seconds. I chose pastel colours for better viewability.
https://i.imgur.com/34bc5QG.png This piece of code hits the first API and accumulates the a list that it adds into an array of numbers that start from 1 instead of zero. 
https://i.imgur.com/4beCP3I.png The resultant array number then adds to this piece of code to replace a function parameter. 
using the parameter found in the array, the browser then searches another API endpoint to gather additional data. this is done twice, one for pokedex entry, one for base stats.
https://i.imgur.com/tftvxHm.png A common bug I kept getting was that the pokemon images would start to repeat every time. so i had to make sure my button was removed after the first api call. 
  
```
const getData2 = (parameter1) => {

  //TODO: `https://pokeapi.co/api/v2/pokemon-species/${ArrayNumber}`
  axios.get(`https://pokeapi.co/api/v2/pokemon-species/${parameter1}`) //* PlaceHolder to check 
    .then(response => {

      pokemonFlavourText1 = response.data.flavor_text_entries.length;
      pokemonFlavourText2 = response.data.flavor_text_entries[pokemonFlavourText1 - 1].flavor_text;

      console.log(response.data, pokemonFlavourText1, pokemonFlavourText2);
```

## Change Log
In the future I intend to implement a functionality where clicking each of the images in the list of pokemon would search for that specific pokemon from the api and deliver it's pokedex entry and stats without having to type them separately.

