// where we hold the board with all the trivia cards
import React from 'react'
import dataCard from './Cards'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function Board(props) {


    function displayCards(question, answer) {
        return (<Card>
            <Image wrapped ui={false} />
            <Card.Content>
                <Card.Header>{question}</Card.Header>
                <Card.Meta>
                    {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                    {answer}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            </Card.Content>
        </Card>)
    }
    return (
        <div>
            {/* {props.dataCard} */}
            {props.basic.map((list) => <div> {displayCards(list['question'], list['answer'])}</div>)}

        </div>
    )
}
