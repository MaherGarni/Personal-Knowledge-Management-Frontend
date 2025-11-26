import sendRequest from "./sendRequest"
const baseURL = "/dashboard/"

export async function index(params) {
    return sendRequest(baseURL)
}
