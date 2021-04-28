import Head from 'next/head'
import Avatar from '../components/Avatar';
import {MicrophoneIcon, SearchIcon, ViewGridIcon} from '@heroicons/react/solid';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between p-5 w-full text-small">
        <div className="flex space-x-4 items-center">
           <p className="link">About</p>
           <p>Store</p>
        </div>

        <div className="flex space-x-4 items-center mt-4 ">
           <p>Gmail</p>
           <p>Images</p>
           <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
           <Avatar url='https://source.unsplash.com/random/100x100'/>
        </div>
      </header>

      <form className="flex flex-col items-center">
        <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
        height={100} width={300} />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-5 item-center sm:max-w-xl">
          <SearchIcon className="h-5 w-5 mr-3 text-gray-500"/>
          <input type="text" className="flex-grow  focus:outline-none"/>
          <MicrophoneIcon className="h-5 w-5" />
        </div>

        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
          <button className="btn">Google Search</button>
          <button className="btn">I'm feeling lucky</button>
        </div>
      </form>
     
    </div>
  )
}
