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

export async function detail(categoryId) {
    return sendRequest(`${baseURL}${categoryId}/`)
}

export function createLesson(formData, categoryId){
    return sendRequest(`${baseURL}${categoryId}/lessons/`, "POST", formData)
}

export async function deleteLesson(categoryId, lessonId) {
    return sendRequest(`${baseURL}${categoryId}/lessons/${lessonId}/`, "DELETE")
}

export async function updateLesson(formData, categoryId, lessonId) {
    return sendRequest(`${baseURL}${categoryId}/lessons/${lessonId}/`, "PUT", formData)
}
