import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import './AdsFilter.scss';

import AdsFilterCheckbox from './AdsFilterCheckbox';

const AdsFilter = ({ type }) => {
  // TODO : mettre en place le state de isFilterOpen)
  const isFilterOpen = useSelector((state) => state.responsive.isMobile);

  const list = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
  ];

  return (
    <div className={`ads__filter_container__${type}`}>
      <p className={`ads__filter__title__${type}`}>Catégories</p>
      <div className={`ads__filter__checkbox__container__${type}`}>
        {list.map((category) => (
          <AdsFilterCheckbox key={category} title={category} system={type} />
        ))}
      </div>
      {isFilterOpen ? (
        <>
          <div className="ads__filter__open" />
          <button type="submit" className="ads__filter__open__button">
            Valider
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

AdsFilter.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AdsFilter;
