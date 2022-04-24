import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useState} from "react";
import {joiResolver} from  "@hookform/resolvers/joi"
import {carValidator} from "../../validators";


const CarForm = ({setNewCar}) => {
    const [formError, setFormError] = useState({})
    const {register, reset, handleSubmit, formState:{errors}} = useForm({resolver:joiResolver(carValidator,
            "onTouched")});

    const submit = async (car) => {
        try {
            const {data} = await carService.create(car);
            setNewCar(data)
            reset()

        } catch (e) {
            setFormError(e.response.data)

        }

        return (
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model:<input type="text" {...register('Model')}/></label></div>
                {errors.model && <span>{errors.model.messege}</span>}

                <div><label>Price:<input type="text" {...register('Price', {valueAsNumber: true})}/></label></div>
                {errors.price && <span>{errors.price.messege}</span>}


                <div><label>Year:<input type="text" {...register('Year', {valueAsNumber: true})}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}

                <button>Save</button>
            </form>
        );

    };
}

export {CarForm}