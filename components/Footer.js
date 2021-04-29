import { GlobeIcon } from '@heroicons/react/solid';

function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100">
            <div className="px-8 py-3">
                <p>United Kingdom</p>
            </div>
            <div className="grid grid-cols-1">
                <div className="flex items-center justify-center">
                    <GlobeIcon className="h-5 mr-2 text-green-700" />
    Carbon neutral since 2007
</div>

                <div className="flex justify-center space-x-4 whitespace-nowrap md:justify-self-start">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search works</p>
                </div>

                <div className="flex justify-center space-x-4 md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer
