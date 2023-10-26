import { useLocation } from 'react-router-dom';

export const useQuery = (key) => {
	let hookQuery = new URLSearchParams(useLocation().search)

	return hookQuery.get(key)
};

