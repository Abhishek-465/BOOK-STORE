import React from "react";
import BannerCard from "../home/BannerCard";
import pic from "../assets/banner-books/book5.png";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="space-y-7 lg:w-3/4 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books{" "}
            <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Welcome to our book store, where literature comes to life! Explore a
            diverse collection of books across genres. Join our author events
            and book clubs. Discover unique titles from local authors. Embark on
            a literary adventure with us!
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        <div>
          <BannerCard />
        </div>
      </div>
      <div>
        <img className=" mr-[160px] hidden md:block" src={pic} alt="pic" />
      </div>
    </div>
  );
};

export default Banner;
