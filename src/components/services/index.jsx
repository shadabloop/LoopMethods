import React, { useState } from 'react';
import services from "@/components/services/services.json";
import styled from "@/components/services/service.module.scss"
import Image from 'next/image';
import Button from '@/common/Button';

const ServicePage = () => {

    return (
        <>
            <section className={styled.PortfolioPage_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 data-swiper-parallax="50%" className={styled.title}>Services</h1>
                                <p data-swiper-parallax="50%" className={styled.discription}>Establish a solid foundation in the evolving digital space with our technology services. From AI-powered solutions that enhance productivity and simplify decision-making to IoT systems that connect and optimize operations and Web3 applications that redefine trust and decentralization, our service offerings cater to diverse business needs across various sectors.</p>
                            </div>
                            <div className={styled.rightPanel}>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/e3881bcb-6c99-4900-a59b-22ae90544d62-isometric%20view%20of%20colleagues%20working%20and%20talking%20in%20the%20office.png" width={595} height={456} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.PortfolioPage_development_wrapper}>
                <div className="container">
                    <p className={styled.smallTitle}>Our Service Model !</p>
                    <h2 className={styled.heading}>Tech solutions: AI, IoT, Cloud, Blockchain expertise for your advantage.</h2>
                    <div className={styled.industry_service_wrapper}>
                        {
                            services.map((item, key) => (
                                <div className={styled.card}>
                                    <div className={styled.icons_group}>
                                        <div className={styled.service_icon}>
                                            <Image src={item.url} width={65} height={65} />
                                        </div>

                                        <div className={styled.next_Icon}>
                                            <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/2d1f019e-5256-4f1d-87b5-e02383faf981-ic_outline-navigate-next.svg" width={32} height={32} />
                                        </div>
                                    </div>
                                    <h5 className={styled.title}>{item.title}</h5>
                                    <p className={styled.description}>{item.description}</p>

                                    <ul className={styled.service_list}>
                                        {
                                            item.service.map((item, key) => (
                                                <li key={key} className={styled.service_item}>
                                                    {item.title}
                                                    <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/b407dd2c-2cc8-4dae-af09-62d91855cf5a-teenyicons_arrow-solid.svg" width={24} height={24} />
                                                </li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className={styled.advisory_wrapper}>
                <div className="container">
                    <div className={styled.advisory_content}>
                        <h2 className={styled.title}>About IT Advisory/ Consulting</h2>
                        <p className={styled.decription}>IT Advisory and Consulting helps you uncover the proven solutions to the challenges you are facing. Receive personalized recommendations from our experts on how to move your business in the desired direction.</p>
                        <p className={styled.decription}>Our goal is to diagnose shortcomings in your products, report them to you, and suggest the best possible path to getting to where you want to be. As an IT Advisory/Consulting provider, we consider your industry, strategic growth levers, and competitive advantages, to develop a viable roadmap for advancement.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicePage
