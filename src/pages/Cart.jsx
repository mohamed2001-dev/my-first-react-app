import React from "react";

function Cart({ cart, setCart }) {

  // ➤ حذف product
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // ➤ زيادة quantity
  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updatedCart);
  };

  // ➤ نقص quantity
  const decreaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // ➤ total price
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty 😢
        </p>
      ) : (
        <div className="max-w-3xl mx-auto flex flex-col gap-4">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
            >
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />

              {/* Info */}
              <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-green-600 font-bold">
                  ${item.price}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="bg-white p-4 rounded-xl shadow mt-4 text-right">
            <h2 className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </h2>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;