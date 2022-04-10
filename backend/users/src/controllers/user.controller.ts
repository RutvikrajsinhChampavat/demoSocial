export class UserController{


    
    getAllUser(req:any,res:any){
        res.send({
            code:200,
            message:"All users found"
        })
    }
}