const ips = require('./index').db('myFristDatabase').collection('Ips');
const ObjectId= require('mongodb').ObjectId;
const save = async ({ip, code, timestamp})=>{
    await ips.insertOne({ip, code, timestamp});
    return;
}
const getAll = async()=>{
    return await ips.find().toArray();
}
const getById = async id =>{
    return await ips.findOne({_id:ObjectId(id)});
}
const update = async (id, {ip, code, timestamp})=>{
    await ips.replaceOne({_id:ObjectId(id)},{ip, code, timestamp});
    return ;
}
const removeById = async id =>{
    await ips.deleteOne({_id:ObjectId(id)})
}
module.exports={save, getAll, getById, removeById, update};
