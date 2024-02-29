import Button from "../Elemtnts/Button";

const Cardproduct = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image } = props;
  return (
    <a href="#" className="">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-m text-white mt-2">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600">Add To Card</Button>
    </div>
  );
};

Cardproduct.Header = Header;
Cardproduct.Body = Body;
Cardproduct.Footer = Footer;

export default Cardproduct;
