import CardProduct from "../components/Fragments/CardProduct";

const Products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp. 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis eius molestiae dolores exercitationem ipsam a dolor fuga corporis odio?`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp. 500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Nike",
    price: "Rp. 700.000",
    image: "/images/shoes-1.jpg",
    description: `Ini adalah sepatu baru dari brand NIKE`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {Products.map((product) => (
        // eslint-disable-next-line react/jsx-key
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
