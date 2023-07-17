import React from 'react'
import { createClient } from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const Blogs = ({ blogs }) => {

    const client = createClient({
        projectId: 'ybwz3gr5',
        dataset: 'production',
        useCdn: false,
    })

    const builder = ImageUrlBuilder(client)
    return (
        <>
            <Navbar />
            <div className=" bg-gray-50" id="blog">
                <div className="container grid place-items-center mx-auto py-16 md:py-20">
                    <h2
                        className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
                    >
                        I also like to write
                    </h2>
                    <h4
                        className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
                    >
                        Check out my latest posts!
                    </h4>
                    <div
                        className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
                    >
                        {blogs.map((blog) => (
                            <Link key={blog.slug.current} href={`/blog/${blog.slug.current}`} className="shadow">
                                <div
                                    style={{ backgroundImage: `url(${builder.image(blog.blogImage).width(200).url()} ) ` }}
                                    className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                                >
                                    <span
                                        className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
                                    ></span>
                                    <span
                                        className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
                                    >
                                        Read More
                                    </span>
                                </div>
                                <div className="bg-white py-6 px-5 xl:py-8">
                                    <span className="block font-body text-lg font-semibold text-black">
                                        {blog.title}
                                    </span>
                                    <span className="block pt-2 font-body text-grey-20">
                                        {blog.metaDescription.substring(0, 500)}...
                                    </span>
                                </div>
                            </Link>
                        ))}


                    </div>
                </div>
            </div>
        </>
    )
}
export default Blogs


export async function getStaticProps() {
    const client = createClient({
        projectId: 'ybwz3gr5',
        dataset: 'production',
        useCdn: false
    })

    const blogs = await client.fetch(`*[_type == "blog"]
    `)
    return {
        props: {
            blogs
        }
    }
}