import { Link } from "react-router-dom";

export default function About() {
   return (
       <div className="py-16 bg-white">
           <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
               <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                   <div className="md:5/12 lg:w-5/12">
                       <img
                           src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                           alt="image"
                       />
                   </div>
                   <div className="md:7/12 lg:w-6/12">
                       <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           Welcome to ShopSmart - Your One-Stop Online Shop
                       </h2>
                       <p className="mt-6 text-gray-600">
                           Welcome to <strong>ShopSmart</strong>, the best place to shop online for a wide variety of high-quality products. We are passionate about offering our customers an exceptional shopping experience, combining convenience, variety, and unbeatable prices. Whether you're looking for the latest fashion trends, cutting-edge electronics, or home essentials, <strong>ShopSmart</strong> has something for everyone.
                       </p>
                       <p className="mt-4 text-gray-600">
                           Our mission is to provide a one-stop destination for all your shopping needs. We strive to offer a vast collection of carefully curated products that suit every budget and lifestyle. Our team of experts works tirelessly to ensure that each item meets our strict quality standards, so you can shop with confidence.
                       </p>
                       <p className="mt-4 text-gray-600">
                           At <strong>ShopSmart</strong>, we believe that online shopping should be simple, secure, and enjoyable. That's why we offer fast and reliable shipping, hassle-free returns, and a wide range of payment options to make your shopping experience smooth and secure. We also prioritize customer satisfaction, which is why our dedicated customer support team is always ready to assist you with any queries or issues.
                       </p>
                       <p className="mt-4 text-gray-600">
                           With our easy-to-navigate website and detailed product descriptions, you can make informed decisions and find exactly what you're looking for in just a few clicks. We believe that shopping should be a fun and stress-free experience, and we’re here to make that happen!
                       </p>
                       <p className="mt-4 text-gray-600">
                           Thank you for choosing <strong>ShopSmart</strong> – where shopping meets convenience, quality, and value. We look forward to serving you and helping you find your next favorite product!
                       </p>
                   </div>
               </div>
           </div>
       </div>
   );
}
