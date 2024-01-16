import axios from 'axios';
import Cookies from 'js-cookie';
import { SEND_EDITAD } from '../actions/editAd';
import baseUrl from '../assets/baseUrl';

/* import {
  openFailedMessage,
  openSuccessFullMessage,
} from '../actions/popupMessages'; */

const editAdMiddelware = (store) => (next) => (action) => {
  const formData = store.getState().editAd.editAdImage;

  switch (action.type) {
    case SEND_EDITAD: {
      const { productIdReceived, adId } = action;
      console.log(store.getState().editAd.editAdProductPhoto);
      axios
        .put(
          `${baseUrl}/api/${productIdReceived}/products`,
          {
            title: store.getState().editAd.editAdProductTitle,
            picture: '',
            year: store.getState().editAd.editAdYear,
            serial_number: store.getState().editAd.editAdSerialNumber,
            category: {
              id: store.getState().editAd.editAdCategory,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          axios
            .post(
              `${baseUrl}/api/${productIdReceived}/product/picture`,
              {
                picture: formData,
              },
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  Authorization: `Bearer ${Cookies.get('token')}`,
                },
              }
            )
            .then((secondResponse) => {
              console.log(secondResponse);

              axios
                .put(
                  `${baseUrl}/api/${adId}/ads`,
                  {
                    description: store.getState().editAd.editAdDescription,
                    title: store.getState().editAd.editAdTitle,
                    price: store.getState().editAd.editAdPrice * 1,
                    state: store.getState().editAd.editAdState,
                    location: store.getState().editAd.editAdLocation,
                    productId: productIdReceived,
                    category: {
                      id: store.getState().editAd.editAdCategory,
                    },
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${Cookies.get('token')}`,
                    },
                  }
                )
                .then((thirdResponse) => {
                  console.log(thirdResponse);
                  // store.dispatch(openSuccessFullMessage());
                  window.location.href = '/hub';
                })
                .catch((error) => {
                  console.warn(error);
                });
            })
            .catch((error) => {
              console.warn(error);
            });
        })
        .catch((error) => {
          console.warn(error);
          // store.dispatch(openFailedMessage());
        });
      break;
    }

    default:
      break;
  }

  next(action);
};

export default editAdMiddelware;
