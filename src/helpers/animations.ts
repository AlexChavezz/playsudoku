import { RefObject } from "react";

export function animationIn( {current}: RefObject<HTMLElement>):void{
    current?.animate([
        { transform: "translateX(50px)" },
        { visibility:"visible" },
        { opcacity: 0 },
        { transform: "translateX(0px)" },
        { opcacity: 1 },
    ], {
        duration: 200
    })
    setTimeout(()=>{
        if(current) current.style.visibility = "visible";
    }, 150)
}

export function animationOut({current}:RefObject<HTMLElement>):void{
    current?.animate([
        { transform: "translateX(0px)" },
        { opcacity: 1 },
        { transform: "translateX(50px)" },
        { opcacity: 0 },
    ], {
        duration: 200
    })
    setTimeout(()=>{
        if (current) current.style.visibility = "hidden";
    }, 150)
}