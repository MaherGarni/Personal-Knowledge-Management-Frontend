import sendRequest from "./sendRequest";
const baseURL = "/categories/"

export async function index() {
    return sendRequest(baseURL)
}