import React from 'react'


const Details=(props)=>{

return (
  <div className="team-info">
  {props.test.map(item=>(
  <div>
  <img src={item.team_badge}/>
    <h1>{item.team_name}</h1>
  {item.coaches.map(coach=><h1>{coach.coach_name}</h1>)}
    <h2> {item.team_key}</h2>

<div className="flex">
      {item.players.map(player =>
        <div className='table-wrapper'>
        <table>
          <tr>
            <th> Name</th>
            <th> Number</th>
            <th> Position</th>
            <th> Number</th>
          </tr>


          <tr>
          <td>{player.player_name}</td>
          <td>{player.player_number}</td>
          <td><strong>{player.player_type}</strong></td>
          <td>{player.player_country}</td>
      </tr>
      </table>





          </div>)}
    </div>
    </div>
  ))}
</div>
)


}

export default Details
