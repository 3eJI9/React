import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionsCat} from "../Redux";

export const CatsForm = () => {
    const [name, setName] = useState ('')
    const {catForUpdate} = useSelector (({cats}) => cats)
    const dispatch = useDispatch ();
    useEffect (() => {
        if (catForUpdate) {
            setName (catForUpdate.name)
        }
    }, [catForUpdate]);
    const save = () => {
        if (catForUpdate) {
            dispatch (actionsCat.updateCat ({name, id: catForUpdate.id}))
        } else {
            dispatch (actionsCat.addCat ({name}))
        }
        dispatch (actionsCat.addCat ({name}))
        setName ('');

    }
    return (
        <div>
            <label>Cat Name : <input type="text"
                                     onChange={({target}) => setName (target.value)}
                                     value={name}/></label>
            <button className={'btn1'} onClick={save}>Save</button>

        </div>
    );

}