import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()

export const verifyJWT = (req, res, next) => {
    let token = req.headers['X-access-token']

    if (token === undefined && req.headers['authorization']) {
        const authHeader = req.headers['authorization'];
        const tokenArr = authHeader.split(' ');
        
        if(tokenArr.length === 2){
            token = tokenArr[1];
        } else {
            return res.status(400).json({message: "Token no formato incorreto"})
        }
    }

    jwt.verify(token, process.env.SECRET, (err, decodeURI)=>{
        if(err) return res.status(401).end()
        req.userId = decodeURI.userId
        next()
    })
}