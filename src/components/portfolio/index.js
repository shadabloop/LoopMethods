import React, { useState } from 'react';
import industry from "@/components/portfolio/industry.json";
import styled from "@/components/portfolio/PortfolioPagePage.module.scss"
import Image from 'next/image';
import Button from '@/common/Button';

const PortfolioPage = () => {
    const [isActiveTab, setIsActiveTab] = useState("All")

    const HandleTab = (val) => {
        setIsActiveTab(val)
    }
    return (
        <>
            <section className={styled.PortfolioPage_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 className={styled.title}><span>Portfolio</span></h1>
                                <p className={styled.discription}>Lorem ipsum dolor sit amet consectetur. Quisque nibh pulvinar metus nunc vivamus pharetra lacus. Cum rhoncus egestas quis leo rhoncus tristique enim malesuada. Dignissim et a metus nec. Nunc laoreet enim volutpat molestie.</p>
                            </div>
                            <div className={styled.rightPanel}>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/171d307c-2618-4a1c-be25-73da6da39769-top%20view%20of%20laptop%2C%20cup%20of%20coffee%2C%20notebooks%20and%20letters.png" width={522} height={512} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.PortfolioPage_development_wrapper}>
                <div className="container">
                    <div className={styled.tabContainer}>
                        <ul className={styled.tabList}>
                            {
                                industry.map((item, key) => (
                                    <li className={`${styled.tabItem} ${isActiveTab === item.name ? styled.active : ""}`} key={key} onClick={() => HandleTab(item.name)}>{item.name}</li>
                                ))
                            }
                        </ul>

                        <div className={styled.industry_service_wrapper}>
                            {
                                industry.filter((val => val.name === isActiveTab))[0]?.cardData?.map((item, key) => (
                                    <div className={styled.card} data-aos="fade-up" data-aos-duration="5000">
                                        <h5 className={styled.title}>{item.title}</h5>
                                        <p className={styled.description}>{item.subTitle}</p>
                                        <h3 className={styled.subTitle}>{item.description}</h3>
                                        <div className={styled.icon}>
                                            Know more 
                                            <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/b407dd2c-2cc8-4dae-af09-62d91855cf5a-teenyicons_arrow-solid.svg" width={24} height={24} />
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioPage
