import React,{useState} from 'react'
import './AppInfor.scss'
import { addUser,addEditUser, getAllUser} from "../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';


export default function AppInfor() {
    
    const { usersEdit,users } = useSelector((state) => state.user);// state chứa object sinh viên để edit
    const [id, setID] = useState();// sate chứa id để truyền vào ADD object mới
    const [chatpost, setChatpost] = useState(''); 
    // State tổng để dispatch vào Action ADD 
    // const newElements = {...usersEdit ,"Chatpost":`${chatpost}`}
    const newElements = {...usersEdit}
    const dispatch = useDispatch();
    useEffect(()=>{
        setChatpost('')
    },[usersEdit])

    function Enter(e) {
        //See notes about 'which' and 'key'
        if (e.key == 'Enter') {
            dispatch(addUser(newElements,chatpost));
            e.preventDefault();
        }
    }
    return (
        <div>   
            <form className="Infor">
                <div className="Infor__body">
                    <div className="Infor__body-elements"> 
                        <input type="text" id="name" onKeyPress={event=>Enter(event) && event.stopPropagation()}  onChange={event => setChatpost(event.target.value)} value={chatpost} placeholder="Enter your Chatpost" ></input>               
                        <Button id="btnSend" variant="primary" size="lg" onClick={() => dispatch(addUser(newElements,chatpost))}>SEND</Button>
                   </div>
                </div>                          
               
            </form>         
        </div>
    )
}

