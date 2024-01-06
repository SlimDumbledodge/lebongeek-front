import './TransactionAddress.scss';

const TransactionAddress = () => {
  return (
    <div className="transaction__address__container">
      <div className="transaction__address__input__container">
        <label className="transaction__label" htmlFor="countryLabel">
          Pays
        </label>
        <select name="countrySelect" className="transaction__select" required>
          <option className="transaction__choice" value="">
            Choisissez...
          </option>
          <option className="transaction__choice" value="france">
            France
          </option>
        </select>
      </div>

      <div className="transaction__address__input__container">
        <label className="transaction__label" htmlFor="streetLabel">
          Voie
        </label>
        <select name="streetSelect" className="transaction__select" required>
          <option className="transaction__choice" value="">
            Choisissez...
          </option>
          <option className="transaction__choice" value="rue">
            Rue
          </option>
        </select>
      </div>

      <div className="transaction__address__input__container">
        <label className="transaction__label" htmlFor="postalCodeLabel">
          Code postal
        </label>
        <input
          className="transaction__input"
          type="text"
          placeholder="34000"
          required
        />
      </div>

      <div className="transaction__address__input__container">
        <label className="transaction__label" htmlFor="streetNumberLabel">
          N° de voie
        </label>
        <input
          className="transaction__input"
          type="text"
          placeholder="85"
          required
        />
      </div>

      <div className="transaction__address__input__container">
        <label className="transaction__label" htmlFor="numberStreetLabel">
          Nom de voie
        </label>
        <input
          className="transaction__input"
          type="text"
          placeholder="Saint-Exupéry"
          required
        />
      </div>

      <div className="transaction__address__input__container">
        <label className="transaction__label" htmlFor="cityLabel">
          Ville
        </label>
        <input
          className="transaction__input"
          type="text"
          placeholder="Montpellier"
          required
        />
      </div>
    </div>
  );
};

export default TransactionAddress;
