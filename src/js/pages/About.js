import React from 'react';

const About = () => (
    <div>
        <h2>About</h2>
        <div className="grid gt-columns-3">
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
        </div>
        <hr style={{ margin: '20px' }}/>
        <div className="grid gt-columns-4">
            <div className="gc-start-1 gc-end-4">1</div>
            <div className="item">2</div>
            <div className="gr-start-2 gr-end-4">3</div>
            <div className="gc-start-2 gc-end-5">4</div>
            <div>5</div>
            <div className="gc-start-3 gc-end-5">6</div>
        </div>
    </div>
);

export default About;
