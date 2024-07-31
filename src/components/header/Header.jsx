import React, { useEffect, useState } from 'react'
import styles from "@/components/header/Header.module.scss";
import Logo from "@/assets/brand-logo/logo.svg"
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const Header = () => {
    // const router = useRouter()
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleContactUs=()=>{
        // router.push('/contact-us', { scroll: false })
        window.open('/contact-us', '_blank', 'noopener,noreferrer');
    }

    return (
        <header className={`${styles.headerWrapper} ${scrolled ? styles.stickyActive : ""}`}>
            <div className="container">
                <div className={styles.header}>
                    <Link href="/" class={styles.logo}>
                        <Image src={Logo} alt="Logo" className={styles.logoImage} width={154} height={60} />
                    </Link>
                    <nav class={styles.menu}>
                        <Link href="/" className={styles.menuItem}>Home</Link>
                        <div className={styles.dropdown}>
                            <Link href="/service" className={styles.menuItem}>
                                Services
                                {/* <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/d523e682-f4ab-44ae-a87f-8128e1f2b6e0-Vector%20%285%29.svg" width={10} height={5} /> */}
                            </Link>
                            <div className={styles.dropdown_List}>
                                <Link href="/AI-Ml" className={styles.dropdown_Item}>
                                    <div className={styles.icon}>
                                        <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/459ec772-6723-4557-a7c2-cfc2d4d5f554-Group.svg" width={18} height={18} />
                                    </div>
                                    AI & ML
                                </Link>
                                <Link href="/web3" className={styles.dropdown_Item}>
                                    <div className={styles.icon}>
                                        <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/9797331d-30ed-4b4a-8aab-04a7c4d073d9-Mask%20Group%205.svg" width={18} height={18} />
                                    </div>
                                    Web 3 Development
                                </Link>
                                <Link href="/blockchain" className={styles.dropdown_Item}>
                                    <div className={styles.icon}>
                                        <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/8441da4f-78d4-4e7a-bdc6-23a38c8aa45b-Custom-Blockchain-Development-1.svg%20%282%29.svg" width={18} height={18} />
                                    </div>
                                    Blockchain Development
                                </Link>
                                <Link href="/software" className={styles.dropdown_Item}>
                                    <div className={styles.icon}>
                                        <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/a54458f4-1908-4ea5-b9ff-f6a84d315011-Path%2033.svg" width={18} height={18} />
                                    </div>
                                    Customize Development
                                </Link>
                                <Link href="/internet-of-things" className={styles.dropdown_Item}>
                                    <div className={styles.icon}>
                                        <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/88191c4c-4112-4326-b182-72eb849d9bdd-internet-of-things.png" width={18} height={18} />
                                    </div>
                                    Internet of things
                                </Link>

                            </div>
                        </div>
                        <Link href="#" className={styles.menuItem}>Careers</Link>
                        <Link href="#" className={styles.menuItem}>About Us</Link>
                        <Link href="/portfolio" className={styles.menuItem}>Portfolio</Link>
                    </nav>
                    <button className={styles.contactButton} onClick={handleContactUs}>Contact us</button>
                </div>
            </div>
        </header >
    )
}

export default Header
