import { useState } from "react"


const DocTabs = () => {
const [activeDocs, setActiveDocs]= useState();



    return(
        <div>
            <ul>
                <li>Doc1</li>
                <li>Doc2</li>
                <li>Doc3</li>
            </ul>
        </div>
    )
}


export default DocTabs