import './App.css';
import { useEffect, useState } from 'react';
import Board from './components/Board/Board'

const emojiList = [...'↔️ ⛽️ ◾️ 🍮 👷 ✏️ 😈 🍓 🏗 🐡']

const App = () => {
  // Variable to manipulate the cards and a function to modify it: 
  const[shuffledCards, setShuffledCards]=useState([]);

  useEffect(()=>{
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledCards(shuffledEmojiList.map( (emoji, i) => ({index: i, emoji, flipped: false})));
  }, []);

  const shuffleArray = (a) =>{
    for(let i=a.length-1; i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]] = [a[j], a[i]];
    }
  }

  return(
    <Board cards={shuffledCards}/>
  )


}

export default App;
