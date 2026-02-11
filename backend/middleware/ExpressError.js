// // custom error classs 
class ExpressError extends Error{
    construstor (status,message){
     super();
    this.status=status;
   this.message=message;
    }
}

module.express=ExpressError;