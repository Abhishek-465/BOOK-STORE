import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCards = ({ headline, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold my-5 text-black">
        {headline}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {books.map((book) => (
          <div key={book._id} className="relative">
            <Link to={`/book/${book._id}`} className="block">
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="w-full h-auto"
              />
              <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                <FaShoppingBag className="w-4 h-4 text-white" />
              </div>
            </Link>
            <div className="mt-2">
              <h3 className="text-lg font-semibold">{book.bookTitle}</h3>
              <p className="text-sm text-gray-600">{book.authorName}</p>
              <p className="mt-1 text-sm text-gray-800">Rs 500</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCards;
