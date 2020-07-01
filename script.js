//! What the code is doing
//? bugfixes or self understanding text
//TODO: PseudoCode;
//* check scope and parameters. comment out if works



/* -------------------------------------------------------------------------- */
/*                  Global Variables and Constants Added Here                 */
/* -------------------------------------------------------------------------- */

//TODO: Creating global variables here so they're easier to find.


console.log(`script is working`); //* Remove once working DELETE LATER
const getButton1 = document.getElementById(`getButton1`); //! Obtained getButton from HTML
const getButton2 = document.getElementById(`getButton2`); //! obtained getButton2 from HTML
const getButton3 = document.getElementById(`getButton3`);



console.log(getButton1); //* This should return the Button Tag. Pass. DELETE LATER
console.log(getButton2); //* This should return the second Button Tag. Pass. DELETE LATER
console.log(getButton3);

const input = document.querySelector('#PkMnInput');

let pokeData; //? returns list of pokemon with count name previous and results. check getData1()
let pokemonArray; //? Returns list of pokemon names and url. check getData1()
let globalIndexArray = []; //? this sets the Index for us on the other APIs
let globalPokemonArray = []; //? this returns the index of pokemon. like for bulbasaur it returns 1
let PokeDexObject;

let indexForData2;  //? for Use in API. created in Return API
let pokemonSpecies; //? Variable for getData2
let pokemonFlavourText1; //? Returns Pokemon Descriptions Variable for getData2
let pokemonFlavourText2; //? Returns Pokemon Descriptions Variable for getData2 since language is different.
let evolvesFrom;
let realInput;

let pokemonType1;
let pokemonType2;//? Returns Pokemon Descriptions Variable for getData3
let pokemonSprite;//? Returns Pokemon Descriptions Variable for getData3
let pokemonSpeed;//? Returns Pokemon Descriptions Variable for getData3
let pokemonSpcDefense;//? Returns Pokemon Descriptions Variable for getData3
let pokemonSpcAttack;//? Returns Pokemon Descriptions Variable for getData3
let pokemonDefense;//? Returns Pokemon Descriptions Variable for getData3
let pokemonAttack;//? Returns Pokemon Descriptions Variable for getData3
let pokemonHealth;//? Returns Pokemon Descriptions Variable for getData3





/* -------------------------------------------------------------------------- */
/*                           Getting Data from APIs                           */
/* -------------------------------------------------------------------------- */


//TODO: create APIs that give several Values Below this
//! This returns the initial API that creates an Array for with all 151 Pokemon names;
const getData1 = () => {

    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
        .then(response => {
            //* console.log(response.data); => response data returns a base data sheet DELETE LATER
            pokeData = response.data; //? this should return list of pokemon with count name previous and results.
            pokemonArray = response.data.results; //? Returns list of pokemon names and url
            console.log("Get Data  1 = ", pokeData, pokemonArray.length);

            return pokeData;
        });
}

const getData2 = (parameter1) => {

    //TODO: `https://pokeapi.co/api/v2/pokemon-species/${ArrayNumber}`
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${parameter1}`) //* PlaceHolder to check 
        .then(response => {
            //! TINKER WITH THIS WHEN LANGUAGE DOESNT WORK
            // pokemonFlavourText1 = response.data.flavor_text_entries.length;
            // pokemonFlavourText1 = response.data.flavor_text_entries.length;
            // pokemonFlavourText2 = response.data.flavor_text_entries÷[pokemonFlavourText1 - 3].flavor_text;
            pokemonFlavourText2 = response.data.flavor_text_entries[0].flavor_text;

            console.log(response.data, pokemonFlavourText1, pokemonFlavourText2);

            //TODO: BUILD HTML -------------------------------------------------------------------START HERE


            let div1 = document.createElement('div');
            div1.className += 'pokedexEntry';
            let divMain = document.createElement('div');
            divMain.className += 'allPokedexEntries';
            let title1 = document.createElement('h3');
            title1.className += 'pokedexTitle';
            title1.innerHTML = response.data.name;
            console.log("realInput = ", realInput); //works
            // realInput.style.textTransform = 'capitalize';
            div1.appendChild(title1);
            //! Adding Images for Each;
            let poster1 = document.createElement('img');
            poster1.title = title1.innerText;
            poster1.className += 'bastionbot2';
            poster1.src = `https://pokeres.bastionbot.org/images/pokemon/${parameter1}.png`
            div1.appendChild(poster1);

            let div2 = document.createElement('div');
            div2.className += 'pokedexEntry2';
            let pokedexEntry = document.createElement('p');
            pokedexEntry.classList += 'classPokedexEntry';
            pokedexEntry.innerHTML = (pokemonFlavourText2);
            div2.appendChild(pokedexEntry);



            this.document.querySelector('.solidDiv').innerHTML = "";

            this.document.querySelector('.solidDiv').appendChild(divMain);
            divMain.appendChild(div1);
            divMain.appendChild(div2);

            // this.document.querySelector('main').appendChild(div2)

            getData3(parameter1, div2);



        })
}

