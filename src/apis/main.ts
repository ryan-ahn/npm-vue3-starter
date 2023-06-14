import axios from 'axios';

export const getMockDataApi = async () => {
  try {
    const Response = await axios.get('/mock.json');
    return Response.data;
  } catch (e) {
    const err = new Error(e as never);
    throw err;
  }
};
