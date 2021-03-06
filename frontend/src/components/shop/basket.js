import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import { getUserBasket, deleteBasket } from '../../lib/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import BasketItem from './BasketItem'

toast.configure()
class Basket extends React.Component {
  state = {
    basket: []
  } 

  removeItemsToast = () => {
    toast.warn('Removed all items!', { position: toast.POSITION.BOTTOM_RIGHT })
  }
  
  async componentDidMount() {
    const response = await getUserBasket()
    console.log(response.data.basket)
    this.setState({
      basket: response.data.basket
    })
  }
  
  handleClick =  async () => {
    await deleteBasket()
    console.log('clicked')
    this.setState({
      basket: []
    })
    toast.success('Successfully removed all items from basket!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.log(this.state.basket)
  }

  render() {
    return (
      <>
        {this.state.basket === [] ?
          <>
            <Container fluid className="beans-banner">
              <h1>Your basket</h1>
            </Container>
            <Container fluid className="empty-basket">
              <h1>Your basket is empty</h1>
              <Link to="/beans">
                <Button variant="Light" size="lg">Back to shop</Button>
              </Link>
            </Container>
          </>
          :
          <>
            <Container fluid className="beans-banner">
              <h1>Your basket</h1>
            </Container>
            <Container className="user-basket">
              <h4>Basket Summary</h4>
              { this.state.basket.map(item => (
                <BasketItem
                  key={item._id}
                  {...item} />
              )) }
              <Container fluid className="checkout-btn-group">
                <Button
                  onClick={this.handleClick}
                  className="delete-basket-btn"
                  variant="danger" 
                  type="submit"
                  block>
                  Remove all items
                </Button>
                <Button
                  className="checkout-btn"
                  variant="success"
                  type="submit"
                  block>
                  <Link to="/shipping">
                  Proceed to checkout
                  </Link> 
                </Button>
              </Container>
            </Container>
          </>
        }
      </>
    )
  }
}

export default Basket