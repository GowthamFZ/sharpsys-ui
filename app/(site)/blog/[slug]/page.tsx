import { getPostSlugs, getSinglePost } from "@/lib/service";
import Link from "next/link";
import Image from "next/image";

const APIURL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT;

export async function generateStaticParams() {
    const posts = await getPostSlugs();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function PostDetails({ params }) {
    const singlePost = await getSinglePost(params.slug);
    return (
        <section className="pb-20 pt-35 mt-20 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-12">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="lg:w-full">
                    <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                        <Link href="/#homeBlog"><button aria-label="send message" className="inline-flex items-center rounded-lg buttoncolor-bg mb-2 px-3 py-2 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark">
                            Back
                        </button>
                        </Link>
                        <div className="mb-10 w-full overflow-hidden">
                            <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                <Image
                                    src={APIURL+singlePost.featuredImage.node.mediaItemUrl}
                                    alt="Blog Image"
                                    fill
                                    className="rounded-md object-cover object-center" />
                            </div>
                        </div><h2 className="mb-5 mt-11 text-3xl font-semibold text-blacktext 2xl:text-sectiontitle2">
                            {singlePost.title}
                        </h2>
                        <div>
                            <div className="text-blacktext text-justify" dangerouslySetInnerHTML={{ __html: singlePost.content }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
