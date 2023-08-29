import '../Assets/Style/skiils2.css'
const DarkmodeSkills = () => {
    return (
        <>
<div id='/skills'>
            <div class='text-center pt-5 mt-5 mb-5'> <h2>Skills</h2>
                <div class='pt-3'>
                    <ul class='bols'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div> 
            <br/>
            <div class="container">

                <div class="container__progressbars">

                    <div class="progressbar">
                        <svg class="progressbar__svg">
                            <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
                        </svg>
                        <span class="progressbar__text shadow-html">JavaScript</span>
                    </div>

                    <div class="progressbar">
                        <svg class="progressbar__svg">
                            <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-css shadow-css"> </circle>
                        </svg>
                        <span class="progressbar__text shadow-css">Reactjs/Native</span>
                    </div>

                    <div class="progressbar">
                        <svg class="progressbar__svg">
                            <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-scss shadow-scss"> </circle>
                        </svg>
                        <span class="progressbar__text shadow-scss">Node.js</span>
                    </div>

            

                    <div class="progressbar">
                        <svg class="progressbar__svg">
                            <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
                        </svg>
                        <span class="progressbar__text shadow-html">MongoDB</span>
                    </div>
                    <div class="progressbar">
                        <svg class="progressbar__svg">
                            <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-angular shadow-angular"> </circle>
                        </svg>
                        <span class="progressbar__text shadow-angular">Docker</span>
                    </div>
                
                </div>

            </div>


            <div id="main-container-social" class="main-container-social"></div>

            </div>
        </>
    )
}

export default DarkmodeSkills;