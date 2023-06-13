import ProductCard from './ProductCard';

const ProductsList = ({ data, index }) => {
  return (
    <>
      {data?.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </>
  );
};

export default ProductsList;
