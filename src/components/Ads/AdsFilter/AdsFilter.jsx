import './AdsFilter.scss';

import AdsFilterCheckbox from './AdsFilterCheckbox';

const AdsFilter = () => {
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
    <div className="ads__filter_container">
      <p className="ads__filter__title">Catégories</p>
      <div className="ads__filter__checkbox__container">
        {list.map((category) => (
          <AdsFilterCheckbox key={category} title={category} />
        ))}
      </div>
    </div>
  );
};

export default AdsFilter;
