import { useState, useEffect, useCallback } from 'react';

export function useYeapQuery<T>(apiCall: Function, args?: { variables?: any, skip?: boolean }) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const func = useCallback(() => apiCall(args?.variables), []);
	
	const fetchData = useCallback(async () => {
		try {
			const response = await func();

			if (!response) {
				throw new Error('Network response was not ok');
			}

			setData(response as T);
		} catch (err: any) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError('There is something Wrong')
			}
		} finally {
			setLoading(false);
		}
	}, [apiCall, args?.skip]);

	useEffect(() => {
		// 如果 skip 为 true，则跳过数据获取
		if (args?.skip) return;

		fetchData();
	}, [func, args?.skip])

	return { data, loading, error, refetch: fetchData };
}