const getData3 = (parameter1, div2) => {
    //TODO: https://pokeapi.co/api/v2/pokemon/${0 + 1 = 1}
    axios.get(`https://pokeapi.co/api/v2/pokemon/${parameter1}`)
        .then(response => {
            // pokemonType1 = response.data.types[0].type.name;
            pokemonType = response.data.types.map(type => type.type.name)
            //! Join comma separates and returns two as strings instead of array
            pokemonType1 = pokemonType.join(", ")
            //! note to self: map finds type array and returns the name of each of the types
            // use more in the future
            //https://www.jamesqquick.com/blog/build-a-pokedex-with-vanilla-javascript ONLY LEARNED HOW TO USE THE MAP FUNCTION.
            console.log(pokemonType1);
            let pokemonType2 = document.createElement('p');
            pokemonType2.classList += ('singleStat');
            pokemonType2.innerHTML = `Type= ${pokemonType1}`;
            div2.appendChild(pokemonType2);

            pokemonID1 = response.data.id;
            console.log("ID= ", pokemonID1);
            let pokemonID2 = document.createElement('p');
            pokemonID2.classList += ('singleStat');
            pokemonID2.innerHTML = `Pokedex ID= ${pokemonID1}`;
            div2.appendChild(pokemonID2);

            let pokemonStat0 = response.data.stats[0].base_stat;
            console.log("speed= ", pokemonStat0);
            let pokemonSpeed = document.createElement('p');
            pokemonSpeed.classList += ('singleStat');
            pokemonSpeed.innerHTML = `Speed = ${pokemonStat0}`;
            div2.appendChild(pokemonSpeed);

            let pokemonStat1 = response.data.stats[1].base_stat;
            console.log("spcDefense= ", pokemonStat1);
            let pokemonSpcDefense = document.createElement('p');
            pokemonSpcDefense.classList += ('singleStat');
            pokemonSpcDefense.innerHTML = `spcDefense= ${pokemonStat1}`;
            div2.appendChild(pokemonSpcDefense);

            let pokemonStat2 = response.data.stats[2].base_stat;
            console.log("spcAttack= ", pokemonStat2);
            let pokemonSpcAttack = document.createElement('p');
            pokemonSpcAttack.classList += ('singleStat');
            pokemonSpcAttack.innerHTML = `spcAttack= ${pokemonStat2}`;
            div2.appendChild(pokemonSpcAttack);

            let pokemonStat3 = response.data.stats[3].base_stat;
            console.log("Defense= ", pokemonStat3);
            let pokemonDefense = document.createElement('p');
            pokemonDefense.classList += ('singleStat');
            pokemonDefense.innerHTML = `Defense= ${pokemonStat3}`;
            div2.appendChild(pokemonDefense);

            let pokemonStat4 = response.data.stats[4].base_stat;
            console.log("Attack= ", pokemonStat4);
            let pokemonAttack = document.createElement('p');
            pokemonAttack.classList += ('singleStat');
            pokemonAttack.innerHTML = `Attack = ${pokemonStat4}`;
            div2.appendChild(pokemonAttack);

            let pokemonStat5 = response.data.stats[5].base_stat;
            console.log("health= ", pokemonStat5);
            let pokemonHealth = document.createElement('p');
            pokemonHealth.classList += ('singleStat');
            pokemonHealth.innerHTML = `HP = ${pokemonStat5}`;
            div2.appendChild(pokemonHealth);
        })
    removeButton1();
}



/* -------------------------------------------------------------------------- */
/*                                 Pseudo Code                                */
/* -------------------------------------------------------------------------- */

//TODO: PseudoCode: 
//TODO: API can be hit 100 times per minute from a single IP. so calling it 3-4 times in a row wont affect it.
//TODO: An array.length will be called when user inputs the specific Pokemon in the Array.
//TODO: the array.length+1 value will be added to the next API's link to access the particular Pokemon's Database.
//? so for example, if bulbasaur returns 0, 
//TODO: the Api that will be called will be set as `https://pokeapi.co/api/v2/pokemon-species/${0+1 = 1}`
//? this will return a database for Bulbasaur.
//TODO: from the pokemon_species, get values flavor_text_entries[1,2].flavor_text.
//? one slight issue is that different pokemon's flavor_text_entries[2] is in english, and certain pokemon's flavor_text_entries[1] is in English. 
//? need help in this one;
//TODO: Show data.evolves_from_species; data.
//TODO: hit up a third API `https://pokeapi.co/api/v2/pokemon/${0+1 = 1}`
//TODO: access data.types.type[0]; Because we're doing only kanto now.
//TODO: access data.sprites.front_default, and assign it to a hyperLink that shows up when the user searches the pokemon's name;
//TODO: access data.stats.base_stat[0] = speed; data.stats.base_stat[1] = spc-defense;
//TODO: data.stats.base_stat[2] = spc-attack; data.stats.base_stat[3] = defense, data.stats.base_stat[4] = attack;
//TODO: data.stats.base_stat[5] = hp;





