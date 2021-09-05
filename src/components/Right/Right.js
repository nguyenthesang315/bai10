import React from 'react'
import './Right.scss'
import { MdEmail } from "react-icons/md";
import { FaUserAlt ,FaToolbox} from "react-icons/fa";
import RightBody from './RightBody/RightBody';
import { Button } from 'react-bootstrap';

export default function Right() {
    const avatar = `https://photo2.tinhte.vn/data/attachment-files/2020/09/5136156_IMG_20200902_023158.jpg`
    return (
        <div className="right"> 
            <div className="right__cover">
                <div className="right__cover-archive">
                    <div className="right__cover-archive-img">
                        <img src={avatar}></img>
                    </div>
                    <div className="right__cover-archive-infor">
                        <div className="right__cover-archive-infor-mail">
                            <div className="right__cover-archive-infor-mail-logo">
                                <MdEmail id="lgMail"/>
                            </div>              
                            <p>ntsang315@gmail.com</p>
                        </div>
                        <div className="right__cover-archive-infor-acount">
                            <div className="right__cover-archive-infor-acount-logo">
                            <FaUserAlt id="lgUser"/>
                            </div> 
                            <p>NTS-315</p>
                        </div>
                        <button> Archive  <FaToolbox/></button>
                    </div>
                </div>
                <div className="right__cover-body">
                    <RightBody/>
                </div>
                <div className="right__cover-footer">
                    <h5>Link Share</h5>   
                    <p>Share this link to your friends</p>
                    <Button variant="primary" size="md">Share Link </Button>
                </div>
            </div>
        </div>
    )
}
