"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const APIURL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT;

const BlogItem = ({ allPosts }) => {
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/${allPosts.slug}`} className="relative block aspect-[368/239]">
          <Image src={APIURL+allPosts.featuredImage.node.mediaItemUrl} alt={allPosts.slug} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/blog/${allPosts.slug}`}>
              {allPosts.title}
            </Link>
          </h3>
          <div className="line-clamp-3" dangerouslySetInnerHTML={{ __html: allPosts.excerpt }}></div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
