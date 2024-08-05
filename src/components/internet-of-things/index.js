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
                                <h1 data-aos="fade-up" data-aos-duration="700" className={styled.title}><span>IoT</span> Development </h1>
                                <p data-aos="fade-up" data-aos-duration="800" className={styled.discription}>As a full-stack IoT Development Company, we help startups and
                                    enterprises build smart IoT solutions and convert analog products
                                    into digital products using IoT platforms, firmware and sensors.</p>
                                <div data-aos="fade-up" data-aos-duration="700" >
                                    <Button>Check our services</Button>
                                </div>
                            </div>
                            <div className={styled.rightPanel} data-aos="fade-up" data-aos-duration="700">
                                <Image 
                                    src="https://frequencyimage.s3.ap-south-1.amazonaws.com/f5d96814-8e08-4543-bda8-ec24b7854164-product-manager-iot-developer-3d-visualization-clipart.jpg"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            {/* <div className={styled.rightPanel}>
                                <Image data-aos="fade-up" data-aos-duration="700"  src="https://frequencyimage.s3.ap-south-1.amazonaws.com/6342c664-61d0-4ed8-a313-a9e6b3b4ace3-cloud-computing-specialist-arvr-developer-clipart.png" width={656} height={600} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.InternetOfThings_development_wrapper}>
                <div className="container">
                    <p className={styled.smallTitle} data-aos="fade-up" data-aos-duration="700" >Full-stack, secure custom IoT app development !</p>
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="800" >Custom IoT Solutions for Startups and Enterprises</h2>

                    <div className={styled.service_wrapper}>
                        {
                            lotSolution.map((item) => (
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

export default InternetOfThingsPage
