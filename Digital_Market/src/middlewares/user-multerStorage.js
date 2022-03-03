let fs = require('fs')
const path = require("path");

const multer = require('multer');
let multerDiskStorage = multer.diskStorage({
  destination: (req, file, cb)=>{
    console.log(req.body)
    let folder = path.join(__dirname, '../../public/img/users');
    cb(null, folder);
  },
  filename: (req, file, cb)=>{
    let imgName = 'avatar_' + Date.now() + path.extname(file.originalname);
    cb(null, imgName)
  }
})
let fileUpload = multer({storage: multerDiskStorage})

module.exports = fileUpload;