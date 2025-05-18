const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  category: { type: String, default: "Electric Vehicle" }, 
  price: { type: Number, required: true },
  colorOptions: [{ type: String }], // e.g., ['Hyper sand']
  description: { type: String, required: true },
  specifications: {
    exShowroomPrice: Number,
    certifiedRangeKm: Number,
    trueRangeKm: Number,
    motorPowerKW: Number,
    chargingTimeHours: String, 
    topSpeedKmh: Number,
    batteryCapacityKWh: Number,
    weightKg: Number,
    lengthCm: Number,
    widthCm: Number,
    heightCm: Number,
    warrantyYears: Number,
    warrantyKm: Number,
    // Add more essential specs here if needed
  },

  imageUrl: String,

  relatedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
