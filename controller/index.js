const List = require('../model/Index')


exports.getPost = function(req,res,next){
    List.find().exec((err,data)=>{
        if(err){
            throw err;
        }
        if(data){
            return res.render('index',{data});
        }
    })
}

exports.addPost = async(req,res,next)=>{
    const text = new List({description:req.body.text})
try{
const result = await text.save();
if(result){
    res.redirect('/')
}
}
catch(err){
throw err;
}
}
exports.editPost = (req,res,next)=>{
    let id = req.params._id;
    List.findById(req.params._id, (err, data)=>{
        if(err){throw err;}
        if(data){return res.render('editPost',{id,data}) }
    })
}
    

exports.updatePost = (req,res,next)=>{
List.findByIdAndUpdate(req.body.id, 
    {description:req.body.editText}, function(err, data) {
        if(err){
            console.log(err);
        }
        if(data){
            //console.log("Data updated!");
            res.redirect('/');
        }
    });   
}

exports.deletePost = (req,res,next)=>{
    List.findByIdAndDelete((req.params._id), (err,data)=>{
        if(err){
            console.log(err);
        }
        if(data){
            console.log("deleted Successfully");
            res.redirect('/');
        }
    })
   
}

