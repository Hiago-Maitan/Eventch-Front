import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './styles.css';

export default function PerfilEmpresa(){

	return(
		<div>

           <div class="color-container">
        <div>
            
            <h1>Name Surname</h1>
            <h2>phone</h2>
            <h2>email</h2>
            <h2>birthday</h2>
            <h2>sex</h2>
        </div>

        <div class="company">
            
            <h1>Fantasy Name</h1>
            <h2>cnpj</h2>
            <h2>about</h2>
        </div>

        
    </div>

    <div class="text-flex">
        <h3>DASHBORD</h3>
    </div>

    <div class="flex">

        <div class="container-totalEvento">
            <div class="hist1">
                <h6 className="gambs">.</h6>
                <span>Total de eventos:</span>
                <h3>0</h3>
            </div>
        </div>

        <div class="container-totalEvento">
            <div class="hist1">
                <h6 className="gambs">.</h6>
                <span>Total de ingressos:</span>
                <h3>0</h3>
            </div>
        </div>

        <div class="container-totalEvento">
            <div class="hist1">
                <h6 className="gambs">.</h6>
                <span>Realizados:</span>
                <h3>0</h3>
            </div>
        </div>

    </div>

		</div>
		);
}
