export function handleResponse(response) {
    if (response.results) {
        return response.results;
    }
    if (response.data) {
        return response.data;
    }
    return response;
}
  
export function handleError(error) {
    if (error.data) {
        throw error.data;
    }
    if(error.response){
        throw error.response;
    };
    throw error;
}