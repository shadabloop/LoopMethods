import React from 'react';
import styled from "@/components/about-us/about-us.module.scss"
import Image from 'next/image';
import Button from '@/common/Button';

const AboutUsPage = () => {
    return (
        <>
            <section className={styled.AboutUs_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 className={styled.title}>We at <span>Loop Methods.</span></h1>
                                <p className={styled.discription}>Offer comprehensive e-business solutions, including strategy, design, development, and technology services across various platforms. With a global team and presence, we ensure competitive advantage through cutting-edge innovation and user-centric design.</p>
                                <Button className={styled.service_btn}>Check our services</Button>
                            </div>
                            <div className={styled.rightPanel}>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/e3881bcb-6c99-4900-a59b-22ae90544d62-isometric%20view%20of%20colleagues%20working%20and%20talking%20in%20the%20office.png" width={595} height={456} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.AboutUs_development_wrapper}>
                <span className={styled.bubble}></span>
                <div className="container">
                    <p className={styled.title} data-aos="fade-up" data-aos-duration="700">Our Mission</p>
                    <h2 className={styled.description} data-aos="fade-up" data-aos-duration="800">Loop methods is dedicated to revolutionizing the IT industry through custom application development, Android application expertise, QA as a service, and Web 3.0. Our goal is to provide unparalleled solutions that empower businesses to efficiently and effectively achieve their digital transformation objectives.</h2>

                    <p className={styled.title} data-aos="fade-up" data-aos-duration="700">Our Vision</p>
                    <h2 className={styled.description} data-aos="fade-up" data-aos-duration="800">We are committed to creating a future where technology seamlessly integrates with businesses to drive innovation and sustainable global growth. Through continuous learning and adaptation, we are determined to lead in shaping the digital landscape.</h2>
                </div>
            </section>
            <section className={styled.Our_Journey_Wrapper}>
                <div className="container">
                    <h2 className={styled.title} data-aos="fade-up" data-aos-duration="700">Our Journey</h2>

                    <div className={styled.timeline}>
                        <div className={`${styled.container_timeline} ${styled.left}`}>
                            <div className={styled.content}>
                                <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700">2009</h2>
                                <p className={styled.description} data-aos="fade-up" data-aos-duration="800">Lorem ipsum dolor sit amet consectetur. Quisque nibh pulvinar metus nunc vivamus pharetra lacus. Cum rhoncus egestas quis leo rhoncus tristique enim malesuada. Dignissim et a metus nec. Nunc laoreet enim volutpat molestie.</p>
                            </div>
                        </div>
                        <div className={`${styled.container_timeline} ${styled.right}`}>
                            <div className={styled.content}>
                                <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700">2016</h2>
                                <p className={styled.description} data-aos="fade-up" data-aos-duration="800">Lorem ipsum dolor sit amet consectetur. Quisque nibh pulvinar metus nunc vivamus pharetra lacus. Cum rhoncus egestas quis leo rhoncus tristique enim malesuada. Dignissim et a metus nec. Nunc laoreet enim volutpat molestie.</p>
                            </div>
                        </div>
                        <div className={`${styled.container_timeline} ${styled.left}`}>
                            <div className={styled.content}>
                                <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700">2015</h2>
                                <p className={styled.description} data-aos="fade-up" data-aos-duration="800">Lorem ipsum dolor sit amet consectetur. Quisque nibh pulvinar metus nunc vivamus pharetra lacus. Cum rhoncus egestas quis leo rhoncus tristique enim malesuada. Dignissim et a metus nec. Nunc laoreet enim volutpat molestie.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <section className={styled.Methods_Team_Wrapper}>
                <div className="container">
                    <h2 className={styled.title}  data-aos="fade-up" data-aos-duration="700"> The Loop Methods Team</h2>

                    <p className={styled.description}  data-aos="fade-up" data-aos-duration="800">Have you ever walked into a room and felt an immediate sense of belonging? We’re the folks who greet everyone with a smile and offer them something warm to drink. We’re genuinely interested in what you have to say because amazing ideas are all around us- you just have to listen.</p>
                    <p className={styled.description}  data-aos="fade-up" data-aos-duration="800">We believe in treating everyone like they’re our guests.</p>
                </div>
            </section>

            <section className={styled.form_wrapper}>
                <div className="container">
                    <h2 className={styled.heading}  data-aos="fade-up" data-aos-duration="700">Start a conversation by filling the form</h2>
                    <p className={styled.description}  data-aos="fade-up" data-aos-duration="800">Complete the form below and we will contact you to discuss your project.
                        Your information will be kept confidential.</p>

                    <form className={styled.form}  data-aos="fade-up" data-aos-duration="700">
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

export default AboutUsPage
