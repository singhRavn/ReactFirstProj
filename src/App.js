import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import React from 'react';



function App(){
    // const inputType = 'number';
    // const minValue = 5;
    // return <input style={{border:"1px solid blue"}} textarea autoFocus spellCheck/>
    return (
        <div>
            <section className='hero is-primary'>
                <div className='"hero-body'>
                    <p className='title'>
                    Personal Digital Assistants
                    </p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                    <div className='column is-4'>
                    <ProfileCard title = "Alexa" handle = "@alexa99" image={AlexaImage}
                    description="Alexa was created by Amazona nd helps you buy things."/>
                    </div>
                    <div className='column is-4'>
                    <ProfileCard title = "cortona" handle = "@cortoan56" image={CortanaImage}
                    description="Cortana was created by Microsoft. Who knows what it does?"/>
                    </div>
                    <div className='column is-4'>
                    <ProfileCard title = "siri" handle = "@siri23" image={SiriImage}
                    description="Siri was created by Apple and i phased out."/>
                    </div>
                    </div>
                </section>
            </div>          
        </div>
    );
}

export default App;