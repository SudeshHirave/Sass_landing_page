
import Image from "next/image";
import { Container } from "../container"
import { Desktopmenu } from "./DesktopMenu";
import { products,developers,resources} from "./NavComponents"
import { MobMenu } from "./MobMenu";
  
  export const TABS = [
    {title:'Products',
        href:'/products',
        component:products,
    },
    {title:'Developers',
        href:'/developers',
        component:developers,
    },
    {title:'Resources',
        href:'/resources',
        component:resources,
    },
    {title:'Pricing',
        href:'/pricing',
    },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export const Navbar = ()=>{
    
    return (
        <Container className="">
            <nav className="hidden">
                <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="/products" className="text-gray-700 hover:text-blue-600">Products</a>
                <a href="/developers" className="text-gray-700 hover:text-blue-600">Developers</a>
                <a href="/resources" className="text-gray-700 hover:text-blue-600">Resourecs</a>
                <a href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
            </nav>
            <nav className="px-5  lg:relative flex item-center justify-between lg:px-2 ">
                <Image 
                 className="h-10 mt-5 ml-2 w-10 "
                 src="/webpack.svg"
                 height="100"
                 width="100"
                 alt="CompanyLogo"
                />
                <div className="hidden lg:flex pt-6 pb-8 justify-start text-primary">
                <Desktopmenu />
                </div>
                <div className="relative flex lg:hidden">
                <MobMenu />
                </div>
            </nav>
        </Container>
    )
}






