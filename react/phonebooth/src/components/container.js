import React  from "react";


const Container = (props)=>{
    const {children} = props
    return (
        <div  style={{justifyContent:'center',alignItems:'center',display:'flex',margin:20}}>
            {children}
        </div>
    )
}

export default Container