import axios from "axios";

export default class AuthService {
	constructor() {
		let service = axios.create({
			baseURL: "http://localhost:5005/auth",
			// withCredentials: true,
		});

		this.service = service;
	}

	login(userCreds) {
		return this.service.post("/login", userCreds).then((resp) => resp.data);
	}

	verifyUser(authToken) {
		return this.service
			.post("/verify", { authorizion: authToken })
			.then((resp) => resp.data);
	}
}
