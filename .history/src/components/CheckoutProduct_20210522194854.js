function CheckoutProduct({ id, title, price, description, category, image }) {
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} weight={200} objectFit="contain" />
    </div>
  );
}

export default CheckoutProduct;
