
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup, getByRole } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ProductCard from './ProductCard'
import userEvent from '@testing-library/user-event'

afterEach(() => {
  cleanup()
})

const product = {
  id: 1,
  image: '📱',
  name: 'Test Phone',
  price: 500,
  category: 'Electronics',
  rating: 4.8,
}

function renderProductCard() {
  const addToCart = vi.fn()

  render(
    <MemoryRouter>
      <CartContext.Provider value={{ addToCart }}>
        <ProductCard product={product} />
      </CartContext.Provider>
    </MemoryRouter>
  )

  return { addToCart }
}

describe('ProductCard', () => {
  it('displays product information', () => {
    renderProductCard()

    expect(screen.getByText('Test Phone')).toBeInTheDocument()
    expect(screen.getByText('500')).toBeInTheDocument()
    expect(screen.getByText('Electronics')).toBeInTheDocument()
  })

  it('shows Best Seller for rating 4.5 or higher', () => {
    renderProductCard()

    expect(screen.getByText(/Best Seller/)).toBeInTheDocument()
  })

  it('does not show Best Seller for rating below 4.5', () => {
  const lowRatedProduct = {
    ...product,
    rating: 4.2,
  }

  render(
    <MemoryRouter>
      <CartContext.Provider value={{ addToCart: vi.fn() }}>
        <ProductCard product={lowRatedProduct} />
      </CartContext.Provider>
    </MemoryRouter>
  )

  expect(screen.queryByText(/Best Seller/)).not.toBeInTheDocument()
})

  it('calls addToCart when the button is clicked', async () => {
    const { addToCart } = renderProductCard()
    const user = userEvent.setup()

    const button = screen.getByRole('button', {
      name: 'Add To Cart',
    })

   
      await user.click(button)

    expect(addToCart).toHaveBeenCalledWith(product)
  })

  it('calls addToCart only once when button is clicked', async () => {
    const {addToCart} = renderProductCard()

    const button = screen.getByRole('button',{
        name: 'Add To Cart',
    })
    
    await userEvent.setup().click(button)

    expect(addToCart).toHaveBeenCalledTimes(1);
  })

  it('calls addToCart twice when clicked twice', async () =>{
    const {addToCart} = renderProductCard();
    const user = userEvent.setup();

    const button = screen.getByRole('button',{
        name: 'Add To Cart',
    })

    await user.click(button);
    await user.click(button);

    expect(addToCart).toHaveBeenCalledTimes(2);
  })
  
  it('show best seller if rating is axactly 4.5',() => {
    const testProduct = {
        ...product,
        rating:4.5
    }

    render(
        <MemoryRouter>
            <CartContext.Provider value={{addToCart : vi.fn()}}>
                <ProductCard product={testProduct}/>
            </CartContext.Provider>
        </MemoryRouter>
    )

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()

    // text in // means regular expression. so it can find text even with emojies next to it.
    // the i in here means the capital lettes doesn`t matter
  })
})
