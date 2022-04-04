const {save, getAll, getById, removeById, update} = require('../models/IpModel');
const addNewIp = async ({ip, code, timestamp})=>{
    const Ip = {
        ip,
        code,
        timestamp
    };
    return await save(Ip);
}
const getIps = async ()=>{
    return await getAll();
}
const getIp = async id =>{
    return await getById(id);
}
const deleteIp = async id =>{
    return await removeById(id);
}
const updateIp = async (id, {ip, code, timestamp})=>{
    return await update(id, {ip, code, timestamp});
}
module.exports = {addNewIp, getIps, getIp, deleteIp, updateIp};