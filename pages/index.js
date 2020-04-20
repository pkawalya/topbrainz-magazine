import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

const Home = ({ posts }) => {
  console.log(posts)

  return (
    <div className="container">
      {posts.map(post => (
        <div>
        <h3>{post.title}  </h3>
        <br/>
        {post.content}
        </div>
        
      ))}
    </div>
  )
}



export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/posts`)
  const data = await res.json()

  return {
      props: {
          posts: data
      }
  }
}

export default Home
