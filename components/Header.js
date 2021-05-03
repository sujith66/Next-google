import Image from 'next/image';
import {useRouter} from 'next/router';

function Header() {

    const router = useRouter();
    return (
        <header>
            <Image src="/googlelogo.png"
            width={120} height={40}
            className="cursor-pointer" 
            onClick={()=>router.push('/')}/>
        </header>
    )
}

export default Header
