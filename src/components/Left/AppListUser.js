import { React,useEffect } from "react";
import './AppListUser.scss';
import { getAllUser,deleteUser,selectUser} from "../../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import userAvatar from '../../assets/images/avataruser.PNG';
import {FaFacebookMessenger} from 'react-icons/fa';
import {AiFillSetting} from 'react-icons/ai';


export default function AppListUser() {
    const dispatch = useDispatch();
    const { isLoading, users,usersEdit } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(getAllUser())
      }, []);
    return (
        <div className="UserList">
            <div className="UserList__cover">
            <div className="UserList__cover-header">
                        <FaFacebookMessenger id="logo"/>
                        <h4>Quickchat</h4>
                    </div>
                <div className="UserList__cover-top">
                    
                    
                    <div className="UserList__cover-top-img">
                        <img src={userAvatar}></img>
                    </div>
                    <div className="UserList__cover-top-infor">
                        <p><b>Nguyễn Thế Sang </b><AiFillSetting/></p>
                        <a href="#">Fresher UI/UX designer</a>
                    </div>
                </div>
                <div className="UserList__cover-list">
                    <div className="UserList__cover-list-header">
                        <h6>Active Conversation</h6>
                        <h6 id="listUserNum">{users.length}</h6>
                    </div>
                    <div className="UserList__cover-list-user">
                        {users.length > 0 ? users.map((item, index) => (
                            <tr className="UserList__cover-list-user-elements" key={index}  onClick={() => dispatch(selectUser(item))}>
                                <div className="UserList__cover-list-user-elements-img">
                                    <img src={item.avatar}></img>  
                                </div> 
                                <td >{item.name}</td>
                            </tr>  
                        )): null}
                    </div>
                </div>
                
            </div>
             
        </div>
    )
}
