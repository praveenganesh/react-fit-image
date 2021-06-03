
import React from "react"
import styled from "styled-components"

const ImageWrap = styled.div`
position: relative;
display: flex;
justify-content: center;
height: ${props => props.height || '200px'};
width: ${props => props.width || '200px'};
overflow: hidden;
background-color: rgba(0, 0, 0, 0.2);
border-radius: ${props => props.borderRadius || '0px'};
box-sizing: border-box;
  div{
    filter: blur(${props => props.blur || '8px'});
    width: ${props => props.width || '200px'};
    height: ${props => props.height || '200px'};
    background: url('${props => props.src}') 0% 0% / cover no-repeat;
    border-radius: inherit;
    
  }
  img{
    max-width: 100%;
    display: block;
    float: none;
    height: ${props => props.height || '200px'};
    width: auto;
    position: absolute;
  } 
}
`;


function Image({imgProps,width,height,blur,borderRadius}){
    return (
        <ImageWrap  src={imgProps?.src} width={width} height={height} blur={blur} borderRadius={borderRadius}>
            <div/>
            <img {...imgProps}/>
        </ImageWrap>
    )
};

export default Image;