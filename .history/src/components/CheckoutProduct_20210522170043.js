import Image from "next/image";
import Currency from "react-currency-formatter"
import StarIcon from "@heroicons/react"
import {addToBasket, removeFromBasket} from "../slices/basketSlice"

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    image,
    hasPrime,
}) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
           id,
           title,
           price,
           rating,
           description,
           image,
           hasPrime,
        };
        //push item into redux store
        dispatch(addToBasket(product));
    };

    return (
        <div className="grid grid-cols-5">
            < Image src={image} height={200} width={200} objectFit="contain"/>
           {/*Middle */}
           <div className="col-span-3 mx-5">
             <p>{title}</p>
           </div>
           <div className="flex">
           {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key = {i} className="h-5 text-yellow-500" />
          ))}
          </div>
          <p className="text-xs my-2 line-clamp-3">{description}</p>
          <Currency quantity={price} currence = "USD"/>
          {hasPrime && (
              <div className="flex items-center space-x-2">
                  <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
                  <p className="text-xs text-gray-500"> FREE Next day Delivery</p>
              </div>
          )}
            {/* Right add/remove button */}
       <div>
       <button className="button" onclick={addItemToBasket}>Add to Basket</button>
       <button className="button">Remove from Basket</button>
     </div>
</div>


    );
    
}

export default CheckoutProduct
