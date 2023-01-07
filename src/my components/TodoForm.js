import React, {
    useState,
    useEffect,
    useRef
} from 'react';

export default function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    //avoir un curseur sur le textfield de class todo-input au moment du chargement de la page
    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return ( <form 
                onSubmit = {handleSubmit}className = 'todo-form' > {
            /* afficher les tâches modifiées si bouton edit cliquée sinon afficher le form d'ajout normal*/ }

        {
props.edit ? ( 
      <>
                <input placeholder = 'Modifier votre tâche'
                value = {input}
                onChange = {handleChange}
                name = 'text'
                ref = {inputRef}
                className = 'todo-input edit' />
                <button onClick = {handleSubmit}
                        className = 'todo-button edit' >
                Modifier la tâche 
                </button>  
                </>
            ) : ( 
              <>
                <input placeholder = 'Écrivez une tâche'
                value = {
                    input}
                onChange = {
                    handleChange}
                name = 'text'
                className = 'todo-input'
                ref = {
                    inputRef
                }
                />  
                <button onClick = {handleSubmit}
                        className = 'todo-button' >
                    Ajouter la tâche
                 </button>  
                </>
            )
        } </form>
    );
}