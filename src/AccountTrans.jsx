import React from "react";

function AccountTrans(){

    return(
        <>

        <div>

        <h3>Transaction History</h3>
        <ul className="list">
        <li className="plus">
        Project 1 Income
        <span>$0.00</span>
        <button className="delete-btn">X</button>

        </li>
        <li className="minus">
            Project 1 Salery
            <span>-$500</span>
            <button className="delete-btn">X</button>
        </li>
        </ul>

        </div>



        </>
    )




}

export default AccountTrans;