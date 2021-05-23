const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async (req, res) => {
  const { items, email } = req.body;
  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "USD",
      unit_amount: item.price * 100,
      product_data: { name: item.title, image: [item.image] },
    },
  }));
  console.log(price_data);
  console.log(currency);
  console.log(unit_amount);
  console.log(product_data);
};
