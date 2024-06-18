import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

// GET / READ
export const getDocumentData = (docId) => {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const getOneDocument = async () => {
      try {
        const response = await axios.get(`${API_URL}/documents/${docId}`);
        setDocument(response.data);
        console.log("Successfully got data", response);
      } catch (error) {
        console.log("Error receiving data", error);
      }
    };

    getOneDocument();
  }, [docId]);

  return document;
};

// POST / CREATE OR EDIT
export const postDocumentData = async (newDocument) => {
  try {
    const response = await axios.post(
      `${API_URL}/documents/`,
      newDocument
    );
    console.log("Successfully posted data", response);
    return response.data;
  } catch (error) {
    console.log("Error posting data", error);
    throw error;
  }
};

