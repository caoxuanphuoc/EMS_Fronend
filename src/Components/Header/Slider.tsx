import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { banner01, banner02, banner03, banner04, banner05 } from "../../assets/Images/Banner"

const Slider = () => {
    const slides = [
        banner01,
        banner02,
        banner03,
        banner04,
        banner05
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };
    useEffect(() => {
        setTimeout(() => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        }, 2000);
    });
    return (
        <div className='max-w-[1040px] h-[450px] w-full m-auto px-4 relative group mt-[100px]'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex]})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            >
                <div className='flex absolute bottom-0 right-[45%]  justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slide}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer '
                        >
                            <RxDotFilled color={slideIndex == currentIndex ? 'white' : 'grey'} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

        </div>
    )
}
export default Slider;