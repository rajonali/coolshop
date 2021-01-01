# Coolshop
  An ECommerce website powered by CommerceJS and NextJS
 
## Run Locally

### 1. Fork and Clone repo
- Open http://github.com/basir/coolshop-final.git
- Fork repo
- Open terminal
```
$ git clone git@github.com:basir/coolshop-final.git
$ cd coolshop-final
```

### 2. Get CommerceJS keys
Create account on [CommerceJS](http://commercejs.com/) website and get your api keys.

### 3. Create .env file
```
COMMERCE_PUBLIC_KEY_LIVE=pk_xxx
COMMERCE_SECRET_KEY_LIVE=sk_xxx
```

### 4. Install NPM Packages
```
$ npm install
```

### 5. Run Application
```
$ npm run dev
```

### 6. Open ecommerce website
Open [http://localhost:3000](http://localhost:3000)

## Use Ecommerce Website

### 1. Create product
Create a product on [CommerceJS dashboard](https://dashboard.chec.io/products).
 - Set SHIPPING OPTIONS to enabled
 - Set Domestic (United States) to enabled

### 2. Place an order
- open website on http://localhost:3000
- select one product
- add to cart
- proceed to checkout
- confirm order
  
### 3. Check order
- open admin dashboard on https://dashboard.chec.io/orders
- find the last order
- check email to see the order

## Deploy on Vercel

### 1. Create Vercel account
- open [https://vercel.com](https://vercel.com)
- sign up and login to your account


### 2. Import github repo to vercel
- Open https://vercel.com/dashboard
- Click Import Project
- Click Import Git Repository
- Enter forked repo for coolshop on your github
- give permission in github to vercel

### 3. Enter env variable for CommerceJS
- Enter name:COMMERCE_PUBLIC_KEY_LIVE
- Enter value: your public key on Commercejs

### 4. Deploy
- click deploy button
- wait to complete deployment
- click Visit Site at the end

## Lessons
1. Introduction
   1. What we will build
   2. What we will learn
   3. What are requirements
   4. What is CommerceJS
   5. What is NextJS
   6. Conclusion
2. Create NextJS App and Deploy on Vercel
   1. run npx create-next-app
   2. answer questions
   3. create github repo
   4. push to github
   5. create vercel account
   6. connect to vercel
   7. deploy on vercel
3. Create Products On CommerceJS
   1. Create CommerceJS account
   2. Create a merchant
   3. Create a product
   4. Enter image, name, price, shipping, ...
   5. Create 2 more products
4. List Products
   1. Create utils/commerce.js
   2. Edit pages/index.js
   3. commerce.products.list()
   4. Show products in divs
5. Create React Context
   1. Create Store.js
   2. Create _app.js
   3. set publicKey in page props
6. Design MaterialUI Layout
   1. Install MaterialUI packages
   2. Create _document.js
   3. Create Layout.js