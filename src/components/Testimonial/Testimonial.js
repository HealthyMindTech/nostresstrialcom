import React from 'react'
import {TSec, TRow, TColumn, TextWrapper, TopLine, Subtitle, ImgWrapper, Img} from './Testimonial.elements'
import { Container } from '../../globalStyles'

 const Testimonial = ({ 
    lightBg,
    lightTopLine,
    lightTextDesc,
    description,
    personName,
    personTitle,
    personCompany,
    img,
    alt,
    imgStart,
    start
}) => {
    return (
        <React.Fragment>
            <TSec lightBg={lightBg}>
                <Container>
                    <TRow imgStart={imgStart}>
                        <TColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{description}</TopLine>
                            <Subtitle lightTextDesc={lightTextDesc}>{personName}</Subtitle>
                            <Subtitle lightTextDesc={lightTextDesc}>{personTitle}, {personCompany}</Subtitle>
                            </TextWrapper>
                        </TColumn>
                        <TColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </TColumn>
                    </TRow>
                </Container>
            </TSec>
        </React.Fragment>
    )
}

export default Testimonial;