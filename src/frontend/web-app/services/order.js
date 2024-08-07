import axios from "axios";

class OrderService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://localhost:44349/api/order",
      headers: {
        "Content-Type": "application/json",
        // Add any other required headers
      },
    });
  }

  async createData(data) {
    try {
      const response = await this.api.post("add", data);
      return response.data;
    } catch (error) {
      throw new Error("Error creating data:", error);
    }
  }

  async updateData(id, updatedData) {
    try {
      const response = await this.api.put(`endpoint/${id}`, updatedData);
      return response.data;
    } catch (error) {
      throw new Error("Error updating data:", error);
    }
  }

  async deleteData(id) {
    try {
      const response = await this.api.delete(`endpoint/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Error deleting data:", error);
    }
  }

  async getAll() {
    try {
      const response = await this.api.get(`getall`);
      return response.data;
    } catch (error) {
      throw new Error("Error GetAll data:", error);
    }
  }

  async getLastId() {
    try {
      const response = await this.api.get(`GetLastId`);
      return response.data;
    } catch (error) {
      throw new Error("Error GetAll data:", error);
    }
  }
}

export default OrderService;
