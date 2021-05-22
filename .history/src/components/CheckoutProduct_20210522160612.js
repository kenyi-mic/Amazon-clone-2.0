import Image from "next/image";

function CheckoutProduct({id,
    title,
    price,
    rating,
    description,
    image,
    hasPrime,
}) {
    

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain"/>
           {/*Middle */}
           <div className="col-span-3 mx-5">
             <p>{title}</p>
           </div>
          <div className="flex">
              {Array(rating)}.fill().map((-, i) =>(
                  <StarIcon key ={i} className="h-5 text-yellow-500"/>
              ))
          </div>
        </div>
    )
}

export default CheckoutProduct
