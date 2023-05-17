import axios from 'axios';

const apiUserData = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/account/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        // set to local storage
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default apiUserData;