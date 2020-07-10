import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Test App</h1>
      </main>

      
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  if (req.headers.accept === "application/json") {
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({ "dummy": "data" }))
    res.end()
  }
  return {
    props: {}, // will be passed to the page component as props
  }
}
