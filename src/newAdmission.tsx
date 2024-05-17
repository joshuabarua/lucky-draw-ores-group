import React, {useState} from 'react';
import {db} from './store/firebase';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore';
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from './components/ui/form';
import {useForm} from 'react-hook-form';
import {Button} from './components/ui/button';
import {Input} from './components/ui/input';
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from '@radix-ui/react-select';
import * as countries from './assets/data/countries.json';

const NewAdmission = () => {
	const [name, setName] = useState('');
	const [country, setCountry] = useState('');
	const form = useForm();
	const navigate = useNavigate();

	console.log(countries);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		await addDoc(collection(db, 'lucky-draw'), {name, country});
		navigate('/');
	};

	return (
		<>
			{/* <form onSubmit={handleSubmit}>
				<TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
				<TextField label="Country of Origin" value={country} onChange={(e) => setCountry(e.target.value)} required />
				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</form> */}

			<FormField
				control={form.control}
				name="username"
				render={({field}) => (
					<>
						<FormItem>
							<FormLabel>Full Name</FormLabel>
							<FormControl>
								<Input placeholder="Carlos" {...field} />
							</FormControl>
							<FormDescription>This is your full name</FormDescription>
							<FormMessage />
						</FormItem>
						<FormItem>
							<FormLabel>Country of Origin</FormLabel>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Country of Origin" />
								</SelectTrigger>
								<SelectContent></SelectContent>
							</Select>
						</FormItem>
					</>
				)}
			/>
		</>
	);
};

export default NewAdmission;
