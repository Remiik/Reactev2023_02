import React, { useContext } from 'react';
//On importe le product context, les produits à partir de l'API et le hero
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  //On récupère les produits du product context
  const { products } = useContext(ProductContext);
  //On récupère uniquement les produits masculins, féminins & les bijoux
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing" ||
      item.category === 'jewelery'
    );
  });
  return (
    <div>
      {/*Le hero est placé au-dessus des cases pour les produits */}
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
