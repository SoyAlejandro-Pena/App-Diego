import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Cards = ({ name, edad, pasiones, img }) => (
  <Card className="cards-mg">
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{edad}</span>
      </Card.Meta>
      <div>
        <h6>Cosa favorita</h6>
      </div>
      <Card.Description>
        {pasiones}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Cards;