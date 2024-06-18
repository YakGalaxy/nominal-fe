import axios from "axios";

const API_URL = "https://nominal-be.fly.dev:3000";
// http://localhost:5005

// DELETE / DELETE
export const deleteDocument = async (docId) => {
  try {
    const response = await axios.delete(`${API_URL}/documents/${docId}`);
    console.log("Document deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error deleting document", error);
    throw error;
  }
};