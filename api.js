let current = 'http://localhost/testing/react/spa/api';

const api = {
	get : `${current}/get.php`,
	update : `${current}/update.php?id=`,
	store : `${current}/store.php`,
	delete: `${current}/delete.php?id=`
};

export default api