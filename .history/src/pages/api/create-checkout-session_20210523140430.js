const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);
export default async (req, res) => {
  const { items, email } = req.body;
  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currence: "USD",
      unit_amount: item.price * 100,
      product_data: { name: item.title, images: [item.image] },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    payement_method_types: ["card"],
    shipping_rates: ["shr_1IuBsbKjQ7xFphR55syCNNMl"],
    shipping_address_collection: {
      allowed_countries: ["US", "GB", "EU", "CA", "SG"],
    },
    line_items: transformedItems,
    mode: "payement",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
};
