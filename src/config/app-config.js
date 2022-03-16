import env from "react-dotenv";

const API_BASE_URL = 'http://mvp-api.deepchainlabs.com/api/v1';
const FILE_DRIVE = 'public';
const FILE_DRIVE_TYPE = 'remote';
const FILE_DRIVE_HOST = 'http://mvp-api.deepchainlabs.com';

let config = {
    API_BASE_URL,
    FILE_DRIVE,
    FILE_DRIVE_TYPE,
    FILE_DRIVE_HOST
}

export default config;