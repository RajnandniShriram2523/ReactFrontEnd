import axios from "axios";

class Contactservice {
    saveContact(contData){
        let promise=axios.post("http://localhost:4000/addcategory",contData);
        return promise;
    }
    saveContact(contData){
        let promise=axios.post("http://localhost:4000/addcategory",contData);
        return promise;
    }
    
}
export default new Contactservice();