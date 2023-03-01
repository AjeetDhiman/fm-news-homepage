import React from "react";

function SingleArticle({ id, imgSrc, title, description }) {
  return (
    <div className="flex justify-between gap-6">
      <div className="w-full h-full lg:w-auto lg:h-auto">
        <img src={imgSrc} className="w-full lg:w-auto" />
      </div>
      <div className="">
        <span className="text-4xl font-bold text-skin-muted" aria-disabled>
          {id}
        </span>
        <h4 className="py-1 text-sm font-bold text-skin-dark lg:text-base lg:py-3">
          {title}
        </h4>
        <p className="lg:pr-4">{description}</p>
      </div>
    </div>
  );
}

export default SingleArticle;
