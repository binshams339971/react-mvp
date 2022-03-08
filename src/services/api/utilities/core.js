import apiProvider from './provider';

export class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = (requestConfig) => {
        return apiProvider.getAll(options.url, requestConfig);
      };
    }

    if (options.getCount) {
      this.getCount = (requestConfig) => {
        return apiProvider.getCount(options.url, requestConfig);
      };
    }

    if (options.getById) {
      this.getById = (id, requestConfig) => {
        return apiProvider.getById(options.url, id, requestConfig);
      };
    }

    if (options.post) {
      this.post = (body, requestConfig) => {
        return apiProvider.post(options.url, body, requestConfig);
      };
    }

    if (options.put) {
      this.put = (id, body, requestConfig) => {
        return apiProvider.put(options.url, id, body, requestConfig);
      };
    }

    if (options.patch) {
      this.patch = (id, body, requestConfig) => {
        return apiProvider.patch(options.url, id, body, requestConfig);
      };
    }

    if (options.remove) {
      this.remove = (id, requestConfig) => {
        return apiProvider.remove(options.url, id, requestConfig);
      };
    }
  }
}