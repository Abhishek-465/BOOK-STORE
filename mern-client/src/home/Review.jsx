import React from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const reviews = [
    {
      id: 1,
      stars: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium repellat non fugiat vero aliquam optio! Iure quidem at eveniet vitae natus id dicta dolore? Aspernatur tenetur perferendis incidunt velit.",
      author: "Nan Ping",
      position: "CEO, ABC Company",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="my-12 px-4 lg:px-24 ">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div className="gap-4 flex justify-center">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="shadow-2xl bg-white py-8 px-4 rounded-lg border"
          >
            <div className="flex items-center mb-4">
              {[...Array(review.stars)].map((star, index) => (
                <FaStar key={index} className="text-amber-500" />
              ))}
            </div>
            <p className="mb-5">{review.text}</p>
            <h5 className="text-lg font-medium">{review.author}</h5>
            <p className="text-base">{review.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
