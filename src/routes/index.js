import { Router } from "express";
const page = '/'
class KM_Router extends Router{
    constructor(){
        super()
        this.get(`/`, async(req, res)=> {
            return res.send({
                message: `KMCodes Express App`
            })
        });
        this.post(`/`, (req, res)=> {
            
        })
    }
}
export { page, KM_Router }