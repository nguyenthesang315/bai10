import React from 'react'
import './RightBody.scss'
import {FaRegClock,FaUserFriends,FaCalendarCheck,FaRocketchat} from 'react-icons/fa';
import Chart from './Chart'

export default function RightBody() {
    return (
        <div className="all">
            <div className="all__cover">
                <div className="all__cover-one">
                    <div className="all__cover-one-times">
                        <div className="all__cover-one-times-icon">
                            <FaRegClock  id="rightIcon"/>
                        </div>
                        <div className="all__cover-one-times-text">
                            <p id="value">13h</p>
                            <p id="name">Time</p>
                        </div>
                    </div>
                    <div className="all__cover-one-atend">
                        <div className="all__cover-one-atend-icon">
                            <FaUserFriends id="rightIcon"/>
                        </div>
                        <div className="all__cover-one-atend-text">
                            <p id="value">12</p>
                            <p id="name">Atend</p>
                        </div>
                    </div>
                    <div className="all__cover-one-meet">
                        <div className="all__cover-one-meet-icon">
                            <FaCalendarCheck id="rightIcon"/>
                        </div>
                        <div className="all__cover-one-meet-text">
                            <p id="value">22</p>
                            <p id="name">Meet</p>
                        </div>
                    </div>
                    <div className="all__cover-one-reject">
                        <div className="all__cover-one-reject-icon">
                            <FaRocketchat id="rightIcon"/>
                        </div>
                        <div className="all__cover-one-reject-text">
                            <p id="value">41</p>
                            <p id="name">Reject</p>
                        </div>
                    </div>
                </div>
                <div className="all__cover-two">
                    <Chart/>
                </div>
            </div>
        </div>
    )
}
