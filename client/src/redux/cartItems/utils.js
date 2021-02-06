export const addItemToCart = (cart, itemToAdd) => {
  const itemExists = cart.find(
    (currentItem) => currentItem._id === itemToAdd._id
  );

  if (itemExists) {
    return incrementCartItemQuantity(cart, itemToAdd);
  } else {
    return [...cart, { ...itemToAdd, quantity: 1 }];
  }
};

export const incrementCartItemQuantity = (cart, itemToIncrement) => {
  return cart.map((currentItem) => {
    if (currentItem._id === itemToIncrement._id) {
      return {
        ...currentItem,
        quantity: currentItem.quantity + 1,
      };
    } else {
      return currentItem;
    }
  });
};

export const removeItemFromCart = (cart, itemToRemove) => {
  return cart.filter((currentItem) => currentItem._id !== itemToRemove._id);
};

export const decrementCartItemQuantity = (cart, itemToDecrement) => {
  if (itemToDecrement.quantity === 1) {
    return removeItemFromCart(cart, itemToDecrement);
  } else {
    return cart.map((currentItem) => {
      if (currentItem._id === itemToDecrement._id) {
        return {
          ...currentItem,
          quantity: currentItem.quantity - 1,
        };
      } else {
        return currentItem;
      }
    });
  }
};
