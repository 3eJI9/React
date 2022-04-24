import {CarForm, Cars} from "./components/";
import {useState} from "react"
const App = () => {
    const [newCar, setNewCar] =  useState(null);
   const [userForUpdate, setUserForUpdate] =useState(null)




    return (
        <div>
        <CarForm setNewCar={setNewCar} userForUpdate={userForUpdate}/>

          <hr/>
        <Cars newCar={newCar} setUserForUpdate={setUserForUpdate}/>
        </div>
    );

};

export default App;
