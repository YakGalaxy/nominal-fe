import { useEffect, useState } from 'react'
import axios from 'axios'


const API_URL = "http://localhost:5005";

// GET / READ
 
function getDocumentData() {

    const { docId } = useParams();

    useEffect(() => {
            
        const getOneDocument = async () => {

            try {

                const response = await axios.get(
                  `${API_URL}/documents/:id`
                );

                setDocument(response.data);
                console.log("Successfully got data", response);

            } catch (error) {

                console.log("Error receiving data", error);
            }

        };

        getOneDocument();
    }, [docId]);
}
          
// POST / CREATE OR EDIT?

function postDocumentData() {

    const postOneDocument = async (event) => {

        event.preventDefault();

        const newDocument = {
            id: 'id',
            title: 'title',
            description: 'description',
            content: 'content'
        };

        try {
        
            const response = await axios.post(
              `${API_URL}/documents/:id`,
              newDocument
            );

            console.log("Successfully posted data", response);

        } catch (error) {
            
            console.log("Error posting data", error);

        }

    }; 

}     

// DELETE / DELETE

function deleteDocumentData() {

    const deleteOneDocument = async () => {
            
          try {
            const response = await axios.delete(
              `${API_URL}/documents/:id`
            );
            console.log("Document deleted successfully:", response.data);
          } catch (error) {
            console.log("Error deleting document", error);
          }
        };
    
}