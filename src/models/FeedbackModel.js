class FeedbackModel 
{
    constructor({id, name, phone_number, email, description, rating, createdAt, updatedAt}){
        this.id = id;
        this.name = name;
        this.phone_number = phone_number;
        this.email = email;
        this.description = description;
        this.rating = rating;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default FeedbackModel;