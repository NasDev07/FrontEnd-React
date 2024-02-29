import Cardproduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <Cardproduct>
        <Cardproduct.Header image="/images/shoes-1.jpg" />
        <Cardproduct.Body title="Sepatu baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab
          recusandae odit amet, quia consequatur eligendi illum deserunt quod
          tempora?
        </Cardproduct.Body>
        <Cardproduct.Footer price="Rp. 1.000.000" />
      </Cardproduct>

      <Cardproduct>
        <Cardproduct.Header image="/images/shoes-1.jpg" />
        <Cardproduct.Body title="Sepatu baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab
          recusandae odit amet, quia consequatur eligendi illum deserunt quod
          tempora?
        </Cardproduct.Body>
        <Cardproduct.Footer price="Rp. 1.000.000" />
      </Cardproduct>
    </div>
  );
};

export default ProductsPage;
