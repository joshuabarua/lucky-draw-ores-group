// import React, {useState} from 'react';
// import {db} from './store/firebase';
// import {useHistory} from 'react-router-dom';

// const Form = () => {
// 	const [name, setName] = useState('');
// 	const [country, setCountry] = useState('');
// 	const history = useHistory();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		await db.collection('participants').add({name, country});
// 		history.push('/participants');
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
// 			<TextField label="Country of Origin" value={country} onChange={(e) => setCountry(e.target.value)} required />
// 			<Button type="submit" variant="contained" color="primary">
// 				Submit
// 			</Button>
// 		</form>
// 	);
// };

// export default Form;
