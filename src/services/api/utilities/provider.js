import axios from 'axios'; 
import { handleResponse, handleError } from './response'; 
import config from '../../../config/app-config';
import { bearerToken } from '../../../helpers/authHelper';

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
const BASE_URL = config.API_BASE_URL;

const getAll = (resource, requestConfig) => {
  requestConfig = {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
      ...requestConfig?.headers
    },
    ...requestConfig
  };
  return axios 
    .get(`${BASE_URL}/${resource}`, requestConfig) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

const getCount = (resource, requestConfig) => {
  requestConfig = {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
      ...requestConfig?.headers
    },
    ...requestConfig
  };
  return axios 
    .get(`${BASE_URL}/${resource}/count`, requestConfig) 
    .then(handleResponse) 
    .catch(handleError); 
};

const getById = (resource, id, requestConfig) => { 
  requestConfig = {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
      ...requestConfig?.headers
    },
    ...requestConfig
  };
  return axios 
    .get(`${BASE_URL}/${resource}/${id}`, requestConfig) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

const get = (resource, requestConfig) => { 
  requestConfig = {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
      ...requestConfig?.headers
    },
    ...requestConfig
  };
  return axios 
    .get(`${BASE_URL}/${resource}`, requestConfig) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

const post = (resource, requestConfig) => { 
  requestConfig = {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'multipart/form-data',
      ...requestConfig?.headers
    },
    ...requestConfig
  };
  return axios 
    .post(`${BASE_URL}/${resource}`, requestConfig) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

const put = (resource, id, requestConfig) => { 
  requestConfig = {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'multipart/form-data',
      ...requestConfig?.headers
    },
    ...requestConfig
  };
  return axios 
    .put(`${BASE_URL}/${resource}/${id}`, requestConfig) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

const patch = (resource, id, requestConfig) => { 
  requestConfig = {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'multipart/form-data',
      ...requestConfig?.headers
    },
    ...requestConfig
  };
  return axios 
    .patch(`${BASE_URL}/${resource}/${id}`, requestConfig) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

const remove = (resource, id, requestConfig) => { 
  requestConfig = {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
      ...requestConfig?.headers
    },
    ...requestConfig
  };
  return axios 
    .delete(`${BASE_URL}/${resource}/${id}`, requestConfig) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

const apiProvider = { 
  getAll, 
  getById, 
  getCount,
  post, 
  put, 
  patch, 
  remove, 
  get
};

export default apiProvider;