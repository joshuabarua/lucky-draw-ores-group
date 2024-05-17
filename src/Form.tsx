import React, {useState} from 'react';
import {db} from './store/firebase';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore';

const Form = () => {
	const [name, setName] = useState('');
	const [country, setCountry] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		await addDoc(collection(db, 'lucky-draw'), {name, country});
		navigate('/');
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
			<TextField label="Country of Origin" value={country} onChange={(e) => setCountry(e.target.value)} required />
			<Button type="submit" variant="contained" color="primary">
				Submit
			</Button>
		</form>
	);
};

export default Form;
