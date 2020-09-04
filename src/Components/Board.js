// where we hold the board with all the trivia cards
import React from 'react'
import dataCard from './Cards'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Row, Col, Container } from 'react-bootstrap'
export default function Board(props) {
    let { basic, APIQ, onClickRevealAnswer } = props

    function displayCards(category, card) {

        return (

            <button onClick={(e) => onClickRevealAnswer(e, card, category)}>  </button>

        )
    }

    return (<Container>

        <Row md={4}>
            <Col>
                {
                    basic.map((card) => (
                        <Card >
                            <Image wrapped ui={false} />
                            <Card.Content>
                                <Card.Header> {card['question']}</Card.Header>
                                <Card.Meta>
                                    {/* <span className='date'>Joined in 2015</span> */}
                                </Card.Meta >
                                <Card.Description>
                                    {displayCards("basic", card)}
                                    <div> A:{card['reveal'] ? card['answer'] : null}</div>
                                    {/* {(e) => onClickRevealAnswer(card['answer'])} */}
                                </Card.Description>
                            </Card.Content >
                            <Card.Content extra>
                            </Card.Content>
                        </Card >
                    ))}
            </Col>
            <Col>
                {
                    APIQ.map((card) => (
                        <Card >
                            <Image wrapped ui={false} />
                            <Card.Content>
                                <Card.Header> {card['question']}</Card.Header>
                                <Card.Meta>
                                    {/* <span className='date'>Joined in 2015</span> */}
                                </Card.Meta >
                                <Card.Description>
                                    {displayCards("APIQ", card)}
                                    <div> A:{card['reveal'] ? card['answer'] : null}</div>
                                    {/* {(e) => onClickRevealAnswer(card['answer'])} */}
                                </Card.Description>
                            </Card.Content >
                            <Card.Content extra>
                            </Card.Content>
                        </Card >
                    ))}
            </Col>
        </Row>
    </Container >

    )
}
