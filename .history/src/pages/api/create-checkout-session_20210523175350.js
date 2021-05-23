import { isResSent } from "next/dist/next-server/lib/utils";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async (req, res) => {
  const { items, email } = req.body;
  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 2000,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    shipping_rates: ["shr_1IuBsbKjQ7xFphR55syCNNMl"],
    payment_method_types: ["card, ideal, fpx, bacs_debit"],
    shipping_address_collection: {
      allowed_countries: ["US", "GB", "CA", "IN", "BD"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
};
