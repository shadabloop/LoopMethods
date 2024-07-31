import React from 'react'
import styled from "@/components/AIML/Service.module.scss"
import Button from '@/common/Button'
import Image from 'next/image'
// import videoBanner from "@/assets/images/banner.mp4"
import LeverageAiData from "@/components/AIML/LeverageAi.json"
import AiModal from "@/components/AIML/ai_modal.json"
import UnlockStrategic from "@/components/AIML/UnlockStrategic.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const AIMLPage = () => {
    return (
        <>
            <section className={styled.AIML_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 data-swiper-parallax="50%" className={styled.title}>
                                    Artificial <br />
                                    Intelligence & <br />
                                    Machine Learning</h1>
                                <p data-swiper-parallax="50%" className={styled.discription}>Maximize your business with our AI services. We streamline workflows, enhance efficiency, and offer AI consulting, custom app development, and integration. We also fine-tune models like GPT, Llama, PaLM, Mistral, and Gemini for your specific needs.</p>
                                <Button>Check our services</Button>
                            </div>
                            <div className={styled.rightPanel}>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/fb208af7-89f1-403a-b876-588ff5ef651e-Frame%2048095998.png" width={556} height={600} />
                            </div>
                        </div>
                        {/* <video autoplay muted loop id="myVideo">
                            <source src={videoBanner} type="video/mp4" />
                                Your browser does not support HTML5 video.
                        </video> */}
                    </div>
                </div>
            </section>
            <section className={styled.Leverage_AI}>
                <div className="container">
                    <p className={styled.smallTitle}> Boost performance with advanced AI !</p>
                    <h2 className={styled.heading}>Leverage AI for Next-Gen Enterprise Solutions</h2>

                    <div className={styled.service_wrapper}>
                        {
                            LeverageAiData.map((item) => (
                                <div className={styled.card}>
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

            <section className={`AIProfessionals_wrapper ${styled.AIProfessionals}`}>
                <div className="container">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation
                        modules={[Pagination,Navigation]}
                        loop={true}
                        className={styled.mainSlideWrap}
                    >
                        {
                            [1, 2, 3, 4].map((item, key) => (
                                <SwiperSlide className={styled.bannerCard} key={key}>
                                    <div className={styled.bannerWrapper}>
                                        <div className={styled.banner}>
                                            <div className={styled.leftPanel}>
                                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/84c1ddef-18f4-4d9f-96ad-75f139f51810-isometric%20view%20of%20young%20woman%20working%20on%20laptop.png" width={371} height={371} />

                                            </div>

                                            <div className={styled.rightPanel}>
                                                <small className={styled.small}><Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/cffc1716-60a4-40f6-9a9a-01722546cea8-Ellipse%206044.svg" width={8} height={8} /> Why Choose Loopmethods?</small>
                                                <h1 className={styled.title}>Expert AI Professionals</h1>
                                                <p className={styled.discription}>Loop methods boasts a team of skilled professionals with expertise in advanced AI technologies such as machine learning, natural language processing, and computer vision. </p>
                                                <p className={styled.discription}>With a proven track record of successful implementations, our experts build tailored products across diverse domains.</p>
                                                <Button className={styled.contact_us_btn}>Contact us</Button>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>

            <section className={styled.AI_Models_Wrapper}>
                <div className="container">
                    <h2 className={styled.heading}>AI Models We Have Expertise In.</h2>

                    <ul className={styled.ai_service_wrapper}>
                        {
                            AiModal.map((item) => (
                                <li className={styled.brand}>
                                    <Image src={item.url} width={74} height={74} />
                                    <h5 className={styled.title}>{item.title}</h5>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            <section className={styled.Unlock_Strategic_Growth}>
                <div className="container">
                    <h2 className={styled.heading}>Unlock Strategic Growth for Your Business With Our AI, Know-how ?</h2>

                    <div className={styled.service_wrapper}>
                        {
                            UnlockStrategic.map((item) => (
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

export default AIMLPage
