import Rating from "react-rating";

const ReviewsCard = ({ review }) => {
  return (
    <div className="flex flex-col justify-between rounded-3xl space-y-3 bg-[#fffff5] px-7 py-5">
      <h2 className="text-xl font-semibold text-[#0c194ddd]">{review.title}</h2>
      <p className="text-[14px] font-normal text-[#555555]">
        {review?.review.length > 130
          ? `${review?.review.slice(0, 120)}...`
          : review?.review}
      </p>

      <div className="flex items-center gap-6 ">
        <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
          <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
            <img
              alt=""
              src={review.image}
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              className="inline-block "
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <p className="leading-relaxed tracking-wide font-semibold text-gray-800">
            {review?.reviewer},
            <span className="text-gray-500 font-normal">
              {" "}
              {review?.reviewerTitle}
            </span>
          </p>
          <p className=" text-[#ffcc00] text-xs ">
            <Rating
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={review?.rating}
              readonly
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
