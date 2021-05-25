import React from 'react';
import styled from 'styled-components'
import videoTyping from '../../video/Typing_dark.mov';
import ShortDescribe from '../ShortDescribe'
const Video = styled.video`
z-index: 0;
width:100%;
clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`
const Main= styled.main`
    background-color: #000;
`
const Home = () => (
    <Main>
        <Video autoPlay muted loop>
            <source src={videoTyping} type="video/mp4" />
        </Video>
        <ShortDescribe/>
    </Main>
);

export default Home;