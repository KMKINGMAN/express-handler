import express from 'express';
import { readdirSync } from 'fs';
import { port, host } from './utils/Config.js'
class kmcode_api{
    constructor(){
        this.app = express();
        this.Setup();
        this.Routes();
    }
    Setup(){
        this.app.use(express.json());
        this.app.unsubscribe(express.urlencoded({ extended: true }));
        this.app.listen(port, ()=> { console.log(`Running on Port ${port}\n${host}:${port}`) });
    }
    async Routes(){
        let files = readdirSync("./src/routes/").filter((file)=> file.endsWith(`.js`));
        for (const file of files) {
            let route = await import(`./routes/${file}`);
            this.app.use(route.page, new route.KM_Router());
            console.log(`Loaded ${file} [${route.page}]`);
        }
    }
}
new kmcode_api();