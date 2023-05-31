import React from 'react';
import TextWall from '../../components/aboutMe/textWall';
import Projects from '../../components/projects/Projects';
import StaggeredGrid from '../../components/staggeredGrid/StaggeredGrid';

const HomePage = () => {
    return (
        <>
            <TextWall />
            <Projects/>
            <StaggeredGrid/>
        </>
    )
}

export default HomePage