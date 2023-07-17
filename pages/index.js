import Image from 'next/image'
import { Inter } from 'next/font/google'
import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'

const inter = Inter({ subsets: ['latin'] })

const Home = ({ blogs }) => {
  console.log(blogs[0].content, 'blogs');
  return (
    <>
      <div className="home">
        <div className="nav bg-gray-400">
          I am nav
        </div>
        <h2>{blogs[0].title}</h2>
        <div className="">
          <PortableText
            value={blogs[0].content}
            projectId="ybwz3gr5"
            dataset="production"
            serializers={{
              h1: (props) => <h1 className="text-red-500" {...props} />,
              img: ({ node }) => <Image src={node.asset.url} width={node.asset.metadata.dimensions.width} height={node.asset.metadata.dimensions.height} />,
              li: ({ children }) => <li className="text-red-500">{children}</li>,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Home;

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
// {title, body, mainImage, slug}