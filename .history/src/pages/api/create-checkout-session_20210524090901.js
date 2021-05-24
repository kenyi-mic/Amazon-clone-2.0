import { useSession } from "next/auth-client";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async (req, res) => {
  const [session] = useSession();
  const { items, email } = req.body;
  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  session = await stripe.checkout.sessions.create({
    shipping_rates: ["shr_1IuSl6B9JIM1sqmfCMEFcleC"],
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "GB", "CA", "IN"],
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
