import React from 'react'
import styled from "@/components/blockchain/BlockChain.module.scss"
import Button from '@/common/Button'
import Image from 'next/image'
import LeverageAiData from "@/components/blockchain/BlockchainService.json"
import BlockchainServiceSolution from "@/components/blockchain/BlockchainServiceSolution.json"
import AiModal from "@/components/blockchain/ai_modal.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Navigation } from 'swiper/modules';

const BlockChain = () => {
    return (
        <>
            <section className={styled.service_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 className={styled.title}><span>Blockchain</span> Consulting </h1>
                                <p className={styled.discription}>Leverage Loop Methods’ expertise to solve your toughest tech challenges and excel in blockchain. We identify improvement areas, plan implementation, craft tailored solutions, and provide ongoing support. Our integrated approach ensures your organization's growth and lasting results.</p>
                                <Button className={styled.service_btn}>Check our services</Button>
                            </div>
                            <div className={styled.rightPanel} data-aos="fade-up" data-aos-duration="700">
                                <Image 
                                    src="https://frequencyimage.s3.ap-south-1.amazonaws.com/9d3f5810-fe42-4d99-b97b-f32107bd3ce0-digital-marketer-product-manager-virtual-illustrated-flat-minimal-design.jpg"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            {/* <div className={styled.rightPanel}>
                                <Image data-aos="fade-up" data-aos-duration="700" src="https://frequencyimage.s3.ap-south-1.amazonaws.com/f7d9a1cd-dbf5-49bc-989a-1009f25eb272-Firefly%203Create%20a%20high-quality%203D%20rendering%20of%20blockchain%20technology.%20The%20scene%20should%20feature%20inter%20%281%29%201.png" width={420} height={460} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.Leverage_AI}>
                <div className="container">
                    <p className={styled.smallTitle}> Your blockchain consulting starts with us !</p>
                    <h2 className={styled.heading}>Our Blockchain Consulting Services</h2>

                    <div className={styled.service_wrapper}>
                        {
                            LeverageAiData.map((item) => (
                                <div className={styled.card} data-aos="fade-up" data-aos-duration="700">
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
            <section className={`${styled.BlockchainSolutions}`}>
                <div className="container">
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700">Blockchain Solutions We Build</h2>

                    <div className={styled.service_wrapper}>
                        {
                            BlockchainServiceSolution.map((item) => (
                                <div className={styled.card} data-aos="fade-up" data-aos-duration="800">
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
                                            <div className={styled.leftPanel} data-aos="fade-up" data-aos-duration="700">
                                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/1a0b9e70-a791-4ea5-8ff3-c5c2b077ecc0-telescope.jpg" width={266} height={375} />
                                            </div>

                                            <div className={styled.rightPanel}>
                                                <small className={styled.small} data-aos="fade-up" data-aos-duration="700"><Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/cffc1716-60a4-40f6-9a9a-01722546cea8-Ellipse%206044.svg" width={8} height={8} /> Our Blockchain Consulting Process</small>
                                                <h1 className={styled.title} data-aos="fade-up" data-aos-duration="800">Discovery and Feasibility Analysis</h1>

                                                <ul className={styled.itemList} data-aos="fade-up" data-aos-duration="900">
                                                    <li className={styled.discription}><span className={styled.count}>1</span> We systematically analyze client requirements, existing processes, goals, and the feasibility of blockchain implementation.</li>
                                                    <li className={styled.discription}><span  className={styled.count}>2</span>  Identify powerful use cases where blockchain can deliver significant value, thus ensuring its feasibility.</li>
                                                    <li className={styled.discription}><span  className={styled.count}>3</span>  Establish clear project scope, goals, constraints, and success criteria.</li>
                                                </ul>
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
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700">AI Blockchain Development Platforms We Work On !</h2>

                    <ul className={styled.ai_service_wrapper}>
                        {
                            AiModal.map((item) => (
                                <li className={styled.brand} data-aos="fade-up" data-aos-duration="800">
                                    <Image src={item.url} width={60} height={60} />
                                    <h5 className={styled.title}>{item.title}</h5>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>


            <section className={styled.form_wrapper}>
                <div className="container">
                    <h2 className={styled.heading} data-aos="fade-up" data-aos-duration="700">Start a conversation by filling the form</h2>
                    <p className={styled.description} data-aos="fade-up" data-aos-duration="800">Complete the form below and we will contact you to discuss your project. <br />
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

export default BlockChain
