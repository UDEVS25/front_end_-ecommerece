
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: "Sofa", price: "$1200", description: "A comfortable sofa.", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Chair", price: "$300", description: "A stylish chair.", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Table", price: "$500", description: "A sturdy table.", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Lamp", price: "$150", description: "A modern lamp.", image: "https://via.placeholder.com/300" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container mx-auto py-16">
      <div className="flex space-x-6">
        <img src={product.image} alt={product.name} className="w-1/2" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <p className="text-yellow-500 text-xl mt-4">{product.price}</p>
          <button className="bg-yellow-500 text-white py-2 px-4 mt-4 rounded hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
