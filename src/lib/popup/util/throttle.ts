export function throttle(callback:()=>any, delay:number){
    let wait = false;
    return () => {
        if(wait) return;
        callback();
        wait = true
        setTimeout(()=>{
            wait = false
        }, delay)
    }
}