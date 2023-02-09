const removeFalsyValues = <T>(obj: Record<string, string>) => {
	return Object.entries(obj).reduce((acc, [key, value]) => {
		if (value) return { ...acc, [key]: value };
		return acc;
	}, {} as T);
};

export default removeFalsyValues;
