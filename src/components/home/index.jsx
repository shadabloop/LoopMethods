import React, { useState } from 'react'
import styled from "./HomePage.module.scss"
import Button from '@/common/Button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./HomePage.module.scss"

import { Pagination } from 'swiper/modules';
import BannerData from "@/components/home/banner.json"
import tabListdata from "@/components/home/tabList.json"
import featureSliderData from "@/components/home/featureSlider.json"

const HomePage = () => {

    const [isActiveTab, setIsActiveTab] = useState("Internet of Things")
    // console.log(BannerData, "BannerData")
    const [currentContent, setCurrentContent] = useState({ title: '', description: '', url: '' });


    const HandleTab = (val) => {
        setIsActiveTab(val)
    }

    // Handler for slide change
    const handleSlideChange = (swiper) => {
        const index = swiper.realIndex;
        if (featureSliderData.length > index) {
            setCurrentContent(featureSliderData[index]);
        }
    };

    return (
        <>
            <section className={styled.swipperWrapper}>
                <div className="container">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        loop={true}
                        className={styled.mainSlideWrap}
                    >
                        {
                            BannerData.map((item, key) => (
                                <SwiperSlide className={styled.bannerCard} key={key}>
                                    <div className={styled.bannerWrapper}>
                                        {/* <div className="container"> */}
                                        <div className={styled.banner}>
                                            <div className={styled.leftPanel}>
                                                <h1 data-swiper-parallax="50%" className={styled.title}>{item.name}</h1>
                                                <p data-swiper-parallax="50%" className={styled.discription}>{item.description}</p>
                                                <Button>Check our services</Button>
                                            </div>
                                            <div className={styled.rightPanel}>
                                                <Image src={item.url} width={417} height={456} />
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
            <section className={styled.businessGrowthWrapper}>
                <div className="container">
                    <h5 className={styled.mainTital}>Navigate the Digital Frontier</h5>
                    <h2 className={styled.title}>Your Partner in Tech-Driven Business Growth.</h2>
                    <p className={styled.paragraph}>With enough data, the numbers speak for themselves.</p>

                    <div className={styled.cardGroup}>
                        <div className={styled.card}>
                            <h2 className={styled.cardTitle}>Global Presence</h2>
                            <h3 className={styled.count}>16+</h3>
                            <p className={styled.description}>Collaborating with businesses worldwide through innovative technological solution.</p>
                        </div>
                        <div className={styled.card}>
                            <h2 className={styled.cardTitle}>COSTUMER SATISFECTION</h2>
                            <h3 className={styled.count}>100+</h3>
                            <p className={styled.description}>Transforming challenges into opportunities, ensuring success through relentless pursuit of excellence.</p>
                        </div>
                        <div className={styled.card}>
                            <h2 className={styled.cardTitle}>PROJRCT DELIVERED</h2>
                            <h3 className={styled.count}>60+</h3>
                            <p className={styled.description}>Crafting excellent solutions to transform businesses across industries.</p>
                        </div>
                        <div className={styled.card}>
                            <h2 className={styled.cardTitle}>CONSULTANTS</h2>
                            <h3 className={styled.count}>14+</h3>
                            <p className={styled.description}>Diverse experts unite to drive transformative technological solutions.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.PowerfulSolutionWrapper}>
                <div className="container">
                    <h5 className={styled.mainTital}>solution for every industry</h5>
                    <h2 className={styled.title}>A Powerful solutions engineered for global businesses.</h2>
                    <p className={styled.paragraph}>With enough data, the numbers speak for themselves.</p>

                    <div className={styled.cardGroup}>
                        <div className={styled.card}>
                            <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/470d2585-d8df-4a67-abac-6e6de8b61c81-web3.svg" className={styled.svgIcons} alt='WEB 3 DEVELOPMENT' height={89} width={89} />
                            <h2 className={styled.cardTitle}>WEB 3 DEVELOPMENT</h2>
                            <p className={styled.description}>Expert web3 solutions using blockchain, AI, IoT, cryptography.</p>
                            <Button type='button' className={styled.exploreBtn}>explore service</Button>
                        </div>
                        <div className={styled.card}>
                            <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/ce9a5a02-4cd8-4ba3-b38b-059ff06b0f41-Ai.svg" className={styled.svgIcons} alt='WEB 3 DEVELOPMENT' height={89} width={89} />
                            <h2 className={styled.cardTitle}>Artificial Intelligence & Machine Learning</h2>
                            <p className={styled.description}>Maximize efficiency with custom AI solutions and integrations.</p>
                            <Button type='button' className={styled.exploreBtn} >explore service</Button>
                        </div>
                        <div className={styled.card}>
                            <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/a23544ec-2cfe-49fb-8730-9584aa048fc1-softwareDV.svg" className={styled.svgIcons} alt='WEB 3 DEVELOPMENT' height={89} width={89} />
                            <h2 className={styled.cardTitle}>SOFTWARE DEVELOMENT</h2>
                            <p className={styled.description}>Innovative software solutions for startups and enterprises.</p>
                            <Button type='button' className={styled.exploreBtn} >explore service</Button>
                        </div>
                        <div className={styled.card}>
                            <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/b6e17f50-b783-479c-98f6-8747db97e4f3-Software-Integration.svg.svg" className={styled.svgIcons} alt='WEB 3 DEVELOPMENT' height={89} width={89} />
                            <h2 className={styled.cardTitle}>BLOCKCHAIN DEVELOPMENT</h2>
                            <p className={styled.description}>Expert blockchain solutions for sustainable growth.</p>
                            <Button type='button' className={styled.exploreBtn} >explore service</Button>
                        </div>

                    </div>
                </div>
            </section>
            <section className={styled.graphWrapper}>
                <div className="container">
                    <div className={styled.graphWrap}>
                        <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/f8f452a5-a479-4704-93f7-ca165bf7c559-graph2.png"
                            className={styled.upperImage}
                            alt='graph'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/45bc68ed-3576-4963-96f6-024b6575ffbe-graph1.png"
                            className={styled.lowerImage}
                            alt='graph'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto', position: "absolute", left: "0", bottom: "97px", zIndex: "-1" }}
                        />
                    </div>
                </div>
            </section>

            <section className={styled.ProcessOfWorkingWrapper}>
                <div className="container">
                    <h2 className={styled.title}>Process of working </h2>

                    <div className={styled.tabContainer}>
                        <ul className={styled.tabList}>
                            {
                                tabListdata.map((item, key) => (
                                    <li className={`${styled.tabItem} ${isActiveTab === item.name ? styled.active : ""}`} key={key} onClick={() => HandleTab(item.name)}>{item.name}</li>
                                ))
                            }
                        </ul>

                        <div className={styled.tabContentWrap}>
                            {
                                tabListdata.filter((val => val.name === isActiveTab)).map((item, key) => (
                                    <>
                                        <p className={styled.para}>{item.title}</p>
                                        <div className={styled.tabContent}>
                                            <div className={styled.leftContent}>
                                                <h1 className={styled.mainHeading}>{item.description}</h1>
                                                <Image src={item.image} className={styled.gallery__img} alt='' height={395} width={395} />
                                            </div>
                                            <div className={styled.rightContent}>
                                                {
                                                    item.cardData.map((subItem, key) => (
                                                        <div className={styled.card}>
                                                            <h6 className={styled.Subtitle}>{subItem?.title}</h6>
                                                            <h2 className={styled.title}>{subItem?.description}</h2>
                                                            <div className={styled.Icon}>
                                                                <Image src={subItem.url} className={styled.gallery__img} alt='' height={60} width={60} />
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>

            <section className={styled.whyChoseUs_Wrapper}>
                <div className="container">
                    <div className={styled.whyChoseUs}>
                        <div className={styled.leftPanel}>
                            <Image
                                src="https://frequencyimage.s3.ap-south-1.amazonaws.com/f30c2195-c712-4cf1-9d00-94ff64524284-logo1.svg"
                                className={styled.logo}
                                alt='graph'
                                width={131}
                                height={38}
                            />
                            <h5 className={styled.heading}>WHY CHOOSE US ?</h5>
                            <button className={styled.contact_btn}>Contact US</button>
                        </div>
                        <div className={styled.rightPanel}>
                            <div className={styled.card}>
                                <h4 className={styled.count}>01.</h4>
                                <h2 className={styled.title}>Industry Expertise </h2>
                                <p className={styled.description}>With years of experience delivering custom solutions across multiple industries, we bring deep domain knowledge to understand your unique business challenges and craft tailored applications that drive efficiency and competitiveness.</p>
                            </div>
                            <div className={styled.card}>
                                <h4 className={styled.count}>02.</h4>
                                <h2 className={styled.title}>Cutting-Edge Technology </h2>
                                <p className={styled.description}>With years of experience delivering custom solutions across multiple industries, we bring deep domain knowledge to understand your unique business challenges and craft tailored applications that drive efficiency and competitiveness.</p>
                            </div>
                            <div className={styled.card}>
                                <h4 className={styled.count}>03.</h4>
                                <h2 className={styled.title}>User-Centric Design</h2>
                                <p className={styled.description}>We prioritize user experience, employing user-centered design principles and usability testing to develop intuitive, engaging applications that boost productivity and user adoption.</p>
                            </div>
                            <div className={styled.card}>
                                <h4 className={styled.count}>04.</h4>
                                <h2 className={styled.title}>Agile Collaboration</h2>
                                <p className={styled.description}>Through our agile development approach, we foster close collaboration with your team, ensuring applications align with your evolving needs and market dynamics.</p>
                            </div>
                            <div className={styled.card}>
                                <h4 className={styled.count}>05.</h4>
                                <h2 className={styled.title}>Robust Security</h2>
                                <p className={styled.description}>Robust Security: Security is at the core of our development process, with stringent secure coding practices, data protection measures, and compliance with industry regulations, safeguarding your critical applications and data.</p>
                            </div>
                            <div className={styled.card}>
                                <h4 className={styled.countTitle}>Need  more ?</h4>
                                <h2 className={styled.title}>See Some Case Studies </h2>
                                {/* <Image
                                    src="https://frequencyimage.s3.ap-south-1.amazonaws.com/f5c03501-6f9f-4138-99bd-eff9c07704a4-Group%2048095488.svg"
                                    alt='graph'
                                    width={113}
                                    height={113}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.FeaturedCases_Wrapper}>
                <div className="container">
                    <h5 className={styled.title}>Featured Cases</h5>

                    <div className={styled.taskManagement_wrap}>
                        <div className={styled.taskContent}>
                            <h3 className={styled.main_kind}>{currentContent.title}</h3>
                            <p className={styled.description}>{currentContent.description}</p>
                            <Button>read more</Button>
                        </div>
                        <div className={`Featured-Cases ${styled.taskSlider}`}>
                            <Swiper
                                slidesPerView={2.5}
                                spaceBetween={3}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                    className: `${styled.custom_pagination}`,
                                }}
                                onSlideChange={handleSlideChange} // Event listener for slide change
                                modules={[Pagination]}
                                // breakpoints={{
                                //     640: {
                                //         slidesPerView: 2,
                                //         spaceBetween: 20,
                                //     },
                                //     768: {
                                //         slidesPerView: 4,
                                //         spaceBetween: 40,
                                //     },
                                //     1024: {
                                //         slidesPerView: 5,
                                //         spaceBetween: 50,
                                //     },
                                // }}
                                className={styled.mySwiper}
                            >
                                {featureSliderData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image src={item.url} className={styled.SliderImage} width={269} height={335} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
