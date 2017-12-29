// Imports
import firebase from 'firebase';
import axios from 'axios';

// Global Variables

firebase.initializeApp({
	servKey: 'hackcoin-new-aa387a36685d.json',
	databaseURL: 'https://hackcoin-new.firebaseio.com/'
});

// REF API URI

const cmcDB = 'https://hackcoin-new.firebaseio.com/cmc.json';

// Helpers

const cmc_all = axios.get(cmcDB).then(res => {
	const Values = Object.values(res.data);

	return Promise.all(Values);
});

// Schema

export default {
	Query: {
		allcmc: () => cmc_all
	}
};
