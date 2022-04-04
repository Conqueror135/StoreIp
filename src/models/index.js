const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://tongkietthang:toilathang14@cluster0.fnnqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
});
module.exports = client;