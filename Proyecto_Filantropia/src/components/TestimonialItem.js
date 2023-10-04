import React from "react";



const TestimonialItem = ({ content, name, avatarImg, position }) => {
  return (
    <div class="item ml">
      <div class="client-testimonial dark">
        <div class="client-inner-content">
          <i class="charity-quotes"></i>
          <p>{content}</p>
        </div>
        <div class="client-testimonial-icon">
          <img src={avatarImg} alt="" className="carousel-img" />
          <div class="text">
            <div class="name">{name}</div>

            <div class="post">{position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
