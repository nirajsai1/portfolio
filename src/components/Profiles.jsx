import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { RxArrowTopRight } from 'react-icons/rx';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default function Profiles() {
    const ProfilesData = [
        {
            name: "Codechef",
            pic: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png",
            description: (<p>(Highest Rated: 1659)</p>),
            link: "https://www.codechef.com/users/nirajsai1",
        },
        {
            name: "LeetCode",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OLhpfd9XJnvSrvV48lTTdQmWmV82Qm3jkM8gtWbBg69a7ydQTNAewakMbQn7bK7kW6I&usqp=CAU",
            description: (<p>(Highest Rated: 1699)</p>),
            link: "https://leetcode.com/u/nirajsai007/",
        },
        {
            name: "GeeksForGeeks",
            pic: "https://i.ytimg.com/vi/8pG8wbqPQGU/sddefault.jpg",
            description: (<p>Problems Solved: 55</p>),
            link: "https://www.geeksforgeeks.org/user/neerajsai290/",
        },
        {
            name: "GitHub",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8El9ay-ffxJvETGylQQ1hG9NfRk_PwR2C9sjzmNm4Dw&s",
            description: "Repositories: 15",
            link: "https://github.com/nirajsai1",
        },
        {
            name: "LinkedIn",
            pic: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
            description: "Connections: 43",
            link: "https://www.linkedin.com/in/neeraj-sai-ch/",
        },
    ];

    return (
        <div id="Profiles">
            <h1 className='flex items-center justify-center text-3xl font-bold dark:text-yellow-50'>MY PROFILES</h1>
            <div className='flex justify-center items-center flex-col h-screen'>
                <Swiper
                    breakpoints={{
                        340: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        700: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true
                    }}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: true,
                    }}
                    speed={5000}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className='max-w-[90%] lg:max-w-[80%]'>
                    {ProfilesData.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div className="dark:bg-gray-800 dark:text-white text-white flex flex-col items-center justify-around mb-20 
                                group relative shadow-lg rounded-xl px-4 py-6 h-[200px] w-[175px] sm:h-[250px] sm:w-[200px] 
                                md:h-[300px] md:w-[250px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer bg-gray-600 flex-wrap">
                                <img className='w-[40px] h-[30px] sm:w-[50px] sm:h-[35px] md:w-[80px] md:h-[60px] lg:w-[120px] lg:h-[80px] m-[10px] sm:m-[15px] md:m-[20px]' 
                                    src={data.pic} 
                                    alt={data.name} />
                                <h1 className='text-base sm:text-xl md:text-2xl lg:text-3xl text-yellow-400 font-bold text-center'>
                                    {data.name}
                                </h1>
                                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-center'>
                                    {data.description}
                                </p>
                                <a href={data.link} className="text-xs sm:text-sm md:text-base lg:text-lg underline">
                                    View
                                </a>
                                <RxArrowTopRight className="absolute bottom-3 left-3 w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] 
                                    lg:w-[35px] lg:h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
