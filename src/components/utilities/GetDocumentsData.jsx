import axios from "axios";
import { EditorState, convertFromRaw } from "draft-js";

const API_URL = "http://localhost:5005";

// Helper function to parse JSON and extract documentTitle
const parseDocumentTitle = (title) => {
  try {
    const parsed = JSON.parse(title);
    return parsed.documentTitle || title;
  } catch (error) {
    console.error("Invalid JSON:", title);
    return title; // Fallback to the original title if parsing fails
  }
};




// GET ALL / READ ALL
export const getAllDocuments = async (setDocuments) => {
  try {
    const response = await axios.get(`${API_URL}/documents/`);
    const documents = response.data.map(doc => {
    const title = parseDocumentTitle(doc.title);
    let content = EditorState.createEmpty();

      try {
        const rawContent = JSON.parse(doc.content);
        content = EditorState.createWithContent(convertFromRaw(rawContent));
      } catch (e) {
        console.error("Invalid content JSON:", doc.content);
      }

      return { ...doc, title, content };
    });
    setDocuments(documents);
    console.log("Successfully got all data", documents);
  } catch (error) {
    console.log("Error receiving all data", error);
    throw error;
  }
};