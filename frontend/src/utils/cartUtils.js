
export const groupCartItems = (cart = []) => {
  return cart.reduce((acc, item) => {
    const existing = acc.find((p) => p.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);
};

export const parsePrice = (price) => {
  const normalized = String(price).replace(/R\$/g, "").replace(/\./g, "").replace(",", ".");
  return parseFloat(normalized) || 0;
};

export const calculateSubtotal = (groupedItems) => {
  return groupedItems.reduce((acc, item) => {
    return acc + parsePrice(item.price) * item.quantity;
  }, 0);
};

export const formatPrice = (value) => {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
};

// Função para obter resumo formatado do carrinho (para exibição)
export const getCartSummary = (cart = []) => {
  const groupedItems = groupCartItems(cart);
  const subtotal = calculateSubtotal(groupedItems);
  
  const items = groupedItems.map(item => {
    const unitPrice = parsePrice(item.price);
    const lineTotal = unitPrice * item.quantity;
    
    return {
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      unitPrice: unitPrice,
      lineTotal: lineTotal,
      formattedLineTotal: formatPrice(lineTotal),
      displayText: `${item.quantity}x ${item.name}`
    };
  });
  
  return {
    items,
    subtotal,
    formattedSubtotal: formatPrice(subtotal),
    isEmpty: groupedItems.length === 0
  };
};