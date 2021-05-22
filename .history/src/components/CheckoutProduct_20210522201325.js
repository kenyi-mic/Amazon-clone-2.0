import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";

function CheckoutProduct({ id, title, price, description, category, image }) {
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
      </div>
    </div>
  );
}

export default CheckoutProduct;
