import axios from 'axios';

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: {data},
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : '25.15543993776612',
          tr_latitude: tr_lat ? tr_lat : '25.41257834546226',
          bl_longitude: bl_lng ? bl_lng : '51.39587210719369',
          tr_longitude: tr_lng ? tr_lng : '51.62812119686502',
          limit: '30',
          currency: 'USD',
          lang: 'en_US',
          lunit: 'km',
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
        },
      },
    );

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
