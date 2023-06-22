import React, { useState } from 'react';
import { useEffect } from 'react';
// import firebase from 'firebase/app';


export function ToDoApp2() {
	const [items, setItems] = useState([]); // useState to store the to-do items
	// const router = useRouter();

	// initialize Firebase
	if (!firebase.apps.length) {
		firebase.initializeApp({
			apiKey: '<YOUR_API_KEY>',
			databaseURL: '<YOUR_DATABASE_URL>',
		});
	}

	// get a reference to the Firebase database
	// const database = firebase.database();
	const itemsRef = database.ref('items');

	// handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const input = form.querySelector('input');

		// add the new to-do item to the Firebase database
		itemsRef.push({
			text: input.value,
		});
		input.value = '';
	};

	// handle item removal
	const handleRemove = (itemId) => {
		// remove the item from the Firebase database
		itemsRef.child(itemId).remove();
	};

	// useEffect to fetch the to-do items from the Firebase database
	useEffect(() => {
		itemsRef.on('value', (snapshot) => {
			const items = snapshot.val();
			const newItems = [];
			for (let item in items) {
				newItems.push({
					id: item,
					text: items[item].text,
				});
			}
			setItems(newItems);
		});
	}, []);

	return (
		<div>
			<h1>To-Do App</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Add a new item' />
				<button type='submit'>Add</button>
			</form>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.text}
						<button type='button' onClick={() => handleRemove(item.id)}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

// @ts-nocheck

// import React, { useState } from 'react'
import { useRouter } from 'next/router'

function ToDoApp () {
    const [ items, setItems ] = useState( [] ) // useState to store the to-do items
    const router = useRouter()

    // handle form submission
    const handleSubmit = ( event ) => {
        event.preventDefault()
        const form = event.target
        const input = form.querySelector( 'input' )

        // add the new to-do item to the array of items
        setItems( [ ...items, input.value ] )
        input.value = ''
    }

    // handle item removal
    const handleRemove = ( index ) => {
        // create a new array without the item at the specified index
        const newItems = items.filter( ( item, i ) => i !== index )
        setItems( newItems )
    }

    return (
        <div>
            <h1>To-Do App</h1>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Add a new item" />
                <button type="submit">Add</button>
            </form>
            <ul>
                { items.map( ( item, index ) => (
                    <li key={ index }>
                        { item }
                        <button type="button" onClick={ () => handleRemove( index ) }>
                            Remove
                        </button>
                    </li>
                ) ) }
            </ul>
        </div>
    )
}

export default ToDoApp


// import React, { useState } from 'react'
// import { useRouter } from 'next/router'
import firebase from 'firebase/app'
import 'firebase/database'

export function ToDoApp22 () {
    const [ items, setItems ] = useState( [] ) // useState to store the to-do items
    const router = useRouter()

    // initialize Firebase
    if ( !firebase.apps.length ) {
        firebase.initializeApp( {
            apiKey: '<YOUR_API_KEY>',
            databaseURL: '<YOUR_DATABASE_URL>'
        } )
    }

    // get a reference to the Firebase database
    const database = firebase.database()
    const itemsRef = database.ref( 'items' )

    // handle form submission
    const handleSubmit = ( event ) => {
        event.preventDefault()
        const form = event.target
        const input = form.querySelector( 'input' )

        // add the new to-do item to the Firebase database
        itemsRef.push( {
            text: input.value
        } )
        input.value = ''
    }

    // handle item removal
    const handleRemove = ( itemId ) => {
        // remove the item from the Firebase database
        itemsRef.child( itemId ).remove()
    }

    // useEffect to fetch the to-do items from the Firebase database
    useEffect( () => {
        itemsRef.on( 'value', ( snapshot ) => {
            const items = snapshot.val()
            const newItems = []
            for ( let item in items ) {
                newItems.push( {
                    id: item,
                    text: items[ item ].text
                } )
            }
            setItems( newItems )
        } )
    }, [] )

    return (
        <div>
            <h1>To-Do App</h1>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Add a new item" />
                <button type="submit">Add</button>
            </form>
            <ul>
                { items.map( ( item ) => (
                    <li key={ item.id }>
                        { item.text }
                        <button type="button" onClick={ () => handleRemove( item.id ) }>
                            Remove
                        </button>
                    </li>
                ) ) }
            </ul>
        </div>
    )
}

// export default ToDoApp