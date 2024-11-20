export default function cleanSet(Set, startString) {

	if (!startString || typeof startString !== "string") {
		return "";
	}

	const result = [];
	for (const value of set) {
		if (value && value.startsWith(startString)) {
			result.push(value.slice(startString.length));
		}
	}
	return result.join("-");
}
