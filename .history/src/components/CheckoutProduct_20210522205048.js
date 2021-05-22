import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  hasPrime,
  image,
}) {
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} alt="" />
      {/* middle*/}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next Day Delivery</p>
          </div>
        )}
      </div>
      {/* add and remove buttons*/}
      <div>
        <button onClick={addItemToBasket} className="button">
          Add to Cart
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Renove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
