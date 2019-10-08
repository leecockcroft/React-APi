import React from 'react'


const Badges =(props)=>{
return (

  <div className='badge-wrapper'>
{props.showBadges.map((item,index)=><div className='img-container'><img className="badge-nav" onClick={()=>props.url(index)}key={index}data-name={item.team_name.toLowerCase()} id={item.team_key}src={item.team_badge} alt={item.team_name}/></div>)}
</div>





)


}

export default Badges
