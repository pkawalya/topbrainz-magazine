import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

const Home = ({ pages }) => {
  console.log(pages)

  return (
    <div className="container">
      {pages.map(page => (
        <div>
        {page.title}
        </div>
      ))}
    </div>
  )
}



export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/pages`)
  const data = await res.json()

  return {
      props: {
          pages: data
      }
  }
}

export default Home
