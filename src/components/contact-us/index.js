import React from 'react';
import collaborate from "@/components/contact-us/collaborate.json";
import styled from "@/components/contact-us/contact-us.module.scss"
import Image from 'next/image';
import Button from '@/common/Button';
import Link from 'next/link';

const ContactUsPage = () => {
    return (
        <>
            <section className={styled.ContactUs_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 className={styled.title}><span>Get</span> in Touch</h1>
                                <p className={styled.discription}>We'd love to hear from you! Whether you have a question, need a consultation, or want to discuss a project, our team is ready to assist. Reach out to us today to explore how our innovative solutions can help your business thrive.</p>
                                <Button className={styled.service_btn}>Check our services</Button>
                            </div>
                            <div className={styled.rightPanel}>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/e3881bcb-6c99-4900-a59b-22ae90544d62-isometric%20view%20of%20colleagues%20working%20and%20talking%20in%20the%20office.png" width={595} height={456} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.ContactUs_development_wrapper}>
                <div className="container">
                    <p className={styled.smallTitle} data-aos="fade-up" data-aos-duration="700">Why contact us.</p>
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="800">Let's collaborate to bring your vision to life. </h2>

                    <div className={styled.service_wrapper}>
                        {
                            collaborate.map((item, key) => (
                                <div className={styled.card} key={key} data-aos="fade-up" data-aos-duration="900">
                                    <span className={styled.icon}>{key + 1}</span>
                                    <div>
                                        <h5 className={styled.title}>{item.title}</h5>
                                        <p className={styled.description}>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className={styled.founder_section}>
                <div className="container">
                    <div className={styled.founder_wrapper}>
                        <small className={styled.small} data-aos="fade-up" data-aos-duration="700">Little bit more </small>
                        <h4 className={styled.title} data-aos="fade-up" data-aos-duration="800">Meet Our Founder.</h4>
                        <Image src="https://images.pexels.com/photos/7793140/pexels-photo-7793140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-aos="fade-up" data-aos-duration="900" className={styled.profile} width={228} height={228} />
                        <h6 className={styled.owner_name} data-aos="fade-up" data-aos-duration="1000">Mr. Rajesh Rishi</h6>
                        <p className={styled.designation} data-aos="fade-up" data-aos-duration="1100">Chief Executive Officer</p>
                        <div className={styled.social_media} data-aos="fade-up" data-aos-duration="1200">
                            <Link href="#" target='_blank' title='Linkedin'>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/c92f8b7d-6b96-4372-b76d-0500c23c8c2a-devicon_linkedin.svg" width={24} height={24} />
                            </Link>
                            <Link href="#" target='_blank' title='Twitter'>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/d793fbe1-ad70-45b4-8eb5-a5a4f71308de-mage_x.svg" width={24} height={24} />
                            </Link>
                        </div>
                        <p data-aos="fade-up" data-aos-duration="1400" className={styled.description}>Lorem ipsum dolor sit amet consectetur. Quisque nibh pulvinar metus nunc vivamus pharetra lacus. Cum rhoncus egestas quis leo rhoncus tristique enim malesuada. Dignissim et a metus nec. Nunc laoreet enim volutpat molestie.</p>
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

export default ContactUsPage
