import "./testing.css"

export default function Testing (){

    let count = 0

    function increment(){
        console.log("incrementing")
        count = count +1
        console.log(count)

    }
   
    return(
        <div className="background">
            <button>-</button>

            <span>{count}</span>

            <button onClick={increment}>+</button>

            
        </div>
    )
}