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
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const AIMLPage = () => {
    return (
        <>
            <section className={styled.AIML_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 className={styled.title}>
                                    <span>Artificial</span> <br />
                                    Intelligence & <br />
                                    <span>Machine</span> Learning</h1>
                                <p className={styled.discription}>Maximize your business with our AI services. We streamline workflows, enhance efficiency, and offer AI consulting, custom app development, and integration. We also fine-tune models like GPT, Llama, PaLM, Mistral, and Gemini for your specific needs.</p>
                                <Button className={styled.service_btn}>Check our services</Button>
                            </div>
                            <div className={styled.rightPanel}>
                                <Image data-aos="fade-up" data-aos-duration="700" className={styled.ai_images} src="https://frequencyimage.s3.ap-south-1.amazonaws.com/20132b50-58d2-4adc-acd8-b808267ed567-woman-with-orange-hair-wearing-headband-that-says-company.png" width={556} height={600} />
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
                    <p className={styled.smallTitle} data-aos="fade-up" data-aos-duration="700"> Boost performance with advanced AI !</p>
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="800">Leverage AI for Next-Gen Enterprise Solutions</h2>

                    <div className={styled.service_wrapper}>
                        {
                            LeverageAiData.map((item) => (
                                <div className={styled.card} data-aos="fade-up" data-aos-duration="900">
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
                                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/7a4141fc-14aa-46ea-9b53-314ea3c120fb-ordinary-human-job-performed-by-anthropomorphic-robot.jpg"
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />

                                            </div>

                                            <div className={styled.rightPanel}>
                                                <small data-aos="fade-up" data-aos-duration="700" className={styled.small}><Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/cffc1716-60a4-40f6-9a9a-01722546cea8-Ellipse%206044.svg" width={8} height={8} /> Why Choose Loopmethods?</small>
                                                <h1 data-aos="fade-up" data-aos-duration="800" className={styled.title}>Expert AI Professionals</h1>
                                                <p data-aos="fade-up" data-aos-duration="900" className={styled.discription}>Loop methods boasts a team of skilled professionals with expertise in advanced AI technologies such as machine learning, natural language processing, and computer vision. </p>
                                                <p data-aos="fade-up" data-aos-duration="1000" className={styled.discription}>With a proven track record of successful implementations, our experts build tailored products across diverse domains.</p>
                                                <div data-aos="fade-up" data-aos-duration="1100">
                                                    <Button className={styled.contact_us_btn}>Contact us</Button>
                                                </div>
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
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700">AI Models We Have Expertise In.</h2>

                    <ul className={styled.ai_service_wrapper}>
                        {
                            AiModal.map((item, index) => (
                                <li className={styled.brand} data-aos="fade-up" data-aos-duration="800">
                                    <Image src={item.url} width={54} height={54} />
                                    <h5 className={styled.title}>{item.title}</h5>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            <section className={styled.Unlock_Strategic_Growth}>
                <div className="container">
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700">Unlock Strategic Growth with Our AI Expertise</h2>

                    <div className={styled.service_wrapper}>
                        {
                            UnlockStrategic.map((item, key) => (
                                <div className={styled.card} data-aos="fade-up" data-aos-duration="900">
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
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700">Start a conversation by filling the form</h2>
                    <p className={styled.description} data-aos="fade-up" data-aos-duration="800">Complete the form below and we will contact you to discuss your project.
                        Your information will be kept confidential.</p>

                    <form className={styled.form} data-aos="fade-up" data-aos-duration="900">
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