const PkMnList = (parameter1) => {
    // let PokemonName = parameter1.Title;
    let div1 = document.createElement('div');
    div1.className += 'allPokemonList';




    for (let i = 0; i < parameter1.length; i++) {
        let title1 = document.createElement('p');
        title1.className += 'kantoPokemon';
        title1.innerHTML = parameter1[i];
        div1.appendChild(title1);
        //! Adding Images for Each;
        let poster1 = document.createElement('img');
        poster1.title = title1.innerText;
        poster1.className += 'bastionbot';
        poster1.src = `https://pokeres.bastionbot.org/images/pokemon/${i + 1}.png`
        title1.appendChild(poster1);
    }
    // this.document.querySelector('main').appendChild(div1);




    document.querySelector('.solidDiv').appendChild(div1);
    // divMain.appendChild(div1);
    // divMain.appendChild(div2);




}
//? finished pokemon list building


//! creating a new Pokemon from all the compiled information;
//TODO: let calledPokemon = new PkMnObjectCreator(name, evolvesFrom, pokemonType, speed, spcDefense, spcAttack, defense, attack, health);

function removeButton1() {
    var elem = document.getElementById('getButton1');
    elem.parentNode.removeChild(elem);
    // this is to remove list pokemon button 
}


/* ---------------------------- Code Starts Here ---------------------------- */

//! This returns the list of pokemon names inside the API
const getPokemon = (e) => {
    e.preventDefault();
    e.target.removeEventListener('click', getPokemon);
    //This removes doubling of pokemon
    for (let index1 = 0; index1 < pokemonArray.length; index1++) {
        globalPokemonArray.push(pokemonArray[index1].name);
        globalIndexArray.push(index1 + 1);
        //* globalPokemonArray = lists all pokemon
        //* globalIndexArray = numbers 1 - 151
    }

    //* PokeDexObject = 1: bulbasaur, 2: Ivysaur ...... 150: Mewtwo, 151: Mew
    //! merging globalIndexArray with globalPokemonArray into one Object
    PokeDexObject = globalPokemonArray.reduce(function (PokeDexObject, plugInToNewObject, index) {
        PokeDexObject[globalIndexArray[index]] = plugInToNewObject;
        return PokeDexObject;
    }, {})
    //https://riptutorial.com/javascript/example/8628/merge-two-array-as-key-value-pair
    console.log(PokeDexObject);
    PkMnList(globalPokemonArray);

}

const getPokemon2 = () => {

    for (let index1 = 0; index1 < pokemonArray.length; index1++) {
        globalPokemonArray.push(pokemonArray[index1].name);
        globalIndexArray.push(index1 + 1);
        //* globalPokemonArray = lists all pokemon
        //* globalIndexArray = numbers 1 - 151
        //* this one is for getData2 and 3
    }


    return globalPokemonArray;
}



//TODO: take user input compare to globalpokemon Array return indexNumber. getdata2(indexNumber), getData3 (indexNumber);
let returnLookup = (e) => {


    let inputLower = input.value.toLowerCase();
    console.log('inputLower = ', inputLower);// works

    console.log('getPokemon2 =', globalPokemonArray); //works

    if (globalPokemonArray.length < 1) {
        getPokemon2();
        removeButton1();
        console.log('ArrayLength is < 1', globalPokemonArray);

        //if there's nothing in globalPokemonArray, run this code. if not dont.
    }

    for (let index2 = 0; index2 < globalPokemonArray.length; index2++) {
        // console.log(globalPokemonArray[index2]) WORKS
        if (inputLower == globalPokemonArray[index2]) {
            console.log(globalPokemonArray[index2]);// works
            realInput = inputLower;
            let indexNumber = (globalPokemonArray.indexOf(globalPokemonArray[index2]));
            indexNumber = indexNumber + 1;
            console.log(indexNumber) //index starts from 0; works

            getData2(indexNumber);

        }
        else {
            console.log('looping through');

        }
    }
    //TODO: GETTING RESPONSES ON BOTH ENDPOINT APIs. TAKES A LITTLE TIME> BUT EVERY ENTRY IS 3 CALLS IN DATA2;



}

//* Sanity Check

getButton1.addEventListener('click', getPokemon)

getButton2.addEventListener('click', function (e) {
    e.preventDefault()
    e.target.removeEventListener('click', getPokemon);
    returnLookup();
});



getData1();

