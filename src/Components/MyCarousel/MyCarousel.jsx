import React from 'react';
import { Carousel, Image } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default function MyCarousel(props) {
    return (
        <>
            <Carousel autoplay>
                {
                    props.list.map((item, index) => {
                        return (
                            <div key={index}>
                                <Image
                                    width={'100%'}
                                    heigth={200}
                                    src={item}
                                />
                            </div>
                        );
                    })
                }
            </Carousel>
        </>
    )
}
