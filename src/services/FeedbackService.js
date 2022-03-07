import apiFeedbacks from './api/FeedbackAPI';
import feedbackMapper from '../mapper/FeedbackMapper';

const feedbackService = {
    insertFeedback: async (body) => {
        const requestConfig = {
            data: body
        }
        try {
            return apiFeedbacks.post(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: feedbackMapper.mapFeedback(data)
                };
            }).catch((error) => {
                if(error?.data){
                    throw { ...error.data, statusCode: error.status };
                }else{
                    throw {
                        status: 'failed',
                        errors: [ error ]
                    };
                }
            }); 
        } catch (error) {
            throw {
                status: 'failed',
                errors: [ error ]
            };
        }
    }
}

export default feedbackService;