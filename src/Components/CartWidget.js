import React, { Component } from 'react'
import {Col, Image} from 'react-bootstrap';
import Logo from '../Components/sneakers.png';


export class CartWidget extends Component {
  render() {
    return (
      <div>
        <Col xs={6} md={4}>
          <Image src={Logo} roundedCircle style={{ width: '90px', height: '90px', }}/>
        </Col>
      </div>
    )
  }
}

export default CartWidget
