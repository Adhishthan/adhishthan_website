import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Slider.css'
import day1 from '../../../imgs/day1.JPG'
import day2 from '../../../imgs/day2.JPG'
import day3 from '../../../imgs/day3.JPG'
import day4 from '../../../imgs/day4.JPG'
import day5 from '../../../imgs/day5.JPG'
import day6 from '../../../imgs/day6.JPG'
import night1 from '../../../imgs/night1.JPG'
import night2 from '../../../imgs/night2.JPG'
import night3 from '../../../imgs/night3.JPG'
import night4 from '../../../imgs/night4.JPG'
import night5 from '../../../imgs/night5.JPG'

class Slider extends React.Component {
    render() {
        return (
            <div className="CarouselMainContainer">
                <h1>Glimpse of Adhishthan'18</h1>
                <Carousel className="Carousel" autoPlay interval="2000" transitionTime="500" infiniteLoop={true} showThumbs={false} showStatus={false}>
                    <div>
                        <img className="Carousalimg" src={day1} />
                    </div>
                    <div>
                        <img className="Carousalimg" src={night1} />
                    </div>
                    <div>
                        <img className="Carousalimg" src={day3} />
                    </div>
                    <div>
                        <img className="Carousalimg" src={night2} />
                    </div>
                    <div>
                        <img className="Carousalimg" src={day5} />
                    </div>
                    <div>

                        <img className="Carousalimg" src={night4} />
                    </div>
                    <div>
                        <img className="Carousalimg" src={day2} />
                    </div>
                    <div>

                        <img className="Carousalimg" src={night3} />
                    </div>
                    <div>
                        <img className="Carousalimg" src={day4} />
                    </div>
                    <div>
                        <img className="Carousalimg" src={night5} />
                    </div>
                    <div>
                        <img className="Carousalimg" src={day6} />
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default Slider;