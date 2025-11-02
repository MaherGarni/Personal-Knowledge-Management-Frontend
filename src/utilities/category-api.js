import sendRequest from "./sendRequest";
const baseURL = "/categories/"

export async function index() {
    return sendRequest(baseURL)
}

export function create(formData){
	return sendRequest(`${baseURL}`, "POST", formData)
}

export async function update(formData, categoryId) {
    return sendRequest(`${baseURL}${categoryId}/`, "PUT", formData)
}

export async function deleteCategory(categoryId) {
    return sendRequest(`${baseURL}${categoryId}/`, "DELETE")
}
