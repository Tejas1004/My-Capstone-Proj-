const order = require("../../../models/order")

function Ordercontrol(){
    return{
        index(req,res){
            order.find({ status: { $ne:'completed' } }, null, { sort: { 'time':-1 }} ).populate('customerid', '-password').exec((err,orders)=>{
               if(req.xhr){
                   return res.json(orders)
               }else{
                return res.render('admin/orders.ejs')
               }
            })        
        }
    }
}
module.exports = Ordercontrol