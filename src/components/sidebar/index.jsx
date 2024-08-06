import React from 'react';
import styled from "@/components/sidebar/sidebar.module.scss";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


const SideBarNavigation = ({ isOpenNavbar, setIsOpenNavbar }) => {

    const pathname = usePathname()
    const isRoutes = ["/service", "/AI-Ml", "/web3", "/blockchain", "/software", "/internet-of-things"]

    const handleContactUs = () => {
        window.open('/contact-us', '_blank', 'noopener,noreferrer');
    }

    return (
        <div className={`${styled.sidebar_wrapper} ${isOpenNavbar ? styled.Show : ""}`} onClick={() => setIsOpenNavbar(false)}>
            <div className={`${styled.navigation_wrap} ${isOpenNavbar ? styled.active : ""}`} >
                <nav class={styled.menu}>
                    <Link href="/" className={`${styled.menuItem} ${pathname === "/" ? styled.active : ""}`}>Home</Link>
                    <div className={styled.dropdown}>
                        <Link href="/service" className={`${styled.menuItem} ${isRoutes.includes(pathname) ? styled.active : ""}`}>
                            Services
                            {/* <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/d523e682-f4ab-44ae-a87f-8128e1f2b6e0-Vector%20%285%29.svg" width={10} height={5} /> */}
                        </Link>
                        <div className={styled.dropdown_List}>
                            <Link href="/AI-Ml" className={`${styled.dropdown_Item} ${pathname === "/AI-Ml" ? styled.active : ""}`}>
                                <div className={styled.icon}>
                                    <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/459ec772-6723-4557-a7c2-cfc2d4d5f554-Group.svg" width={18} height={18} />
                                </div>
                                AI & ML
                            </Link>
                            <Link href="/web3" className={`${styled.dropdown_Item} ${pathname === "/web3" ? styled.active : ""}`}>
                                <div className={styled.icon}>
                                    <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/9797331d-30ed-4b4a-8aab-04a7c4d073d9-Mask%20Group%205.svg" width={18} height={18} />
                                </div>
                                Web 3 Development
                            </Link>
                            <Link href="/blockchain" className={`${styled.dropdown_Item} ${pathname === "/blockchain" ? styled.active : ""}`}>
                                <div className={styled.icon}>
                                    <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/8441da4f-78d4-4e7a-bdc6-23a38c8aa45b-Custom-Blockchain-Development-1.svg%20%282%29.svg" width={18} height={18} />
                                </div>
                                Blockchain Development
                            </Link>
                            <Link href="/software" className={`${styled.dropdown_Item} ${pathname === "/software" ? styled.active : ""}`}>
                                <div className={styled.icon}>
                                    <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/a54458f4-1908-4ea5-b9ff-f6a84d315011-Path%2033.svg" width={18} height={18} />
                                </div>
                                Customize Development
                            </Link>
                            <Link href="/internet-of-things" className={`${styled.dropdown_Item} ${pathname === "/internet-of-things" ? styled.active : ""}`}>
                                <div className={styled.icon}>
                                    <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/88191c4c-4112-4326-b182-72eb849d9bdd-internet-of-things.png" width={18} height={18} />
                                </div>
                                Internet of things
                            </Link>

                        </div>
                    </div>
                    <Link href="/career" className={`${styled.menuItem} ${pathname === "/career" ? styled.active : ""}`}>Careers</Link>
                    <Link href="/about-us" className={`${styled.menuItem} ${pathname === "/about-us" ? styled.active : ""}`}>About Us</Link>
                    <Link href="/portfolio" className={`${styled.menuItem} ${pathname === "/portfolio" ? styled.active : ""}`}>Portfolio</Link>
                </nav>
                <button className={styled.contactButton} onClick={handleContactUs}>Contact us</button>
            </div>
        </div>
    )
}

export default SideBarNavigation
