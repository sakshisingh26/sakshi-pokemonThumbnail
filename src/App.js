
import { useEffect, useState } from 'react';
import './App.css';
import PokemonThumbnail  from './PokemonThumbnail';
function App() {
  const[allPokemons,setAllPokemons]=useState([])
  const[loadMore,setLoadMore]=useState("https://pokeapi.co/api/v2/pokemon?limit=20")

  useEffect(()=>{
    getAllPokemons()
  },[])

const getAllPokemons=async()=>{
  const res=await fetch(loadMore)
  const data=await res.json()
  setLoadMore(data.next)
  
function createPokemonObject(result){
  // console.log("resssssss sakshi==========",result);
  result.forEach( async (pokemon) => {
    const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`) 
    const data=await res.json()
    setAllPokemons(currentList=>[...currentList,data]) 
  });
}


  createPokemonObject(data.results)
  // await console.log(allPokemons)
}

// console.log("alllPok",allPokemons);
  return (
   
     <div className='app-container'>
               <h1 style={{textAlign:"center"}}> Pokemon Evaluation. </h1>
            <div className='pokemon-container'>
        <div className='all-container'>
          {allPokemons.map((pokemon,index)=>
            // console.log("SSSSSS",pokemon,pokemon.id,pokemon.name,);

            <PokemonThumbnail
            id={pokemon.id} 
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
            />
          )}

        </div>
        <button className='load-more' onClick={getAllPokemons} >Load More</button>
            </div>
            </div>
      
  );
}

export default App;
