import React, { createContext, useState, useEffect } from 'react';

//On créé le contexte
export const ProductContext = createContext<{ products: any[] }>({ products: [] });

//Sert à récupérer les produits
const ProductProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  //State des produits
  const [products, setProducts] = useState<any[]>([]);

  // On fetch les produits à partir d'une fausse API qui nous renvoie des articles avec des valeurs comme prix, description, id, ...
  useEffect(() => {
    const fetchProducts = async ()=> {
      const response = await fetch ('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
