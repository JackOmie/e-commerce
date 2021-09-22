import React from 'react'
import Picture from "./Group525.png";



const Forgot = () => {
    return (
    <div>
<div    className="container fget">

        <br /><br />
<div    className="log">
        <img src={Picture} alt="" />
</div>
        <br /><br />
        <p className='ptag'>To reset your password type in your details</p>
        <br />
<div    className="inputs">
<label className='lab'>
        Username
</label>
        <br />
        <i class="far fa-user"></i> <input  placeholder='jamesdoe' className='conut'type="text" />
        <br /><br /> 
        <p className='log'>OR</p>
        

<label className='lab'>
        Email
</label>
        <br />
        <i class="far fa-envelope msg"></i><input  placeholder='jamesdoe@gmail.com' className='conut'type="email" />
        <br /> 
        <br /><br />
<div    className=" sub btn">
        Submit
</div>
</div>














</div>
    </div>

)
    }
    export default Forgot;