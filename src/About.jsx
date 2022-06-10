import React from "react";
import Card from "./Card";
import card1 from './img/card1.jpg'
import card2 from './img/card2.jpg'
import card3 from './img/card3.jpg'
import owner1 from './img/owner1.jpg'
import owner2 from './img/owner2.jpg'

const About =()=>{
return(
    <>
    <div id="about" className="About">
<h1 className="aboutHeading">About our Gym</h1>
<hr />
<div className="cardCollection">
<Card
heading='certified trainer'
image={card2}
para={'A fitness trainer leads, instructs, and motivates individuals or groups in exercise activities, including cardiovascular exercise including cardiovascular exercise  '}/>
<Card
heading='New Equipments'
image={card1}
para={'Exercise equipment is any apparatus or device used during physical activity to enhance the strength or conditioning effects of that exercise by providing'}/>
<Card
heading='cleanliness'
image={card3}
para={'Customer expectations for cleanliness are common ground: outstanding gym maintenance and hygiene is expected at all categories of fitness clubs from high-end to budget.'}/>
</div>
<hr />
<div className="ownerDiv">
    <h1 className="trainer">Our Best Trainers
    </h1>
    <div className="owner">
        <img src={owner1} alt="" />
        <img src={owner2} alt="" />
    </div>
</div>
   </div>
    
   
    </>
)
}
export default About;