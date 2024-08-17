const User=require("../models/user")
async function get_data(req,res){
    console.log(req.query.Tag);
    let send_data= await User.find({tags:req.query.Tag});
    console.log(send_data)
    res.send(send_data)
}
async function insert_data(req,res){
    console.log(req.body);
    let set_userdata=new User(req.body);
    set_userdata.save();
}
module.exports={
    get_data,insert_data
}