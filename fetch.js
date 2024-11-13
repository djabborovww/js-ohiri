// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then((response) => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.error(error));




// async function fetchData(){
//     try {
//         const pokemonName = document.querySelector("#pokemonName").value.toLowerCase()

//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

//         if (!response.ok){
//             throw new Error('Malumotni olishda xatolik bor');
//         }
//         const data = await response.json()

//         const pokemonImage = data.sprites.front_default
//         const image = document.querySelector("#pokemonImage")

//         image.src = pokemonImage
//         image.style.display = "block"

//     }catch (error) {
//         console.error(error)
//     }
// }



// 5 ta misol



// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((response) => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.error(error));



// fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
//     .then((response) => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.error(error));




// fetch("https://pokeapi.co/api/v2/pokemon/charmeleon")
//     .then((response) => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.error(error));



// fetch("https://pokeapi.co/api/v2/pokemon/raichu")
//     .then((response) => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.error(error));




async function fetchData(){
    try {
        const pokemonName = document.querySelector("#pokemonName").value.toLowerCase()

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!response.ok){
            throw new Error('Malumotni olishda xatolik bor');
        }
        const data = await response.json()

        const pokemonImage = data.sprites.front_default
        const image = document.querySelector("#pokemonImage")

        image.src = pokemonImage
        image.style.display = "block"

    }catch (error) {
        console.error(error)
    }
}
