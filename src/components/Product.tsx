import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

interface Props {
  product: {
    id: string;
    image: string;
    category: string;
    title: string;
    price: number;
    name: string;
    amount: number;
  };
}

const Product: React.FC<Props> = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justifiy-center items-center'>
          {/* image du produit */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[160px] group-hover:scale-125 transition duration-300'
              src={image}
              alt=''
            />
          </div>
          {/* boutons visibles quand on hover sur le produit */}
          <div className='absolute top-6 -left-11 group-hover:left-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            {/* Bouton pour ajouter au panier */}
            <button onClick={() => addToCart(product, id)}>
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                <BsPlus className='text-3xl' />
              </div>
            </button>
            {/* Bouton pour visualiser le produit en détail */}
            <Link
              to={`/product/${id}`}
              className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/* Lien pour visualiser le produit en détail quand on clique sur sa description */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>{price}€ </div>
      </div>
    </div>
  );
};

export default Product;
