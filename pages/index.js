import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header class="flex justify-between p-5 w-full text-small">
        <div class="flex space-x-4 items-center">
           <p className="link">About</p>
           <p>Store</p>
        </div>

        <div class="flex space-x-4 items-center">
           <p>Gmail</p>
           <p>Images</p>
        </div>
      </header>
     
    </div>
  )
}
