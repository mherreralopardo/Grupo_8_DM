let fs = require('fs')
const path = require("path");

const multer = require('multer');
let multerDiskStorage = multer.diskStorage({
  destination: (req, file, cb)=>{
    // console.log(req.body)
    let folder = path.join(__dirname, '../../public/images/products');
    cb(null, folder);
  },
  filename: (req, file, cb)=>{
    let imgName = 'prd_' + Date.now() + path.extname(file.originalname);
    // req.body.imgName = imgName; // esta linea actualiza el nombre de la imagen en el req
    cb(null, imgName)
  }
})
let fileUpload = multer({storage: multerDiskStorage})

module.exports = fileUpload;