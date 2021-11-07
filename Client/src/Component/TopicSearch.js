import React from 'react';

import '../stylesheets/topicSearch.css';


// material UI imports
import CloseIcon from "@material-ui/icons/Close";


function TopicSearch(props) {
    const handleItemRemove = () => {

        
    }


const item = document.querySelectorAll(".item");
 



    return (
        <div className="topic_search">
            
        <input type="text" name="subject_search" className="topic_search_input" placeholder="e.g computer science"/>
            <div className="options_for_topic_search">

                {props.data.map((item,index)=>{

                    return(<p key={index} className="item" >{item}</p>)

                {props.data.map((item)=>{

                    return(<p className="item" onClick={()=>9}>{item}</p>)

                })}
            })}
            </div>

            <div className="display_selected">

            {props.data.map((item,index)=>{

                    return(<span key={index}>{item}<CloseIcon className="iconIn_topic_search" onClick={handleItemRemove}/></span>)      

            })}
            </div>

        </div>
    )
                
}


export default TopicSearch

