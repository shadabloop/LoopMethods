import React from 'react'
import styled from "./HomePage.module.scss"
import Button from '@/common/Button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./HomePage.module.scss"

import { Pagination } from 'swiper/modules';
import BannerData from "@/components/home/banner.json"

const HomePage = () => {


    // console.log(BannerData, "BannerData")
    return (
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
    )
}

export default HomePage
