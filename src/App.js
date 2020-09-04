import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { useEffect, useState } from 'react';
import data from './Components/Questions.json'
import { Card, Icon, Image } from 'semantic-ui-react'
import Board from './Components/Board'
import dataCards from './Components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Label } from 'semantic-ui-react'

// this is a js & react trivia game
// a component for the board to display and hold all the trivia cards 
// a component for the cards 
//different categories of cards 
//  1. basic javascript question (for loop, pure functions)
//  2. API related js questions (async/await, header,endpoints )
//  3. advanced js functions  (callbacks, currying, closure, )
//  4. gotchas 
//  5. React/redux 

//functionality 
// Display points accumated 
//button- click to reveal question - when user click a button, it will flip the card to reveal the answer 
//button- click to reveal answer - reveal answer and if user got the answer add to the points 
//button(wrong)- dont add the points 
//button(correct)- add the points
//disable card when done flipping 
//when all cards are disabled show message - Congrats, you have completed the game 
//show button to restart the game 
//when restart the game, make sure only new questions are rendered to the next game


//process- made json file for all categories- each with 20 Q&A

class CardInfo {
  constructor(question, answer) {
    this.question = question
    this.answer = answer
    this.reveal = false
  }
}


function App() {
  const [newData, setData] = useState([])
  const [basic, setBasic] = useState([])
  const [APIQ, setAPIQ] = useState([])
  const [gotchas, setgotchas] = useState([])
  const [advancedjs, setadvancedjs] = useState([])
  const [reveal, setReveal] = useState({})


  useEffect(() => {
    for (let category in data['cards']) {
      let cardList = []
      for (let card in data['cards'][category]) {
        if (data['cards'][category][card]['question'].length) {
          let newCard = new CardInfo(data['cards'][category][card]['question'], data['cards'][category][card]['answer'])
          cardList.push(newCard)
        }
      }
      if (category === 'basic') {
        setBasic([...cardList])
      }
      if (category === 'API related') {
        setAPIQ([...cardList])
      }
      if (category === 'Gotchas') {
        setgotchas([...cardList])
      }
      if (category === 'Advanced js') {
        setadvancedjs([...cardList])
      }
    }

  }, [])

  useEffect(() => {
    console.log(basic, 'hi')
  }, [basic])


  function onClickRevealAnswer(e, card, category) {

    if (!card['reveal']) {
      card['reveal'] = true
    }
    if (category === 'basic') {
      setBasic([...basic, card])
    }
    if (category === 'API related') {
      setAPIQ([...APIQ, card])
    }
    if (category === 'Gotchas') {
      setgotchas([...gotchas, card])
    }
    if (category === 'Advanced js') {
      setadvancedjs([...advancedjs, card])
    }
    console.log(card['answer'])

    return (<div> Answer: {card['answer']}</div>)
  }

  return (
    <div className="App">
      <header className="App-header">
        Frontend Trivia
        {/* {basic.map((list) => <Card> {list['question']}</Card>)} */}
        <button> start </button>
      </header>
      <Board basic={basic} APIQ={APIQ} gotchas={gotchas} advancedjs={advancedjs} onClickRevealAnswer={onClickRevealAnswer} />
    </div>
  );
}

export default App;
