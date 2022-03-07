import config from '../config/app-config';
import { Buffer } from 'buffer';

const fileService = {
    getFileURL: async (path) => {
        return new Promise((resolve, reject) => {
            if(path){
                if(config.FILE_DRIVE_TYPE === 'local'){
                    if(config.FILE_DRIVE === 'public'){
                        return resolve({
                            status: 'success',
                            url: config.FILE_DRIVE_HOST + path
                        });
                    }
                }else if(config.FILE_DRIVE_TYPE === 'remote'){
                    if(config.FILE_DRIVE === 'public'){
                        return resolve({
                            status: 'success',
                            url: config.FILE_DRIVE_HOST + path
                        });
                    }
                }
            }

            return reject({
                status: 'failed'
            });
        });
    },
    getVideoStreamingURL: async (path) => {
        return new Promise((resolve, reject) => {
            if(path){
                try{
                    const encodedPath = Buffer.from(path).toString('base64');console.log(encodedPath);
                    return resolve({
                        status: 'success',
                        url: config.API_BASE_URL + '/videos/stream?src=' + encodedPath
                    });
                }catch(err){
                    return reject({
                        status: 'failed1'
                    });
                }
            }else{
                return reject({
                    status: 'failed',
                    errors: ['Invalid Video Path']
                });
            }
        });
    }
}

export default fileService;