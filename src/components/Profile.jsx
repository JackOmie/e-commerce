import React from 'react';
// import { Link } from 'react-router-dom';
import Pic1 from "./lessthan.svg";
import Pic2 from "./face.png";



const Profile = () => {
    return (
        <div className="profy">
            <br /> <br />
<header className="heady">

            <h1>  <img className="less"src={Pic1}/>  Profile
    </h1 >
    <br />

</header>

<div className="dominic">
<div className="circle">
        <img class="circular-square" src={Pic2} />
</div>


<div className="writeup">
        <h1 className="namy">
        Dominic Ovo
        </h1> 
        <p className="pstate">
        @dominic_ovo
        </p>  
</div>
</div>
<br /> <br /> <br />

<div className="gender">
<form action="">
<h3>

        <i class="fas fa-venus"></i> <label>Gender</label>
        <select  className="form-control" name="gender" id="">
        <option value="male">male</option>
        <option value="female">female</option>
        </select>
</h3>
</form>
</div>

<br />

<div className="birth">
        <form>
        <h3>
        <i class="fas fa-birthday-cake"></i> <label>Birthday</label>
        </h3>
        <input className="form-control"  type="date" />
        </form>
</div>

<br />

<div className="birth">
        <form>
        <h3>
        <i class="far fa-envelope"></i> <label>Email</label>
        </h3>
        <input className="form-control"  type="date" />
        </form>
</div>

<br />

<div className="phone">
        <form>
        <h3>
        <i class="fas fa-mobile-alt"></i> <label>Phone Number</label>
        </h3>
        <input className="form-control"  type="number" />
        </form>
</div>

<br />

<div className="phone">
        <form>
        <h3>
        <i class="fas fa-unlock-alt lock"></i> <label>Password</label>
        </h3>
        <input className="form-control"  type="password" />
        </form>
</div>

<br />

<div className="btn" id="bt">
        Submit
</div>
<br /><br /> <br /><br />




        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
 )
}

export default Profile;
