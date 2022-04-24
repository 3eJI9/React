import {useForm} from "react-hook-form";
import {carService} from "../../services";



const CarForm = ({setNewCar}) => {
    const {register,reset,handleSubmit} = useForm();

    const submit = async (car) => {
       const {data} = await carService.create(car);
        setNewCar(data)
    reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text" {...register('Model')}/></label></div>
            <div><label>Price:<input type="text" {...register('Price', {valueAsNumber:true})}/></label></div>
            <div><label>Year:<input type="text" {...register('Year', {valueAsNumber:true})}/></label></div>
            <button>Save</button>
        </form>
    );

};

export {CarForm};