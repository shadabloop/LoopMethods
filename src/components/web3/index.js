import React, { useRef, useState } from 'react'
import styled from "@/components/web3/web3.module.scss"
import Button from '@/common/Button'
import Image from 'next/image'
import LeverageAiData from "@/components/web3/BlockchainService.json"
import AiModal from "@/components/web3/ai_modal.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Web3Page = () => {

    const scrollRef = useRef(null);
    const [isActiveTab, setIsActiveTab] = useState("Identity")

    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: -200, // Adjust the value for the scroll distance
          behavior: 'smooth',
        });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 200, // Adjust the value for the scroll distance
          behavior: 'smooth',
        });
      }
    };
    const HandleTab = (val) => {
        setIsActiveTab(val)
    }

    console.log(AiModal.filter((val => val.name === isActiveTab)), "filter")

    return (
        <>
            <section className={styled.service_wrapper}>
                <div className="container">
                    <div className={styled.bannerWrapper}>
                        <div className={styled.banner}>
                            <div className={styled.leftPanel}>
                                <h1 data-swiper-parallax="50%" className={styled.title}>Web 3.0 Development</h1>
                                <p data-swiper-parallax="50%" className={styled.discription}>We develop interactive web3 solutions using blockchain, AI, IoT, and cryptography. Our experts in web3 tools, Rust, and Solidity serve industries from gaming to real estate and fintech.</p>
                                <Button>Check our services</Button>
                            </div>
                            <div className={styled.rightPanel}>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/bf77f725-2fe0-4a8c-9721-e2eae961f42f-Firefly_-imagine_A_3D_illustration_of_Web_3.0__featuring_decentralized_applications__peer-to-peer_ne__2_-removebg-preview%201.png" width={420} height={460}  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.Leverage_AI}>
                <div className="container">
                    <p className={styled.smallTitle}>Your web 3 revolution starts with us !</p>
                    <h2 className={styled.heading}>Join the Web3.0 revolution with our services.</h2>

                    <div className={styled.service_wrapper}>
                        {
                            LeverageAiData.map((item) => (
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

            <section className={styled.AI_Models_Wrapper}>
                <div className="container">
                    <h2 className={styled.heading}>The WeB 3 Stack</h2>

                    <div className={styled.tabContainer}>
                        <ul className={styled.tabList} ref={scrollRef}>
                            {
                                AiModal.map((item, key) => (
                                    <li className={`${styled.tabItem} ${isActiveTab === item.name ? styled.active : ""}`} key={key} onClick={() => HandleTab(item.name)}>{item.name}</li>
                                ))
                            }
                        </ul>

                        <div className={styled.button_group}>
                            <button type='button' onClick={scrollLeft} className={styled.arrow_btn}>
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/dc6ba60d-79cb-4589-b3be-31c50129694f-Vector%20%281%29.svg" width={15} height={15} />
                            </button>
                            <button type='button' onClick={scrollRight} className={styled.arrow_btn}> 
                                <Image src="https://frequencyimage.s3.ap-south-1.amazonaws.com/a546e55f-156a-4909-b88e-25f049f510af-Vector%20%282%29.svg" width={15} height={15} />
                            </button>
                        </div>

                        <div className={styled.ai_service_wrapper}>
                            {
                                AiModal.filter((val => val.name === isActiveTab))[0]?.cardData?.map((item, key) => (
                                    <li className={styled.brand}>
                                        <Image src={item.url} width={68} height={68} />
                                        <h5 className={styled.title}>{item.title}</h5>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>


            <section className={styled.form_wrapper}>
                <div className="container">
                    <h2 className={styled.heading}>Start a conversation by filling the form</h2>
                    <p className={styled.description}>Complete the form below and we will contact you to discuss your project. <br />
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

export default Web3Page
