const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async (req, res) => {
  const { items, email } = req.body;
  const transformedItems = items.map((item) => ({
    itemprice_data: {
      currence: "USD",
      product_data: { name: item.title, image: [item.image] },
    },
  }));
};
