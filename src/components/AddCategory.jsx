import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChanged = (e) => {

        setInputValue(e.target.value);
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        const values=inputValue.trim();
        //*Aca ya tengo capturada la informacion respectiva
        if(values.length<=1)return;
        //setCategories((categories)=>[...categories,inputValue]);
        onNewCategory(values);
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChanged}
            />
        </form>
    );


};