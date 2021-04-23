import React  from 'react';
import Block from "./Block";

const Slide = (props) => {
    const { data } = props;
    return (
        <>
            {data.map(item => (
                <Block item={item} />
            ))}
        </>
    )
}
export default Slide;