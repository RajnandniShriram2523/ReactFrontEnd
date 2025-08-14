import axios from "axios";

class AddData {
    saveCategory(addcategory){
        let promise=axios.post("http://localhost:4000/addcategory",addcategory);
        return promise;
    }
    savebook(addbook){
        let promise=axios.post("http://localhost:4000/addbook",addbook);
        return promise;
    }
    savestudent(addstudent){
        let promise=axios.post("http://localhost:4000/adduser",addstudent);
        return promise;
    }
    saveviewCategory(viewcategory){
        let promise=axios.get("http://localhost:4000/viewcategory",viewcategory);
        return promise;
    }
    
}
export default new AddData();




