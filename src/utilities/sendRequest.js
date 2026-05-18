export default async function sendRequest(url, method = "GET", payload) {
	const token = localStorage.getItem('token');

	const options = { method };

	if (payload) {
		options.headers = { "Content-Type": "application/json" };
		options.body = JSON.stringify(payload);
	}

	if (token) {
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }

	try {
		const res = await fetch(`https://personal-knowledge-management-backend-production.up.railway.app${url}`, options);
		if (res.ok) return res.json();
	} catch (err) {
		console.log(err, "error send in request");
		return err;
	}
}
