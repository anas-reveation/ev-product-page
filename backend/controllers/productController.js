const Product = require("../models/productModel");

// POST /api/products – Add a new product
exports.addProduct = async (req, res) => {
  const { name, slug, brand, price } = req.body;

  if (!name || !slug || !brand || !price) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


// GET /api/products/:slug – Get a product by slug
exports.getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).populate("relatedProducts");
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};



