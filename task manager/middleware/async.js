const asyncWrapper = (fn) => {
    return async(req, res, next) => {
        try{
            await fn(req,res,next)
        }catch(e){
            console.log(e)
        }
    }
}

module.exports = asyncWrapper