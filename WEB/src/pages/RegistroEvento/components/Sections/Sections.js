import React from 'react';

import './Sections.css'

function Sections({section}) {

    switch(section){
        //registro sobre o evento
        case 0:
            return <div class="section-container">
                    <div class="item selected"><span>1</span></div>
                    <div class="item"><span>2</span></div>
                    <div class="item"><span>3</span></div>
                    <div class="bg-separator"></div>
                    <div class="separator"></div>
                   </div>;

        //detalhes do local
        case 1:
            return <div class="section-container">
                    <div class="item selected"><span>1</span></div>
                    <div class="item selected"><span>2</span></div>
                    <div class="item"><span>3</span></div>
                    <div class="bg-separator"></div>
                    <div class="separator first"></div>
                   </div>;

        //sobre o ingresso
        case 2:
            return <div class="section-container">
                    <div class="item selected"><span>1</span></div>
                    <div class="item selected"><span>2</span></div>
                    <div class="item selected"><span>3</span></div>
                    <div class="bg-separator"></div>
                    <div class="separator second"></div>
                   </div>;
        default:
            return <div class="section-container">
                    <div class="item"><span>1</span></div>
                    <div class="item"><span>2</span></div>
                    <div class="item"><span>3</span></div>
                    <div class="bg-separator"></div>
                    <div class="separator"></div>
                   </div>;
    
}
    
}

export default Sections;