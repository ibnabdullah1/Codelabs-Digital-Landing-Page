import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Review.css";
import ReviewsCard from "./ReviewsCard";

export default function Reviews() {
  const reviews = [
    {
      rating: 4.7,
      reviewer: "Alice J",
      title: "Expertise and Compassion Combined",
      review:
        "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
      image: "https://i.ibb.co/SRd4VRB/user8.jpg",
      reviewerTitle: "Satisfied Customer",
    },
    {
      rating: 3.5,
      reviewer: "Bob W",
      title: "Expertise and Compassion Combined",
      review:
        "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
      image: "https://i.ibb.co/SRd4VRB/user8.jpg",
      reviewerTitle: "Average User",
    },
    {
      rating: 5.0,
      reviewer: "Sarah W",
      title: "Expertise and Compassion Combined",
      review:
        "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
      image: "https://i.ibb.co/gt1ypHT/user2.jpg",
      reviewerTitle: "Delighted User",
    },
    {
      rating: 3.8,
      reviewer: "Michael D",
      title: "Expertise and Compassion Combined",
      review:
        "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
      image: "https://i.ibb.co/8rFzL4X/user6.jpg",
      reviewerTitle: "Unsatisfied Buyer",
    },
    {
      rating: 4.5,
      reviewer: "Emily B",
      title: "Expertise and Compassion Combined",
      review:
        "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
      image: "https://i.ibb.co/gt1ypHT/user2.jpg",
      reviewerTitle: "Happy Customer",
    },
    {
      rating: 3.9,
      reviewer: "John S",
      title: "Expertise and Compassion Combined",
      review:
        "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
      image: "https://i.ibb.co/8rFzL4X/user6.jpg",
      reviewerTitle: "Contented User",
    },
    {
      rating: 4.0,
      reviewer: "Olivia M",
      title: "Expertise and Compassion Combined",
      review:
        "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
      image: "https://i.ibb.co/SRd4VRB/user8.jpg",
      reviewerTitle: "Impressed Buyer",
    },
    {
      rating: 3.7,
      reviewer: "Daniel T",
      title: "Expertise and Compassion Combined",
      review:
        "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
      image: "https://i.ibb.co/8rFzL4X/user6.jpg",
      reviewerTitle: "Disappointed Customer",
    },
  ];

  return (
    <div className="pt-2 lg:px-0 px-5 pb-16 ">
      <div className=" max-w-6xl mx-auto pt-2 pb-16 ">
        <div className="lg:flex justify-between items-end py-8">
          <div className="space-y-4 flex-1">
            <button className="border border-[#020043] py-1 lg:py-2 px-4 lg:px-8 rounded-full  md:text-xl bg-[#fffff5a3] text-[#020043]">
              Testimonial
            </button>
            <h2 className="text-2xl lg:text-4xl font-bold  leading-[1.3] text-[#020043]">
              What they say about us
            </h2>
          </div>
          <div className="flex justify-end  gap-2 ">
            <button className="swiper-button-prev button text-xl  p-2 rounded-full border">
              <IoIosArrowBack />
            </button>
            <button className="swiper-button-next  button text-xl p-2 rounded-full border">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <Swiper
          // slidesPerView={3}
          // spaceBetween={10}
          freeMode={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
        >
          <div>
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <ReviewsCard review={review} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
