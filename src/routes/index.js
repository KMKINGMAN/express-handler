import { Router } from "express";
const page = '/'
class KM_Router extends Router{
    constructor(){
        super()
        this.get(`/`, 
        /**
         * @param {import("express").Request} req 
         * @param {import("express").Response} res 
         * @returns 
         */
        async(req, res)=> {
            return res.send({
                support_server: `https://discord.gg/kmkingman`,
                owner: `KMKINGMAN`
            })
        });
    }
}
export { page, KM_Router }