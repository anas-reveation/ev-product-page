# EV Product Page Project

## 1. Project Overview
- This project implements a full-stack EV Product Detail Page inspired by the reference design: [Ecozaar Ather 450X](https://ecozaar.in/ather-energy/ather-450x-3-7kwh/)
- Features include:
  - Dynamic product detail fetching from MongoDB via a Node.js API
  - Display of detailed specifications and product info
  - Related Products section with clickable navigation to other product details
  - API endpoint to add new products with validation

## 2. Technology Stack
- **Database:** MongoDB with Mongoose ODM
- **Backend:** Node.js with Express.js framework
- **Frontend:** Next.js (React framework)
- **API:** RESTful API endpoints using Express.js
- **Styling:** Tailwind CSS for rapid and responsive styling
- **HTTP Client:** fetch API for frontend data fetching

## 3. Database Schema Overview
- **Product Schema Fields:**
  - `name` (String, required)
  - `slug` (String, unique, required) - URL-friendly product identifier
  - `brand` (String)
  - `category` (String)
  - `price` (Number)
  - `colorOptions` (Array of strings)
  - `description` (String)
  - `specifications` (Object with nested keys, e.g., motor, battery, charging time, dimensions)
  - `imageUrl` (String or Array for multiple images)
  - `relatedProducts` (Array of ObjectIds referencing other Product documents)
  
## 4. Backend API Endpoints

| Method | Endpoint              | Description                           | Request Body Example                    | Response                         |
|--------|-----------------------|-------------------------------------|---------------------------------------|---------------------------------|
| POST   | `/api/products`       | Add a new product                   | JSON object with product fields       | Created product object or error |
| GET    | `/api/products/:slug` | Get product details by slug         | None                                  | Product object                  |
            |

### Add Product Example Request Body
```json
{
  "name": "Ather 450X",
  "slug": "ather-450x",
  "brand": "Ather Energy",
  "category": "Electric Scooter",
  "price": 129999,
  "colorOptions": ["Matte Black", "Matte Grey"],
  "description": "High-performance electric scooter with fast charging...",
  "specifications": {
    "motor": "6 kW BLDC",
    "battery": "3.7 kWh Lithium-ion",
    "chargingTime": "3.5 hours",
    "topSpeed": "80 km/h"
  },
  "imageUrl": "https://example.com/images/ather-450x.jpg",
  "relatedProducts": ["60f7c8e1e3b7e5001a4c1234", "60f7c8e1e3b7e5001a4c5678"]
}


## 5. Frontend Structure and Functionality
- **Pages:**
  - `/products/[slug].js` - Dynamic product detail page using Next.js dynamic routing
- **Features:**
  - Fetches product details from the backend API based on the product slug in the URL
  - Displays main product information including images, specifications, price, description, and brand
  - Shows a "Related Products" section with clickable cards that display image and name of related items
  - Clicking a related product updates the URL and reloads the product data dynamically without a full page refresh
  - Includes loading states while fetching product data
  - Basic error handling to display messages if the product is not found or if API call fails

## 6. Setup and Running Locally

### Prerequisites
- Node.js version 16 or higher
- MongoDB Atlas cluster or local MongoDB server
- Git (for cloning the repository)

### Backend Setup
```bash
cd backend
npm install
# Create a .env file in the backend folder with:
MONGO_URI=mongodb+srv://anaskhan250397:wUtLJP9J5mJVpJek@cluster0.w4ink3y.mongodb.net/ev-product?retryWrites=true&w=majority&appName=Cluster0
ADMIN_KEY=supersecret123
npm run dev

### Frontend Setup
```bash
cd frontend
npm install
# Create a .env file in the frontend  folder with:
API_BASE_URL=http://ev-product-page-production-9ac7.up.railway.app
npm run dev


### How to Test the API Locally
for get
curl http://localhost:5000/api/products/<product-slug>

for post 
curl -X POST http://localhost:5000/api/products \
-H "Content-Type: application/json" \
-H "x-api-key: supersecret12" \
-d '{
  "name": "New EV Model",
  "slug": "new-ev-model",
  "brand": "BrandX",
  "category": "Electric Scooter",
  "price": 150000,
  "colorOptions": ["Red", "Blue"],
  "description": "A powerful new electric scooter.",
  "specifications": {
    "motor": "7 kW BLDC",
    "battery": "4 kWh Lithium-ion",
    "chargingTime": "3 hours",
    "topSpeed": "90 km/h"
  },
  "imageUrl": "https://example.com/images/new-ev-model.jpg",
  "relatedProducts": []
}'

