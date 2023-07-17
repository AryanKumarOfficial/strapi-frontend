import React from "react";
import { useRouter } from "next/router";


const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <div className="blog-post">
                <div className="nav bg-gray-400">
                    I am nav
                </div>
                <span className="text-red-500">this is blog post</span>
                <span className="text-red-500">{slug}</span>
            </div>
        </>
    );
}

export default BlogPost;