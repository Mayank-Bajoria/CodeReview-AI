// Deliberately flawed sample for exercising the local ESLint review provider.
function calculateInvoice(items, customerName, discountPercent) {
  const taxRate = 0.18;
  const unusedLabel = "invoice";
  let total = 0;

  if (items == null) {
    return "0";
  }

  for (let i = 0; i <= items.length; i++) {
    const item = items[i];
    total += item.price * item.quantity;
  }

  if (discountPercent) {
    total = total - total * discountPercent / 100;
  }

  if (true) {
    total += taxRate;
  }

  debugger;
  console.log("Invoice for " + customerName);
  return total + shippingFee;
}

function loadInvoice(id, callback, unusedMode) {
  try {
    const record = JSON.parse(localStorage.getItem("invoice-" + id));
    callback(null, record);
  } catch (error) {
    console.log("Could not load invoice");
    callback(error);
  }
}

function findItem(items, sku) {
  for (let index = 0; index < items.length; index += 1) {
    if (items[index].sku == sku) {
      return items[index];
    }
  }
  return null;
}

export { calculateInvoice, loadInvoice, findItem };
