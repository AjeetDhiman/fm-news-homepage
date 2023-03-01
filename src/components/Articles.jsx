import React from "react";
import Retro from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";
import SingleArticle from "./inc/SingleArticle";

const articles = [
  {
    id: "01",
    imgSrc: Retro,
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: "02",
    imgSrc: Laptops,
    title: "Top 10 Laptops of 2022 ",
    description: "Our best picks for various needs and budgets.",
  },
  {
    id: "03",
    imgSrc: Gaming,
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];

function Articles() {
  return (
    <article className="container mx-auto px-4 py-4">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-8 gap-4">
        {articles.map((article, index) => (
          <SingleArticle
            key={index}
            id={article.id}
            imgSrc={article.imgSrc}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </article>
  );
}

export default Articles;
