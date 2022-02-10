var mongoose=require('mongoose');

// create an schema
var listSchema = new mongoose.Schema({
            description:{
                type: String,
                required:[true, 'title is required']
            }
        });

const List = mongoose.model('list',listSchema);

module.exports = List;
        
