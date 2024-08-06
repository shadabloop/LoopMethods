import React from 'react';
import Career from "@/components/careers/careers.json";
import styled from "@/components/careers/careers.module.scss"
import Image from 'next/image';
import Button from '@/common/Button';

const CareersPage = () => {
    return (
        <>
            <section className={styled.Careers_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 className={styled.title}>Apply <span>today!</span></h1>
                                <p className={styled.discription}>At Loopmethods, we're looking for passionate, innovative thinkers to help shape the future of technology. Explore exciting career opportunities, work on cutting-edge projects, and grow with a dynamic team committed to excellence. Your journey to making an impact starts here. </p>
                            </div>
                            <div className={styled.rightPanel} data-aos="fade-up" data-aos-duration="700">
                                <Image 
                                    src="https://frequencyimage.s3.ap-south-1.amazonaws.com/40eccf9a-0b63-4d5d-9269-208825844c26-photo-cartoon-businesswoman-working-with-laptop-having-great-idea-3d-illustration-generative-ai%20%281%29.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            {/* <div className={styled.rightPanel}>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/235d83df-a7d7-4a4a-8117-e954653c420e-photo-cartoon-businesswoman-working-with-laptop-having-great-idea-3d-illustration-generative-ai.png" width={466} height={424} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styled.Job_Wrapper}>
                <div className="container">
                    <div className={styled.filter_header}>
                        <div className={styled.search_wrap}>
                            <input type="text" placeholder='What you want to do ?' className={styled.form_control} />
                            <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/88548b6c-dabb-4a3e-9b02-7656e22d3e28-material-symbols_search.svg" className={styled.search_icon} width={24} height={24} />
                        </div>

                        <div className={styled.filters}>
                            <select name="Location" id="Location" className={styled.select_dropdown}>
                                <option value="Location">Location</option>
                                <option value="india">India</option>
                                <option value="dubai">Dubai</option>
                                <option value="qatar">Qatar</option>
                            </select>
                            <select name="Location" id="Location" className={styled.select_dropdown}>
                                <option value="Location">Experience</option>
                                <option value="1">1 Year</option>
                                <option value="2">1 Year</option>
                                <option value="3">1 Year</option>
                            </select>
                            <select name="Location" id="Location" className={styled.select_dropdown}>
                                <option value="Location">Degree</option>
                                <option value="india">India</option>
                                <option value="dubai">Dubai</option>
                                <option value="qatar">Qatar</option>
                            </select>
                            <select name="Location" id="Location" className={styled.select_dropdown}>
                                <option value="Location">Skill & Qualification</option>
                                <option value="india">India</option>
                                <option value="dubai">Dubai</option>
                                <option value="qatar">Qatar</option>
                            </select>
                            <select name="Location" id="Location" className={styled.select_dropdown}>
                                <option value="Location">Job Type</option>
                                <option value="india">India</option>
                                <option value="dubai">Dubai</option>
                                <option value="qatar">Qatar</option>
                            </select>
                            <select name="Location" id="Location" className={styled.select_dropdown}>
                                <option value="Location">Sort by</option>
                                <option value="india">India</option>
                                <option value="dubai">Dubai</option>
                                <option value="qatar">Qatar</option>
                            </select>
                        </div>
                    </div>

                    <div className={styled.card_list}>
                        <div className={styled.card} data-aos="fade-up" data-aos-duration="700">
                            <div className={styled.card_head}>
                                <h3 className={styled.designation}>Front-End Developer</h3>
                                <div className={styled.location_wrap}>
                                    <h6 className={styled.location}>Delhi, India</h6>
                                    <h6 className={styled.location}>Id 12345</h6>
                                </div>
                            </div>
                            <div className={styled.card_body}>
                                <h5 className={styled.title}>Requirments</h5>
                                <ul className={styled.required_list}>
                                    <li className={styled.required_item}>Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience.</li>
                                    <li className={styled.required_item}>Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience.</li>
                                    <li className={styled.required_item}>Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience.</li>
                                </ul>

                                <Button>Learn more</Button>
                            </div>
                        </div>
                        <div className={styled.card} data-aos="fade-up" data-aos-duration="700">
                            <div className={styled.card_head}>
                                <h3 className={styled.designation}>Full Stack Developer</h3>
                                <div className={styled.location_wrap}>
                                    <h6 className={styled.location}>Delhi, India</h6>
                                    <h6 className={styled.location}>Id 12345</h6>
                                </div>
                            </div>
                            <div className={styled.card_body}>
                                <h5 className={styled.title}>Requirments</h5>
                                <ul className={styled.required_list}>
                                    <li className={styled.required_item}>Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience.</li>
                                    <li className={styled.required_item}>Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience.</li>
                                    <li className={styled.required_item}>Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience.</li>
                                </ul>

                                <Button>Learn more</Button>
                            </div>
                        </div>
                        <div className={styled.card} data-aos="fade-up" data-aos-duration="700">
                            <div className={styled.card_head}>
                                <h3 className={styled.designation}>MERN Stack Developer</h3>
                                <div className={styled.location_wrap}>
                                    <h6 className={styled.location}>Delhi, India</h6>
                                    <h6 className={styled.location}>Id 12345</h6>
                                </div>
                            </div>
                            <div className={styled.card_body}>
                                <h5 className={styled.title}>Requirments</h5>
                                <ul className={styled.required_list}>
                                    <li className={styled.required_item}>Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience.</li>
                                    <li className={styled.required_item}>Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience.</li>
                                    <li className={styled.required_item}>Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience.</li>
                                </ul>

                                <Button>Learn more</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareersPage
