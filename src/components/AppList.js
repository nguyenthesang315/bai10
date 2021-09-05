import React from 'react'
import './AppList.scss'
import { getAllUser,deleteUser,editUser} from "../redux/actions/userAction";

import { useSelector, useDispatch } from "react-redux";
import { useEffect,useState,useRef } from "react";

export default function AppList() {
    const dispatch = useDispatch();
    const {usersEdit} = useSelector((state) => state.user);
    const [chatpost, setChatpost] = useState('')
    const [chatreceived, setChatreceived] = useState('')
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
    useEffect(()=>{
        async function EditList(){
            try {
                setChatreceived(usersEdit.ChatReceived);
                setChatpost(usersEdit.ChatPost);
                scrollToBottom()
            } catch (error) {
               console.log(error.message) 
            }
        }
        EditList();
    },[usersEdit]);
    
    return (
        <div>
            <div className="List">
                <div className="List__cover">
                    {/* <div className="List__cover-header">
                        <img src={usersEdit.avatar}></img>
                        <h3>{usersEdit.name}</h3>
                    </div> */}
                    <div className="List__cover-body">
                        <div className="List__cover-body-chatbox">
                                {usersEdit.length !== 0 ? usersEdit.ChatReceived.map((item,index)=>(
                                    <div className="List__cover-body-chatbox-Received">
                                        <img src={usersEdit.avatar}></img> <p id="Received">{item}</p>
                                    </div> 
                                )):null} 
                                {usersEdit.length !== 0 ? usersEdit.ChatPost.map((item,index)=>(
                                        <div className="List__cover-body-chatbox-Post">
                                            <p id="Post">{item}</p>
                                        </div> 
                                )):null}
                        </div>
                        <div ref={messagesEndRef} />
                    </div>

                </div>
            </div>
        </div>
    )
}
