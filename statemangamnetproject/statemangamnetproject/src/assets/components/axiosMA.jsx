import axios from 'axios';

const SERVER_URL = 'http://localhost:8080'; // Adjust the server URL as per your setup

const addUserDetails = async (userDetails) => {
  try {
    const response = await axios.post(`${SERVER_URL}/users/register`, userDetails);
    console.log('User details added successfully:', response.data);
    // Handle the response as needed
    return response.data;
  } catch (error) {
    console.error('Error adding user details:', error);
    throw error;
  }
};

export default addUserDetails;
