import {useReducer, useState} from 'react';


const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'addCat' :
            return {...state, cats: [...state.cats, {name: payload, id: Date.now ()}]}
        case 'deleteCat' :
            return {...state, cats: state.cats.filter (cat => cat.id !== payload)}

        case 'addDog' :
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now ()}]}
        case 'deleteDog' :
            return {...state, dogs: state.dogs.filter (dog => dog.id !== payload)}

        default :
            console.error ('Unknown type');
            return state;
    }
}

export const App = () => {
    const [state, dispatch] = useReducer (reducer, {cats: [], dogs: []});

    const [catValue, setCatValue] = useState ('');
    const [dogValue, setDogValue] = useState ('');

    const createCat = () => {
        dispatch ({type: 'addCat', payload: catValue});
        setCatValue ('');
    }

    const createDog = () => {
        dispatch ({type: 'addDog', payload: dogValue});
        setDogValue ('');
    }

    return (
        <div>
            <div style={{display:"flex",padding:"13px", background: 'red'}}>
                <div>
                    <label>Cat name : <input placeholder={'Введіть імя кота'} type="text"
                                             onChange={({target}) => setCatValue (target.value)}
                                             value={catValue}/></label>
                    <button style={{width: "111px", borderRadius: "5px", margin: "15px"}} onClick={createCat}>Save
                    </button>
                </div>
                <div>
                    <label>Dog name : <input placeholder={'Введіть імя собаки'} type="text"
                                             onChange={({target}) => setDogValue (target.value)}
                                             value={dogValue}/></label>
                    <button style={{width: "111px", borderRadius: "5px", margin: "15px"}} onClick={createDog}>Save
                    </button>
                </div>
            </div>

            <hr/>

            <div className={'header'}>
                <div>
                    {
                        state.cats.map (cat => (
                            <div key={cat.id}>
                                {cat.name}
                                <button onClick={() => dispatch ({type: 'deleteCat', payload: cat.id})}>delete</button>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        state.dogs.map (dog => (
                            <div key={dog.id}>
                                {dog.name}
                                <button onClick={() => dispatch ({type: 'deleteDog', payload: dog.id})}>delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default App;