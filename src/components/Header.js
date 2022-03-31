import React from 'react';
import pokebol from '../assets/purepng.webp';
import pokedexImg from '../assets/pokedex.png';

const Header = () => {
    return (
        <header>
            <div className='redBlock'>
                <img className='logoPokedex' src={pokedexImg} alt='logoPokedex' />
                <img className='pokebol' src={pokebol} alt='pokebola' />
            </div>
            <div className='blackBlock'></div>
    </header>

    )
}
export default Header;