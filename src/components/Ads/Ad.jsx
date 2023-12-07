/* eslint-disable react/no-unescaped-entities */
const Ad = () => {
  return (
    <a href="/" className="ad">
      <img
        src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Une annonce"
        className="ad__image"
      />
      <p href="/" className="ad__title">
        Ceci est le titre de l'annonce - 40€
      </p>
    </a>
  );
};

export default Ad;
