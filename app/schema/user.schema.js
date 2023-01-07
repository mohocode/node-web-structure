const { boolean } = require("joi");
const mongoosePaginate = require('mongoose-paginate-v2');

module.exports.UserCollection = {
            
    name : 'User',
    
    definition : {
        
        firstname : { type : String  , trim : true , minlength : 3 , maxlength:255 },
        lastname : { type : String  , trim : true , minlength : 3 , maxlength:255 },
        username : { type : String  , unique: true , required: true , trim : true , minlength : 11 , maxlength:11 },
        password :{type : String,  required: true ,minlength : 6 },
        address : { type : String },
        state: { type : String },
        city: { type : String },
        isActive :{type: Boolean , default : false},
        isAdmin : {type: Boolean , default : false},
        role : { type : String  , default : 'customer'} ,
        createdAt : { type : Date , default: Date.now }

    },
    index : { username : 'text' , firstname :  'text' , lastname:  'text' , state : 'text' , city : 'text'},
    plugin : mongoosePaginate ,

};

