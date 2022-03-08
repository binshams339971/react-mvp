import jwt_decode from "jwt-decode";

export const bearerToken = JSON.parse(localStorage.getItem('logged_in_info')) ? JSON.parse(localStorage.getItem('logged_in_info')).bearerToken : null;
export const login = (data) => {
    localStorage.setItem('logged_in_info', JSON.stringify(data));
};
export const logout = () => {
    localStorage.removeItem('logged_in_info');
};
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('logged_in_info')) ? JSON.parse(localStorage.getItem('logged_in_info')).user : null

};
export const isLoggedIn = () => {
    const logged_in_info = JSON.parse(localStorage.getItem('logged_in_info'));
    if (logged_in_info) {
        return true;
    } else {
        return false;
    }
};
export const isValidSession = () => {
    const logged_in_info = JSON.parse(localStorage.getItem('logged_in_info'));
    if (logged_in_info) {
        const decodedJwt = jwt_decode(logged_in_info.bearerToken);
        if (decodedJwt.exp * 1000 < Date.now()) {
            return false;
        } else {
            return true;
        }
    }
};
