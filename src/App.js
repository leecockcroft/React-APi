        import React,{Component} from 'react';
        import './App.css';
        import axios from 'axios'

        import Badges from './Components/Badges'
        import Details from './Components/Details'




         const Teams ='https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=99bf4f9f77a82650954918029e09f4a0d5ac3c83096fb016904974b55e8a2001'
        class App extends Component {

          constructor(props) {
            super(props);

        this.state={
          teams:[],
          teamsInfo:[]

        }

        }

        async componentDidMount(){
         const teamNames =  await axios.get(Teams);
         const allData = teamNames.data;
         const players = allData.map(item => item)
         console.log(players)
         this.setState({
           teams:teamNames.data,
           teamsInfo:[]

           })




        }

        urlChange=(indexToChange)=>{
          this.setState({
            teamsInfo:this.state.teams.filter((item,index)=>{
                if(index===indexToChange){
                    return{
                        item
                        }
                      }
                    })
                  })
                }

        render(){


          return (
            <div className="App">
            <div className='header'>
              <Badges showBadges={this.state.teams} url={(index)=>this.urlChange(index)}/>
              <Details test={this.state.teamsInfo}/>
              </div>
            </div>
          );

        }


        }


        export default App;
