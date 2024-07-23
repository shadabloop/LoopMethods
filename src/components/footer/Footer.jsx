import React from 'react'
import styles from "@/components/footer/Footer.module.scss";
import Link from 'next/link';
import Logo from "@/assets/brand-logo/logo.svg"
import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Youtube from "@/assets/icons/youtube.svg";
import Arrow from "@/assets/icons/footArrow.svg";
import Location from "@/assets/icons/footLocation.svg";
import Phone from "@/assets/icons/footPhone.svg";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className="container">
                <div className={styles.footerHead}>
                    <div class={styles.logo}>
                        <Image src={Logo} alt="Logo" className={styles.logoImage} width={154} height={60} />
                    </div>
                    <p className={styles.footerDescription}>Offering comprehensive IT solutions, our company excels in provid cutting-edge technology services tailored to meet your business
                        needs. <br /> From software development.. </p>

                    <ul className={styles.socialMedia}>
                        <li className={styles.socialMediaItem}>
                            <Link href="#" className={styles.socialMediaLink}>
                                <Image src={Facebook} alt="Facebook" className={styles.Icon} width={18} height={18} />
                            </Link>
                        </li>
                        <li className={styles.socialMediaItem}>
                            <Link href="#" className={styles.socialMediaLink}>
                                <Image src={Twitter} alt="Twitter" className={styles.Icon} width={18} height={18} />
                            </Link>
                        </li>
                        <li className={styles.socialMediaItem}>
                            <Link href="#" className={styles.socialMediaLink}>
                                <Image src={Youtube} alt="Youtube" className={styles.Icon} width={18} height={18} />
                            </Link>
                        </li>
                        <li className={styles.socialMediaItem}>
                            <Link href="#" className={styles.socialMediaLink}>
                                <Image src={Instagram} alt="Instagram" className={styles.Icon} width={18} height={18} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerBody}>
                    <div className={styles.websiteLink}>
                        <div className={styles.otherLink}>
                            <h5 className={styles.footertitle}>Other Links</h5>

                            <Link href="#" className={styles.url}>About us <Image src={Arrow} width={24} height={24} alt='arrow' /></Link>
                            <Link href="#" className={styles.url}>Our Services <Image src={Arrow} width={24} height={24} alt='arrow' /></Link>
                            <Link href="#" className={styles.url}>Portfolio <Image src={Arrow} width={24} height={24} alt='arrow' /></Link>
                            <Link href="#" className={styles.url}>Home <Image src={Arrow} width={24} height={24} alt='arrow' /></Link>
                        </div>
                        <div className={styles.companyLink}>
                            <h5 className={styles.footertitle}>Company Links</h5>
                            <Link href="#" className={styles.url}>Our Portfolio <Image src={Arrow} width={24} height={24} alt='arrow' /></Link>
                            <Link href="#" className={styles.url}>Our Pricing <Image src={Arrow} width={24} height={24} alt='arrow' /></Link>
                            <Link href="#" className={styles.url}>Team Members <Image src={Arrow} width={24} height={24} alt='arrow' /></Link>
                            <Link href="#" className={styles.url}>Testimonials <Image src={Arrow} width={24} height={24} alt='arrow' /></Link>
                            <Link href="#" className={styles.url}>FAQ <Image src={Arrow} width={24} height={24} alt='arrow' /></Link>
                        </div>
                    </div>
                    <div className={styles.addressWrap}>
                        <h5 className={styles.footertitle}>Contact Us</h5>

                        <div className={styles.contactWrap}>
                            <Image src={Location} width={24} height={24} alt='arrow' />
                            <p className={styles.address}>Lorem ipsum dolor sit amet consectetur. <br /> Aliquet eu adipiscing egesta</p>
                        </div>
                        <div className={styles.contactWrap}>
                            <Image src={Phone} width={24} height={24} alt='arrow' />
                            <p className={styles.number}>12345677564838</p>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <p className={styles.copyRightTitle}>@2024 All Rights reserved</p>

                    <ul className={styles.securityList}>
                        <li className={styles.securityItem}>
                            <Link href="#" className={styles.securityLink}>Privacy Policy</Link>
                        </li>
                        <li className={styles.securityItem}>
                            <Link href="#" className={styles.securityLink}>Terms of Use</Link>
                        </li>
                        <li className={styles.securityItem}>
                            <Link href="#" className={styles.securityLink}>Site Map</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
