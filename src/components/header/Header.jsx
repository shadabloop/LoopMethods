import React, { useEffect, useState } from 'react'
import styles from "@/components/header/Header.module.scss";
import Logo from "@/assets/brand-logo/logo.svg"
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

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

    return (
        <header className={`${styles.headerWrapper} ${scrolled ? styles.stickyActive : ""}`}>
            <div className="container">
                <div className={styles.header}>
                    <Link href="/" class={styles.logo}>
                        <Image src={Logo} alt="Logo" className={styles.logoImage} width={154} height={60} />
                    </Link>
                    <nav class={styles.menu}>
                        <Link href="/" className={styles.menuItem}>Home</Link>
                        <Link href="#" className={styles.menuItem}>Services</Link>
                        <Link href="/sadasda" className={styles.menuItem}>Careers</Link>
                        <Link href="#" className={styles.menuItem}>About Us</Link>
                        <Link href="#" className={styles.menuItem}>Portfolio</Link>
                    </nav>
                    <button className={styles.contactButton}>Contact us</button>
                </div>
            </div>
        </header >
    )
}

export default Header
