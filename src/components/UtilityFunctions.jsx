import { useEffect, useState } from 'react'
import axios from 'axios'

// GET / READ
 
function getDocumentData() {

    const { docId } = useParams();

    useEffect(() => {
            
        const getOneDocument = async () => {

            try {

                const response = await axios.get('#');

                setDocument(response.data);

            } catch (error) {

                console.log(error);
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
            name: 'name',
            content: 'content'
        };

        try {
        
            const response = await axios.post('#', newDocument);

            console.log(response);

        } catch (error) {
            
            console.log(error);

        }

    }; 

}     

// DELETE / DELETE

function deleteDocumentData() {

    const deleteOneDocument = async () => {
            
          try {
            const response = await axios.delete("#");
            console.log("Document deleted successfully:", response.data);
          } catch (error) {
            console.log("Error deleting document", error);
          }
        };
    
}