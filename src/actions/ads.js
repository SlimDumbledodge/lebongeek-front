export const ADS_FILTER = 'ADS_FILTER';
export const FETCH_ADS_CATEGORIES = 'FETCH_ADS_CATEGORIES';
export const SAVE_ADS_CATEGORIES = 'SAVE_ADS_CATEGORIES';

export const adsFilter = () => ({
  type: ADS_FILTER,
});

export const fetchAdsCategories = (id) => ({
  type: FETCH_ADS_CATEGORIES,
  id,
});

export const saveAdsCategories = (ads) => ({
  type: SAVE_ADS_CATEGORIES,
  ads,
});
