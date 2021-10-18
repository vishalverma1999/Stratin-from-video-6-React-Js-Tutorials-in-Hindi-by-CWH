import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1).toLowerCase();
    }
    return (
        // What does props.alert && means-> Jab props.alert true ho to && ke baad waali cheez chalada aur agr false hai to && ke baad waali cheez mat chalao
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">  
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}      {/*initially alert state null thi to null state ka koi type hog nhi isliye isko resolve karne ke ke liye we will use condition1 && condition2 syntax*/}
        </div>
    )
}
