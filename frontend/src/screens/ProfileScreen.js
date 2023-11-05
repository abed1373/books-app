import { useSelector } from "react-redux"
import Footer from "../components/Footer"
import Header from "../components/Header"


const ProfileScreen = () => {

const {userInfo}=useSelector((state)=>state.userLogin);


  return (
    
    <div>
      <Header/>
      <div className="user-profile-container">
      <div className="profile-container">
        <div className="user-profile-left">
          <img src="/assets/images/user-1.png" alt="" />
          <div className="user-details">
            <ul>
              <li><b> username:</b>{userInfo?.username}</li>
             
              <li><b> email:</b>{userInfo?.email}</li>
            </ul>
            <span>2024/11/22</span>
          </div>
        </div>
        <div className="user-profile-center">
          <div className="user-row-top">
            <div>
            <h1>User Profile</h1>
            <p>Lorem ipsum </p>
            </div>
            <div>
           <hr />
           <hr />
           <hr />
            <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
         <div className="pill-user-rofile">
          <h3>order user</h3>
          <span>number</span>
         </div>
         <div className="order-top">
          <h1>Order History </h1>
          <hr />

         </div>
          <div className="order">
          <div className="order-history">
          <ul>
            <li><img src="/assets/images/book-1.png" alt="" /></li>
            <li><p>Fiction</p> </li>
            <li><b>$</b><span>18</span></li>
            <li>Ferdosi</li>
          </ul>
         </div>
         <div className="order-history">
          <ul>
            <li><img src="/assets/images/book-2.png" alt="" /></li>
            <li><p>Fiction</p> </li>
            <li><b>$</b><span>18</span></li>
            <li>Ferdosi</li>
          </ul>
         </div>
         <div className="order-history">
          <ul>
            <li><img src="/assets/images/book-3.png" alt="" /></li>
            <li><p>Fiction</p> </li>
            <li><b>$</b><span>18</span></li>
            <li>Ferdosi</li>
          </ul>
         </div>
        
          </div>
          <div className="hr-top-button">
          <hr />
          </div>
          
           <button className="continue">continue</button>
        </div>
        
        <div className="user-profile-right">
          <div className="pill-top">
          <div className="p1">
            <div className="p1-i1">Lorem</div>
            <div className="p1-i2">pst</div>
            <div className="p1-i3">x</div>
          </div>
          <div className="p2">
            <div className="p2-i1">1</div>
            <div className="p2-i2">2</div>
            <div className="p2-i3">3</div>
            <div className="p2-i4">4</div>
            <div className="p2-i5">5</div>
          </div>
          <div className="p3">
            <div className="p3-i1"> <b>lorem</b></div>
            <div className="p3-i2">
              <b>36</b>
              <b>+</b>
            </div>
            
          </div>
         <hr />

          </div>
          <h1>Date</h1>
          <div className="table-1">
            <div className="t1">orst space</div>
            <div className="t2">deat</div>
            <div className="t3">pace</div>
            <div className="t4">1</div>
            <div className="t5">10Ts</div>
            <div className="t6">$.4</div>
            <div className="t7">Zote</div>
          </div>
          <div className="table-2">
            <div className="t1">Lorem ipsum</div>
            <div className="t2">Lorem ipsum</div>
          </div>
        </div>
      </div>

      </div>
      <Footer/>
    </div>
  )
}

export default ProfileScreen
