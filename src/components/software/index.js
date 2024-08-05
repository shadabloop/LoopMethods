import React from 'react'
import styled from "@/components/software/Software.module.scss"
import Button from '@/common/Button'
import Image from 'next/image'
import LeverageAiData from "@/components/software/LeverageAi.json"
import UnlockStrategic from "@/components/software/UnlockStrategic.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const SoftwarePage = () => {
    return (
        <>
            <section className={styled.service_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 data-aos="fade-up" data-aos-duration="700" className={styled.title}><span>Software</span>  Development </h1>
                                <p data-aos="fade-up" data-aos-duration="800" className={styled.discription}>Our expert developers use AI, ML, blockchain, and advanced technologies to create innovative software solutions. Whether you’re a startup or an enterprise, we bring your vision to life. Partner with us for robust, tailored software to streamline processes, enhance productivity, and ensure success in today’s evolving market.</p>
                                <div data-aos="fade-up" data-aos-duration="900" >
                                    <Button>Check our services</Button>
                                </div>
                            </div>
                            {/* <div className={styled.rightPanel}>
                                <Image data-aos="fade-up" data-aos-duration="700" src="https://frequencyimage.s3.ap-south-1.amazonaws.com/585dda45-7e53-4b74-8e97-b9dcd8b000b1-Services_Enterprise-Application-Development_Custom-Software-Engineering.webp" width={556} height={600} />
                            </div> */}
                            <div className={styled.rightPanel} data-aos="fade-up" data-aos-duration="700">
                                <Image 
                                    src="https://frequencyimage.s3.ap-south-1.amazonaws.com/31a16a63-44ed-4957-9b61-00ffa978f04f-new-generation-artificial-inteligence-robotic-tech-mechines.jpg"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.Leverage_AI}>
                <div className="container">
                    <p className={styled.smallTitle} data-aos="fade-up" data-aos-duration="700" >Empower Your Business with Custom Software !</p>
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="800" >Custom Software Development Services We Offer.</h2>

                    <div className={styled.service_wrapper}>
                        {
                            LeverageAiData.map((item) => (
                                <div className={styled.card} data-aos="fade-up" data-aos-duration="900" >
                                    <div className={styled.icon}>
                                        <Image src={item.url} width={50} height={50} />
                                    </div>
                                    <h5 className={styled.title}>{item.title}</h5>
                                    <p className={styled.description}>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className={styled.Unlock_Strategic_Growth}>
                <div className="container">
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700" >Types of Software we Build.</h2>

                    <div className={styled.service_wrapper}>
                        {
                            UnlockStrategic.map((item) => (
                                <div className={styled.card} data-aos="fade-up" data-aos-duration="900" >
                                    <div className={styled.icon}>
                                        <Image src={item.url} width={60} height={60} />
                                    </div>
                                    <h5 className={styled.title}>{item.title}</h5>
                                    <p className={styled.description}>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className={styled.serviceContent}>
                        <h2 className={styled.title} data-aos="fade-up" data-aos-duration="700" >Ready to build a software solution?</h2>
                        <p className={styled.subTitle} data-aos="fade-up" data-aos-duration="800" >We hire the top 1% of IT talent to deliver you innovative and secure technology solutions.</p>
                        <div data-aos="fade-up" data-aos-duration="700" >
                            <Button className={styled.contact_us_btn}>Contact us</Button>
                        </div>
                    </div>

                </div>
            </section>

            <section className={`AIProfessionals_wrapper ${styled.AIProfessionals}`}>
                <div className="container">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation
                        modules={[Pagination, Navigation]}
                        loop={true}
                        className={styled.mainSlideWrap}
                    >
                        {
                            [1, 2, 3, 4].map((item, key) => (
                                <SwiperSlide className={styled.bannerCard} key={key}>
                                    <div className={styled.bannerWrapper}>
                                        <div className={styled.banner}>
                                            <div className={styled.leftPanel}>
                                                <Image data-aos="fade-up" data-aos-duration="700"  src="https://frequencyimage.s3.ap-south-1.amazonaws.com/4b0dacd7-52bf-4ec4-8c47-c3fe0ddfcfde-smartphone%20balancing%20on%20abstract%20figures.png" width={302} height={401} />

                                            </div>

                                            <div className={styled.rightPanel}>
                                                <small className={styled.small} data-aos="fade-up" data-aos-duration="700" ><Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/cffc1716-60a4-40f6-9a9a-01722546cea8-Ellipse%206044.svg" width={8} height={8} /> Why Choose Loopmethods?</small>
                                                <h1 className={styled.title} data-aos="fade-up" data-aos-duration="800" >Expertise and Experience</h1>
                                                <p className={styled.discription} data-aos="fade-up" data-aos-duration="900" >With over 15 years of industry experience, Loopmethods leads the way in delivering software solutions tailored to meet the unique needs of clients across diverse industries.</p>
                                                <p className={styled.discription} data-aos="fade-up" data-aos-duration="900" >Our deep expertise in advanced technologies and software development enables us to create highly performant solutions that drive success in our clients’ endeavors.</p>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>

            <section className={styled.form_wrapper}>
                <div className="container">
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700" >Start a conversation by filling the form</h2>
                    <p className={styled.description} data-aos="fade-up" data-aos-duration="800" >Complete the form below and we will contact you to discuss your project.
                        Your information will be kept confidential.</p>

                    <form className={styled.form} data-aos="fade-up" data-aos-duration="900" >
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

export default SoftwarePage
