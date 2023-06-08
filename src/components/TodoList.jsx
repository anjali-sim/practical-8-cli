import React, { useState } from "react";
import "../css/todoList.css";

// function TodoList() {
//     const itemList = ['Buy new sweatshirt', 'Begin promotional phase', 'Read an article', 'Try not to fall asleep', 'Watch "Sherlock"', 'Begin QA for the product', 'Go for a walk']; 
//     const [isChecked, setIsChecked] = useState(itemList.map(() => false));

//     const handleCheck = (index) => {
//         const newChecked = [...isChecked];
//         newChecked[index] = !isChecked[index];
//         setIsChecked(newChecked);
//     }

//     return (
//         <div className="container mt-3">
//             {itemList.map((item, index) => {
//                 const style = {
//                     color: isChecked[index] ? 'lightgrey' : 'black',
//                 };
//                 return (
//                     <div className="row p-2" key={index}>
//                         <div className="col-8 d-flex float-start">
//                             <p style={style} onClick={() => handleCheck(index)}>{item}</p>
//                         </div>
//                         <div className="col-4 d-flex justify-content-end hh">
//                             <input type="checkbox" className="checkBox" checked={isChecked[index]} onChange={() => handleCheck(index)} />
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

// export default TodoList;






function TodoList() {

    const itemList = ['Buy new sweatshirt', 'Begin promotional phase', 'Read an article', 'Try not to fall asleep', 'Watch "Sherlock"', 'Begin QA for the product', 'Go for a walk']; 


    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = (index) => {
        setIsChecked(!isChecked)
    }
    const style = {
        color: isChecked ? 'lightgrey' : 'black'
    }

    
    // const [mystyle, setMyStyle] = useState({
    //     color: black
    // })

    // const isChecked = false;
    // const handleCheck = () => {
    //     if(isChecked === true) {
    //         setMyStyle({
    //             color: lightgrey
    //         })
    //     }
    //     else{
    //         setMyStyle({
    //             color: black
    //         })
    //     }
    // }
    // const style1 = {
    //     color:lightgrey
    // };
    // const style2 = {
    //     color: black
    // };

   
    // style={isChecked ? style1 : style2} checked
 
    return (
    <div className="container mt-3">
        {itemList.map((item, index) => {
            return (
<div className="row p-2" key={index}>
        <div className="col-8 d-flex float-start">
          <p  style={style}>{item}</p>
        </div>
        <div className="col-4 d-flex justify-content-end" key={index}>
          <input type="checkbox" className="checkBox" onChange={() => handleCheck(index)}></input>
        </div>
      </div>
            );
        })}
      
    </div>
  );
}

export default TodoList;
