import sendRequest from "./sendRequest";
const baseURL = "/categories/"

export async function index() {
    return sendRequest(baseURL)
}

export async function update(formData, categoryId) {
    return sendRequest(`${baseURL}${categoryId}/`, "PUT", formData)
}