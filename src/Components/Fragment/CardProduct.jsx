import Button from "../Element/Button";
const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="products" className="p-8 rounded-t-lg" />
    </a>
  );
};
const Body = (props) => {
  const { title, desc } = props;
  return (
    <div className="px-5 pb-5 ">
      <a href="">
        <h5 className="text-2xl font-semibold text-white tracking-tight mb-5 ">
          {title}
        </h5>
        <p className="text-xs text-white">{desc}</p>
      </a>
    </div>
  );
};
const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600" title="Add to cart" />
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
