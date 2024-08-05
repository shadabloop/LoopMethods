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
                                <h1 className={styled.title}><span>Services</span></h1>
                                <p className={styled.discription}>Establish a solid foundation in the evolving digital space with our technology services. From AI-powered solutions that enhance productivity and simplify decision-making to IoT systems that connect and optimize operations and Web3 applications that redefine trust and decentralization, our service offerings cater to diverse business needs across various sectors.</p>
                            </div>
                            <div className={styled.rightPanel} data-aos="fade-up" data-aos-duration="700">
                                <Image 
                                    src="https://frequencyimage.s3.ap-south-1.amazonaws.com/6b147efb-9afb-4fe9-989d-1711806e5c24-view-3d-woman-using-laptop-0-5jpg.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            {/* <div className={styled.rightPanel}>
                                <Image data-aos="fade-up" data-aos-duration="700"  src="https://frequencyimage.s3.ap-south-1.amazonaws.com/6b147efb-9afb-4fe9-989d-1711806e5c24-view-3d-woman-using-laptop-0-5jpg.png" width={595} height={456} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.PortfolioPage_development_wrapper}>
                <div className="container">
                    <p className={styled.smallTitle}>Our Service Model !</p>
                    <h2 className={styled.heading}>Maximize advantage with AI, IoT, Cloud, Blockchain.</h2>
                    <div className={styled.industry_service_wrapper}>
                        {
                            services.map((item, key) => (
                                <div className={styled.card} data-aos="fade-up" data-aos-duration="900">
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
                        <h2 className={styled.title} data-aos="fade-up" data-aos-duration="700">About IT Advisory/ Consulting</h2>
                        <p className={styled.decription} data-aos="fade-up" data-aos-duration="800">IT Advisory and Consulting helps you uncover the proven solutions to the challenges you are facing. Receive personalized recommendations from our experts on how to move your business in the desired direction.</p>
                        <p className={styled.decription} data-aos="fade-up" data-aos-duration="900">Our goal is to diagnose shortcomings in your products, report them to you, and suggest the best possible path to getting to where you want to be. As an IT Advisory/Consulting provider, we consider your industry, strategic growth levers, and competitive advantages, to develop a viable roadmap for advancement.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicePage
