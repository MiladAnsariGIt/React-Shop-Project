const BASE_URL = "http://localhost:3000";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) throw new Error("failed to fetch");

  return response.json();
}

export async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) throw new Error("failed to fetch");

  return response.json();
}

export async function createOrder(order) {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (!response.ok) throw new Error("failed to fetch");

  return response.json();
}
