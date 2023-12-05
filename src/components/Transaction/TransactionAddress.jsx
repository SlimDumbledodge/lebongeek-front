import './TransactionAddress.scss';

const TransactionAddress = () => {
  return (
    <div className="transaction__address__container">
      <div className="transaction__address__input__container">
        <label htmlFor="transaction__country__label">Pays</label>
        <select name="countrySelect" id="transaction__country__select">
          <option className="transaction__country__choice" value="">
            Choisissez...
          </option>
          <option className="transaction__country__choice" value="france">
            France
          </option>
        </select>
      </div>

      <div className="transaction__address__input__container">
        <label htmlFor="transaction__street__label">Voie</label>
        <select name="streetSelect" id="transaction__street__select">
          <option className="transaction__street__choice" value="">
            Choisissez...
          </option>
          <option className="transaction__street__choice" value="rue">
            Rue
          </option>
        </select>
      </div>

      <div className="transaction__address__input__container">
        <label htmlFor="transaction__postalcode__label">Code postal</label>
        <input
          className="transaction__postalcode__input"
          type="text"
          placeholder="34000"
        />
      </div>

      <div className="transaction__address__input__container">
        <label htmlFor="transaction__streetnumber__label">N° de voie</label>
        <input
          className="transaction__streetnumber__input"
          type="text"
          placeholder="85"
        />
      </div>

      <div className="transaction__address__input__container">
        <label htmlFor="transaction__streetname__label">Nom de voie</label>
        <input
          className="transaction__streetname__input"
          type="text"
          placeholder="Saint-Exupéry"
        />
      </div>

      <div className="transaction__address__input__container">
        <label htmlFor="transaction__city__label">Ville</label>
        <input
          className="transaction__city__input"
          type="text"
          placeholder="Montpellier"
        />
      </div>
    </div>
  );
};

export default TransactionAddress;
