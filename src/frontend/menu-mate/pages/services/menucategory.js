import axios from 'axios';

class ApiHandler {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://localhost:44349/api/menucategory',
      headers: {
        'Content-Type': 'application/json',
        // Add any other required headers
      },
    });
  }

  async createData(data) {
    debugger
    try {
      const response = await this.api.post('',data);
      return response.data;
    } catch (error) {
      throw new Error('Error creating data:', error);
    }
  }

  async updateData(id, updatedData) {
    try {
      const response = await this.api.put(`endpoint/${id}`, updatedData);
      return response.data;
    } catch (error) {
      throw new Error('Error updating data:', error);
    }
  }

  async deleteData(id) {
    try {
      const response = await this.api.delete(`endpoint/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting data:', error);
    }
  }
}

export default ApiHandler;
