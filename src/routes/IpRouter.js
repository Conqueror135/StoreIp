const router = require('express').Router();
const {addNewIp, getIps, getIp, deleteIp, updateIp} = require('../controlers/IpCtr');
router.get('/', async (req, res)=>{
    res.send( await getIps());
    res.status = 200;
});
let getMyId = (req)=> {
    let ipAddr = req.headers["x-forwarded-for"];
    
    console.log("port: ", req.headers["X-Forwarded-Port"]);
    if (ipAddr){
        let list = ipAddr.split(",");
        let itemList = list[list.length-1];
        ipAddr = itemList;
    } else {
        ipAddr = req.connection.remoteAddress;
    }
    return ipAddr;
}
router.get('/myid', async (req, res) =>{
    let clientPort = req.headers["X-Forwarded-Port"];
    let clientIp = getMyId(req);
    res.json({
        "ip": clientIp,
        "port": clientPort
    });
    res.status = 200;
});
router.post('/', async (req, res) => {
    
    let ip = getMyId(req);
    let body = req.body;
    let timestamp = Date();
    let code = body.code;
    let Ip = {
        ip,
        code,
        timestamp
    };

    let data = await addNewIp(Ip);
    res.json("saved!");
    res.status = 200;
});
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    let ip = req.request.body;
    await updateIp(id, ip);
});
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await deleteIp(id);
    res.json("deleted!");
    res.status = 200;
});
router.get('/:id', async (req, res) =>{
    res.send( await getIp(req.params.id));
    res.status = 200;
});
module.exports = router;