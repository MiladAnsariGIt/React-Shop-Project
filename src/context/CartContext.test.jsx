import { CartContext } from "./CartContext";
import { CartProvider } from "./CartProvider";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { useContext } from "react";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  localStorage.removeItem("cart");
});

const product = {
  id: 1,
  name: "Phone",
  price: 200,
};

function TestComponent() {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  return (
    <div>
      <p>Cart count: {cart.length}</p>
      <p>Quantity: {cart[0]?.quantity ?? 0}</p>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
      <button onClick={() => removeFromCart(product.id)}>
        Remove From Cart
      </button>
      <button onClick={() => increaseQuantity(product.id)}>
        Increase Quantity
      </button>
      <button onClick={() => decreaseQuantity(product.id)}>
        Decrease Quantity
      </button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

describe("Cart Logic", () => {
  it("cart length is zero", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(screen.getByText("Cart count: 0")).toBeInTheDocument();
  });

  it("increase cart count when adding product", async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const button = screen.getByRole("button", {
      name: "Add To Cart",
    });

    await userEvent.setup().click(button);
    expect(screen.getByText("Cart count: 1")).toBeInTheDocument();
  });

  it("length remains 1 and quantity increases by 2 clicks", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const button = screen.getByRole("button", {
      name: "Add To Cart",
    });

    await user.click(button);
    await user.click(button);

    expect(screen.getByText("Cart count: 1")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
  });

  it("removes product from cart", async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const addToCartButton = screen.getByRole("button", {
      name: "Add To Cart",
    });
    const removeFromCartButton = screen.getByRole("button", {
      name: "Remove From Cart",
    });

    const user = userEvent.setup();

    await user.click(addToCartButton);
    await user.click(removeFromCartButton);

    expect(screen.getByText("Cart count: 0")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 0")).toBeInTheDocument();
  });

  it("increase quantity of products", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const addToCartButton = screen.getByRole("button", {
      name: "Add To Cart",
    });
    const increaseQuantityButton = screen.getByRole("button", {
      name: "Increase Quantity",
    });

    await user.click(addToCartButton);
    await user.click(increaseQuantityButton);

    expect(screen.getByText("Cart count: 1")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
  });

  it("decrease quantity of products", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const addToCartButton = screen.getByRole("button", {
      name: "Add To Cart",
    });
    const increaseQuantityButton = screen.getByRole("button", {
      name: "Increase Quantity",
    });
    const decreaseQuantityButton = screen.getByRole("button", {
      name: "Decrease Quantity",
    });

    await user.click(addToCartButton);
    await user.click(increaseQuantityButton);
    await user.click(increaseQuantityButton);
    await user.click(decreaseQuantityButton);

    expect(screen.getByText("Cart count: 1")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
  });

  it("clear cart", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const addToCartButton = screen.getByRole("button", {
      name: "Add To Cart",
    });
    const increaseQuantityButton = screen.getByRole("button", {
      name: "Increase Quantity",
    });
    const clearCartButton = screen.getByRole("button", {
      name: "Clear Cart",
    });

    await user.click(addToCartButton);
    await user.click(increaseQuantityButton);
    await user.click(increaseQuantityButton);
    await user.click(clearCartButton);

    expect(screen.getByText("Cart count: 0")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 0")).toBeInTheDocument();
  });

  it("removes product when quantity reaches zero", async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const addButton = screen.getByRole("button", {
      name: "Add To Cart",
    });

    const decreaseButton = screen.getByRole("button", {
      name: "Decrease Quantity",
    });

    await user.click(addButton);
    await user.click(decreaseButton);

    expect(screen.getByText("Cart count: 0")).toBeInTheDocument();
  });
});
