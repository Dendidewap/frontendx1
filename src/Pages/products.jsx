import Button from "../Components/Element/Button";
import CardProduct from "../Components/Fragment/CardProduct";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      image: "/images/sepatu01.jpg",
      title: "Sepatu Nike Boost",
      desc: "Sepatu nike ini adalah sepatu limited dengan kolaborasi dari luis vuitton. Sepatu nike ini adalah sepatu limited dengan kolaborasi dari luis vuitton...",
      price: "Rp.1.000.000",
    },
    {
      id: 2,
      image: "/images/sepatu02.jpg",
      title: "Sepatu Nike Ultra Boost",
      desc: "Sepatu nike ini adalah sepatu limited dengan kolaborasi dari jordan. Sepatu nike ini adalah sepatu limited dengan kolaborasi dari jordan...",
      price: "Rp.1.500.000",
    },
  ];

  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.title} desc={product.desc} />
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
