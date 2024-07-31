import React from 'react';
import lotSolution from "@/components/internet-of-things/lotSolution.json";
import styled from "@/components/internet-of-things/InternetOfThingsPage.module.scss"
import Image from 'next/image';
import Button from '@/common/Button';

const InternetOfThingsPage = () => {
    return (
        <>
            <section className={styled.InternetOfThings_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 data-swiper-parallax="50%" className={styled.title}>IoT Development </h1>
                                <p data-swiper-parallax="50%" className={styled.discription}>As a full-stack IoT Development Company, we help startups and
                                    enterprises build smart IoT solutions and convert analog products
                                    into digital products using IoT platforms, firmware and sensors.</p>
                                <Button>Check our services</Button>
                            </div>
                            <div className={styled.rightPanel}>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/ba360959-2ae6-45b7-bbfb-dd06ddb9e520-Frame%2048096000%20%281%29.png" width={656} height={600} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.InternetOfThings_development_wrapper}>
                <div className="container">
                    <p className={styled.smallTitle}>Full-stack, secure custom IoT app development !</p>
                    <h2 className={styled.heading}>Custom IoT Solutions for Startups and Enterprises</h2>

                    <div className={styled.service_wrapper}>
                        {
                            lotSolution.map((item) => (
                                <div className={styled.card}>
                                    <div className={styled.icon}>
                                        <Image src={item.url} width={60} height={60} />
                                    </div>
                                    <h5 className={styled.title}>{item.title}</h5>
                                    <p className={styled.description}>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className={styled.form_wrapper}>
                <div className="container">
                    <h2 className={styled.heading}>Start a conversation by filling the form</h2>
                    <p className={styled.description}>Complete the form below and we will contact you to discuss your project.
                        Your information will be kept confidential.</p>

                    <form className={styled.form}>
                        <div className={styled.row}>
                            <div className={styled.input_wrapper}>
                                <input type="text" className={styled.form_control} placeholder='Name' />
                            </div>
                            <div className={styled.input_wrapper}>
                                <input type="number" className={styled.form_control} placeholder='Phone' />
                            </div>
                        </div>
                        <div className={styled.row}>
                            <div className={styled.input_wrapper}>
                                <input type="text" className={styled.form_control} placeholder='Company' />
                            </div>
                            <div className={styled.input_wrapper}>
                                <input type="email" className={styled.form_control} placeholder='Email *' />
                            </div>
                        </div>
                        <div className={styled.column}>
                            <div className={styled.input_wrapper}>
                                <textarea type="text" row={5} className={styled.form_control} placeholder='Tell us About Your Project' />
                            </div>
                        </div>
                        <Button type='submit' className={styled.submit_btn}>start Conversation</Button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default InternetOfThingsPage
