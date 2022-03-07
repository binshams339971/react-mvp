import FeedbackModel from 'models/FeedbackModel'

const feedbackMapper = {
    mapFeedbacks : (feedbacks) =>{
        let list = []
        feedbacks.forEach(feedback => {
            list.push( new FeedbackModel(feedback) )
        });
        return list;
    },
    mapFeedback : (feedback) =>{
        if(feedback) {
            return new FeedbackModel(feedback);
        }

        return null;
    }
}

export default feedbackMapper;