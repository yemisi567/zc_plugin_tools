import React from 'react'
import Tools from '../fragments/tools/Tools';
import Tool from '../fragments/tools/Tool';
import TitleBox from '../fragments/TitleBox';

const RecommendTools = ({list, text}) => {
    return (
        <div style={{width: "100%" , margin: "3rem 0rem"}}>
            <TitleBox title="available tools" text="filter" link = {false}/>
             <Tools> 
             {
                 list.length > 0 ? (
                    list.map((item, index) => <Tool 
                    key= {index}
                    icon= {item.image}
                    title= {item.name}
                    text={item.description}
                    btn = "add"
                    pad = {true}
                    />)
                 ) : ( `No result of  "${text}"  found for available tools`)
                   
                }
            </Tools>
        </div>
    )
}

export default RecommendTools
