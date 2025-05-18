const express = require("express");
const router = express.Router();
const { addProduct, getProductBySlug,updateProductById } = require("../controllers/productController");
const checkAdminKey = require('../middleware/checkAdminKey');

router.post("/products", checkAdminKey,addProduct);
router.get("/products/:slug", getProductBySlug);

module.exports = router;
