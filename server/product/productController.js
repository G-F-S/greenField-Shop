var Product = require('./product.js');

exports.createOne = function (req, res) {
    Product.create(req.body,(err,result)=>{
        console.log(err)
        
            
            res.json(result)
    })
};

exports.retrieve = function (req, res) {
    Product.find({},(err,Res)=>{
        if(err) console.log(err)
        else {res.send(Res)};
    })
};

exports.retrieveOne = function (req, res) {
    Product.findOne({id:req.params.id},(err,Res)=>{
        if(err) console.log(err)
        else {res.json(Res)};
    })

};

exports.updateOne = function (req, res) {
    Product.findOneAndUpdate({id:req.params.id},req.body)
    .then((result)=>{res.send(result)})

.catch((err)=>console.log(err))
}
exports.deleteOne = function (req, res) {
    Product.deleteOne({id:req.params.id})
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
};