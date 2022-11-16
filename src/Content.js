import React, { useEffect, useState } from 'react';
import './Content.scss';
import Stairway from './assets/Stairway.jpeg';
import Song from './assets/StairwayToHeaven.mp3';

const useScrollPosition = () => {
    const [scrollYPos, setScrollYPos] = useState(window.pageYOffset);

    const onScroll = () => {
        setScrollYPos(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    return scrollYPos;
}

export const Content = () => {
    const scrollPos = useScrollPosition();
    return (
        <div className="page-wrapper">
        <embed src={Song} autoPlay width="2" height="0" />
            <div className="text-parent">
                <h2 style={{
                    transform: `translate3d(-${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                }}>There's a lady who's sure</h2>

                <h2 style={{
                    transform: `translate3d(${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                }}>All that glitters is gold</h2>

                <h2 style={{
                    transform: `translate3d(-${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                }}>And she's buying a</h2>

                <h2 style={{
                    transform: `translate3d(${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                }}>stairway to heaven...</h2>
            </div>

            <img src={Stairway} alt="Stairway To Heaven" style={{
                transform: `translate3d(-50%, calc(-${scrollPos * 0.9}px - 50%), 0)`
            }} />

            <div className="text-parent">
                <h2 className="outline" style={{
                    transform: `translate3d(-${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                }}>There's a lady who's sure</h2>

                <h2 className="outline" style={{
                    transform: `translate3d(${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                }}>All that glitters is gold</h2>

                <h2 className="outline" style={{
                    transform: `translate3d(-${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                }}>And she's buying a</h2>

                <h2 className="outline" style={{
                    transform: `translate3d(${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                }}>stairway to heaven...</h2>
            </div>
        </div>
    )
}

export default Content;
