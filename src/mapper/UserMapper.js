import UserModel from 'models/UserModel'

const userMapper = {
    mapUsers : (users) =>{
        let list = []
        users.forEach(user => {
            list.push( new UserModel(user) )
        });
        return list;
    },
    mapUser : (user) =>{
        if(user) {
            return new UserModel(user);
        }

        return null;
    }
}

export default userMapper;