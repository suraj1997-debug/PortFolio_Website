import React from 'react';
import './style.css';
import AnimatedProgressProvider from '../../components/AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const Skill = (props) => {
    return (
        <React.Fragment>
            <div className="skill">
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={props.skillpercent}
                    duration={2}
                    easingFunction={easeQuadInOut}
                    repeat
                >
                    {value => {
                        const roundedValue = Math.round(value);
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                /* This is important to include, because if you're fully managing the
                          animation yourself, you'll want to disable the CSS animation. */
                                styles={buildStyles({ pathTransition: "none" , textColor: props.textColor , pathColor:props.pathColor, trailColor:"#1a1c20"})}
                            />
                        );
                    }}
                </AnimatedProgressProvider>
                <div className="skill-text">
                    <h1>{props.Skillname}</h1>
                    <p>{props.Skilldesc}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Skill;