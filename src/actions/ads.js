export const ADS_FILTER = 'ADS_FILTER';
export const FETCH_ADS_CATEGORIES = 'FETCH_ADS_CATEGORIES';
export const SAVE_ADS_CATEGORIES = 'SAVE_ADS_CATEGORIES';
export const FETCH_AD = 'FETCH_AD';
export const SAVE_AD = 'SAVE_AD';
export const AD_LOADED = 'AD_LOADED';
export const DELETE_AD = 'DELETE_AD';

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

export const fetchAd = (id) => ({
  type: FETCH_AD,
  id,
});

export const saveAd = (ad) => ({
  type: SAVE_AD,
  ad,
});

export const adLoaded = () => ({
  type: AD_LOADED,
});

export const deleteAd = (id) => ({
  type: DELETE_AD,
  id,
});
