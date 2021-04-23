import React, { useState, useEffect } from 'react';
import { imageDataUrl, itemsPerBlock } from '../utils/AppConstants';
import axios from 'axios';
import Slide from "./Slide";
import ButtonComponent from "./Button";
import { Container, Typography, Paper, Grid } from '@material-ui/core';


function Carousel() {

    const [slideData, setSlideData] = useState([]);
    const [sliderArr, setSlideArr] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [noOfSlides, setNoOfSlides] = useState(0);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    const showPrev = () => {
        setCurrentIndex(currentIndex - 1);
    }

    const showNext = () => {
        setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {

        const getCarouselData = async () => {
            await axios(
                imageDataUrl
            ).then(result => {
                setSlideData(result.data);
            });
        };
        getCarouselData();
    }, []);

    useEffect(() => {
        const updateSliderArr = () => {
            const updatedSliderArr = slideData.reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / itemsPerBlock);
                if (!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = []
                }

                resultArray[chunkIndex].push(item)

                return resultArray
            }, []);

            setSlideArr(updatedSliderArr);
            setNoOfSlides(updatedSliderArr.length);
        }
        updateSliderArr();
    }, [slideData]);

    useEffect(() => {
        const handleActionBtns = () => {

            (currentIndex === 0) ? setIsPrevDisabled(true) : setIsPrevDisabled(false);

            (currentIndex === noOfSlides - 1) ? setIsNextDisabled(true) : setIsNextDisabled(false);

        }
        handleActionBtns();
    }, [currentIndex, noOfSlides]);


    return (
        <Container>
            <div className="carousel-container">
                <Typography variant="h2" gutterBottom>
                    React Carousel
                </Typography>

                {sliderArr.length ?
                    <>
                        <Paper elevation={5} style={{ marginBottom: 20 }}>
                            <Grid container direction="row">
                                <Slide data={sliderArr[currentIndex]} />
                            </Grid>
                        </Paper>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <ButtonComponent onClickEvent={showPrev} isDisabled={isPrevDisabled} text="Prev" />
                            <ButtonComponent onClickEvent={showNext} isDisabled={isNextDisabled} text="Next" />
                        </Grid>
                    </>

                :
                <Typography variant="h4" gutterBottom>
                    Loading...
                </Typography>
                }
            </div>
        </Container>
    )
}

export default Carousel;