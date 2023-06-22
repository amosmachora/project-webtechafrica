import { BlogArticleType } from "@/types/Global";
import { scrollToTop } from "@/util/utilities";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogArticle = ({ article }: { article: BlogArticleType }) => {
  return (
    <div className="rounded-3xl bg-gray-100 p-6 w-full mb-10 sm:mb-0 sm:w-1/2 relative">
      <Image
        src={article.img}
        alt="keyboard and earphones"
        className="rounded-3xl w-full h-[40%] object-cover"
        width={1260}
        height={750}
      />
      <p className="text-secondaryFour mt-11 mb-4">{article.date}</p>
      <h4 className="h4">{article.title}</h4>
      <p className="default-paragraph my-4">{article.preText}</p>
      <Link
        href={`/blog/${article.title}`}
        className="absolute bottom-4 text-primaryOne text-sm underline font-semibold"
        onClick={scrollToTop}
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogArticle;