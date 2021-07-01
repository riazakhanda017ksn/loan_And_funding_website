import React from 'react';

const TeamShowDetails = (props) => {
    const {name,professional,fbLink,imageURL}=props.teamDetails
    return (
        <>
     

  
 <div class="col-lg-3 mt-5">
<div class="Expart-people-details">
<div class="img-section">

<img src={imageURL} alt=""/>

</div>
<div class="Expart-people-details-social text-center">
<ul>
<li>
  <a href={fbLink}><i class="fab fa-facebook"></i></a>
</li>
<li>
  <a href=""><i class="fab fa-instagram"></i></a>
</li>
<li>
  <a href=""><i class="fab fa-skype"></i></a>
</li>
<li>
  <a href=""><i class="fab fa-twitter"></i></a>
</li>


</ul>


</div>
<div class="expert-people-name">

  <h4>{name}</h4>
   <p>{professional}</p>
</div>
</div>
</div>

        </>
    );
};

export default TeamShowDetails;