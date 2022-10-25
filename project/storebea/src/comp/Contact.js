import React, { useState } from "react";

function Contact(){
    var ar  = ['A','P','P'];
    var ab = 'cake';

    var st  = [{Name:'A',Email:'P',Id:'P'},
    {Name:'B',Email:'M',Id:'L'},
    {Name:'D',Email:'O',Id:'K'},];
    const [show,setShow] = useState(true);
    return(
        <div>
            <ul className="list-group">
                {ar.map((row) =>(
                    <li className="list-group-item">{row}</li>
                ))}
            </ul>
        
            {(ab == 'cake') ? ('yes'):('no')} 
        {(ab == 'cake') && ('yes')}  

        <div className="col-lg-12">
            <ul className="list-group">
                    {st.map((row )=>(
                        <li className="{(row.Type == 'B') ? 
                    ('liist-group-item list-group-item-sucess');
                    }">{row.Name} </li>
                    ))}
            </ul>
        </div>
        </div>
    );
}