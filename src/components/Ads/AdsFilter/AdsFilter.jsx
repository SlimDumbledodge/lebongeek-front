import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { adsFilter, fetchAdsCategories } from '../../../actions/ads';
import { saveCategoryNameAndSlug } from '../../../actions/category';

import './AdsFilter.scss';

import AdsFilterCheckbox from './AdsFilterCheckbox';

const AdsFilter = ({ type }) => {
  const dispatch = useDispatch();

  const isFilterOpen = useSelector((state) => state.ads.isAdsFilterOpen);
  const isMobile = useSelector((state) => state.responsive.isMobile);
  const categoriesListFromState = useSelector(
    (state) => state.category.listCategories
  );

  return (
    <>
      <div className={`ads__filter_container__${type}`}>
        <p className={`ads__filter__title__${type}`}>Catégories</p>
        <div className={`ads__filter__checkbox__container__${type}`}>
          {categoriesListFromState.map((category) => (
            <Link to={`/annonces/${category.slug}`} key={category.id}>
              <AdsFilterCheckbox
                key={category}
                title={category.name}
                system={type}
                onClickProp={() => {
                  dispatch(fetchAdsCategories(category.id));
                  dispatch(
                    saveCategoryNameAndSlug(category.name, category.slug)
                  );
                }}
              />
            </Link>
          ))}
        </div>
        {isFilterOpen && isMobile ? (
          <button
            type="button"
            className="ads__filter__validation__button"
            onClick={() => {
              dispatch(adsFilter());
            }}
          >
            Valider
          </button>
        ) : (
          ''
        )}
      </div>
      {isFilterOpen && isMobile ? <div className="ads__filter__opacity" /> : ''}
    </>
  );
};

AdsFilter.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AdsFilter;
