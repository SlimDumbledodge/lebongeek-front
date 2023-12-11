import React, { useEffect, useState } from 'react';
import './Inventory.scss';
import axios from 'axios';

const Inventory = () => {
  const [userProducts, setUserProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const endPoint = 'http://matthieu-le-floch.vpnuser.lan:8080/api/get_user';

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await axios.get(`${endPoint}`);

        if (response.data.products && response.data.products.length > 0) {
          setUserProducts(response.data.products);
        }

        setLoading(false);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des produits de l'utilisateur : ",
          error
        );
        setLoading(false);
      }
    };

    fetchUserProducts();
  }, []);

  if (loading) {
    return (
      <section className="hub__inventory">
        <h2 className="hub__inventory__title">INVENTAIRE</h2>
        <div className="hub__grid__wrapper">
          <p>Chargement...</p>
        </div>
      </section>
    );
  }

  if (userProducts.length === 0) {
    return (
      <section className="hub__inventory">
        <h2 className="hub__inventory__title">INVENTAIRE</h2>
        <div className="hub__grid__wrapper">
          <p>Votre inventaire est vide!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="hub__inventory">
      <h2 className="hub__inventory__title">INVENTAIRE</h2>
      <div className="hub__grid__wrapper">
        {userProducts.map((product) => (
          <div key={product.id} className="hub__inventory__item">
            <img src={product.picture} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inventory;
