// where we hold the board with all the trivia cards
import React from 'react'
import dataCard from './Cards'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function Board(props) {
    let { basic, APIQ, onClickRevealAnswer } = props

    function displayCards(category, card) {

        return (<div> {card['question']}
            <button onClick={(e) => onClickRevealAnswer(e, card, category)}>  </button>
            <div> i need space {onClickRevealAnswer(card, category)}</div>

        </div>)
    }

    return (
        <div>
            {/* {props.dataCard} */}
            {basic.map((card) => (<div>
                {displayCards(basic, card)}
                <div> Answer:{card['reveal'] ? card['answer'] : null}</div>
                {/* {(e) => onClickRevealAnswer(card['answer'])} */}
            </div>))}

        </div>
    )
}
// {/* <Card>
//     <Image wrapped ui={false} />
//     <Card.Content>
//         <Card.Header>{question}</Card.Header>
//         <Card.Meta>
//             {/* <span className='date'>Joined in 2015</span> */}
//         </Card.Meta>
//         <Card.Description>
//             <button onClick={(e, answer) => onClickRevealAnswer(e, answer)}> </button>
//         </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//     </Card.Content>
// </Card>) */}