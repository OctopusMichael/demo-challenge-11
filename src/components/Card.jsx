import React, {useState} from "react";
import iconUpArrow from "../images/Vector (2).svg"
import iconDownArrow from "../images/icon-arrow-down.svg"
import iconA from  '../images/illustration-box-desktop.svg'



const Card = () => {
  const [drown1, setDrown1] = useState(false);
  const [drown2, setDrown2] = useState(false);
  const [drown3, setDrown3] = useState(false);
  const [drown4, setDrown4] = useState(false);
  const [drown5, setDrown5] = useState(false);

  const  handleClick1 = () =>{
    setDrown1(!drown1)
    setDrown2(false )
    setDrown3(false)
    setDrown4(false)
    setDrown5(false)

  }
  const  handleClick2 = () =>{
    setDrown2(!drown2 )
    setDrown1(false)
    setDrown3(false)
    setDrown4(false)
    setDrown5(false)
    
  }
  const  handleClick3 = () =>{
    setDrown3(!drown3)
    setDrown1(false)
    setDrown2(false)
    setDrown4(false)
    setDrown5(false)
  }
  const  handleClick4 = () =>{
    setDrown4(!drown4)
    setDrown2(false )
    setDrown1(false)
    setDrown3(false)
    setDrown5(false)
    
  }
  const  handleClick5 = () =>{
    setDrown5(!drown5)
    setDrown2(false)
    setDrown1(false)
    setDrown3(false)
    setDrown4(false)
   
    
    
  }

  return (
    <>
      <div className="container-fluid section-container-main">
      <div className="card mb-3 " >
      <div className="row g-0">
          <div className=" col-12 col-lg-6 section-hero">
            <div  className="img-hero "> 
            <img src={iconA}   className="img-arroba img-fluid rounded-start" alt="img-arroba"/>
            </div>
         </div>
    <div className=" col-12 col-lg-6 ">
      <div className="card-body ">
        <h1 className="card-title">FAQ</h1>
        {!drown1 ? <a  onClick={handleClick1} >  How many team members can I invite? <img  src={iconDownArrow}/></a>
        :  <a  onClick={handleClick1} > <b>How many team members can I invite?</b> <img  src={iconUpArrow}/></a> }
        {drown1  && <p> You can invite up to 2 additional users on the Free plan. There is no limit on 
          team members for the Premium plan.</p>  }
        <hr/>
        {!drown2 ? <a onClick={handleClick2}>  What is the maximum file upload size?<img  src={iconDownArrow}/></a>
        : <a onClick={handleClick2} > <b>What is the maximum file upload size?</b>  <img  src={iconUpArrow}/></a>  }
        {drown2 &&  <p>  No more than 2GB. All files in your account must fit your allotted storage space.</p> }
        <hr/>
        {!drown3 ?    <a   onClick={handleClick3} > How do I reset my password?<img  src={iconDownArrow}/></a>
        :  <a   onClick={handleClick3}  > <b> How do I reset my password?</b> <img  src={iconUpArrow}/></a>  }
        {drown3  && <p> Click “Forgot password” from the login page or “Change password” from your profile page.
          A reset link will be emailed to you.</p>  }
          <hr/>
        {!drown4 ?   <a   onClick={handleClick4}  > Can I cancel my subscription? <img  src={iconDownArrow}/></a>
        :   <a   onClick={handleClick4} > <b> Can I cancel my subscription? </b>  <img  src={iconUpArrow}/></a>  }
        {drown4  && <p>  Yes! Send us a message and we’ll process your request no questions asked.</p>  }
        <hr/>
        {!drown5 ?  <a   onClick={handleClick5}  >Do you provide additional support?  <img  src={iconDownArrow}/></a>
        :    <a onClick={handleClick5} > <b>  Do you provide additional support? </b> <img  src={iconUpArrow}/></a>  }
        {drown5  && <p>  Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>  }
        <hr/>
      </div>
    </div>
  </div>
</div>
       
      </div>
    </>
  );
};

export default Card;
