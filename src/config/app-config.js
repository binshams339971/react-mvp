import env from "react-dotenv";

const API_BASE_URL = env.API_BASE_URL || 'https://apimvp.deepchainlabs.com/api/v1';

let config = {
    API_BASE_URL
}
export default config;