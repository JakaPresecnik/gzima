import { FormattedMessage } from "react-intl";
import { CgInternal } from 'react-icons/cg';
import { NavLink } from 'react-router-dom'
import DoziviGolteAktivnostiKrpljanje from './aktivnosti/DoziviGolteAktivnostiKrpljanje';
import DoziviGolteAktivnostiOtroci from './aktivnosti/DoziviGolteAktivnostiOtroci';
import DoziviGolteAktivnostiPlezanje from './aktivnosti/DoziviGolteAktivnostiPlezanje';
import DoziviGolteAktivnostiPohodi from './aktivnosti/DoziviGolteAktivnostiPohodi';
import DoziviGolteAktivnostiSankanje from './aktivnosti/DoziviGolteAktivnostiSankanje';
import DoziviGolteAktivnostiServis from './aktivnosti/DoziviGolteAktivnostiServis';
import DoziviGolteAktivnostiSnowbiking from './aktivnosti/DoziviGolteAktivnostiSnowbiking';
import DoziviGolteAktivnostiSola from './aktivnosti/DoziviGolteAktivnostiSola';
import DoziviGolteAktivnostiTekmovanja from './aktivnosti/DoziviGolteAktivnostiTekmovanja';
import smucanjeDeskanje from '../img/smucanje_in_deskanje.jpg';

function DoziviGolteAktivnosti () {
    return (
        <div>
            <h2>
                <FormattedMessage
                    id = "experience.activities"
                    defaultMessage="Activities"
                />
            </h2>
            <div className="aktivnosti">
                <NavLink to="/experiencegolte/skiandboard" ><figure>
                    <img src={smucanjeDeskanje} alt='Skiing and Snowboarding'/>
                    <figcaption>
                        <FormattedMessage
                            id = "experience.activities.skiing.header"
                            defaultMessage="Skiing and Snowboarding"
                        />
                        <button>
                            <CgInternal />
                        </button>
                    </figcaption>
                </figure></NavLink>
                <NavLink to="/experiencegolte/childrensplayground" ><figure>
                    <img src={smucanjeDeskanje} alt="Children's Playground"/>
                    <figcaption>
                        <FormattedMessage
                            id = "experience.activities.children.header"
                            defaultMessage="Children's Playground"
                        />
                        <button>
                            <CgInternal />
                        </button>
                    </figcaption>
                </figure></NavLink>
                <NavLink to="/experiencegolte/skischool" ><figure>
                    <img src={smucanjeDeskanje} alt="Ski School"/>
                    <figcaption>
                        <FormattedMessage
                            id = "experience.activities.school.header"
                            defaultMessage="Ski School"
                        />
                        <button>
                            <CgInternal />
                        </button>
                    </figcaption>
                </figure></NavLink>
                <NavLink to="/experiencegolte/skiservice" ><figure>
                    <img src={smucanjeDeskanje} alt="Ski Service and Ski Equipment Rental"/>
                    <figcaption>
                        <FormattedMessage
                            id = "experience.activities.skiservice.header"
                            defaultMessage="Ski Service and Ski Equipment Rental"
                        />
                        <button>
                            <CgInternal />
                        </button>
                    </figcaption>
                </figure></NavLink>
                <NavLink to="/experiencegolte/skicompetitions" ><figure>
                    <img src={smucanjeDeskanje} alt="Skiing Competitions"/>
                    <figcaption>
                        <FormattedMessage
                            id = "experience.activities.competition.header"
                            defaultMessage="Skiing Competitions"
                        />
                        <button>
                            <CgInternal />
                        </button>
                    </figcaption>
                </figure></NavLink>
                <NavLink to="/experiencegolte/sledding" ><figure>
                    <img src={smucanjeDeskanje} alt="Sledding"/>
                    <figcaption>
                        <FormattedMessage
                            id = "experience.activities.sledding.header"
                            defaultMessage="Sledding"
                        />
                        <button>
                            <CgInternal />
                        </button>
                    </figcaption>
                </figure></NavLink>
                <NavLink to="/experiencegolte/snowshoeing" ><figure>
                    <img src={smucanjeDeskanje} alt="Snowshoeing"/>
                    <figcaption>
                        <FormattedMessage
                            id = "experience.activities.snowshoeing.header"
                            defaultMessage="Snowshoeing"
                        />
                        <button>
                            <CgInternal />
                        </button>
                    </figcaption>
                </figure></NavLink>
                <NavLink to="/experiencegolte/snowbiking" ><figure>
                    <img src={smucanjeDeskanje} alt="Snowbiking"/>
                    <figcaption>
                        <FormattedMessage
                            id = "experience.activities.snowbiking.header"
                            defaultMessage="Snowbiking"
                        />
                        <button>
                            <CgInternal />
                        </button>
                    </figcaption>
                </figure></NavLink>
                <NavLink to="/experiencegolte/hiking" ><figure>
                    <img src={smucanjeDeskanje} alt="Hiking"/>
                    <figcaption>
                        <FormattedMessage
                            id = "experience.activities.hiking.header"
                            defaultMessage="Hiking"
                        />
                        <button>
                            <CgInternal />
                        </button>
                    </figcaption>
                </figure></NavLink>
                <NavLink to="/experiencegolte/climbing" ><figure>
                    <img src={smucanjeDeskanje} alt="Climbing"/>
                    <figcaption>
                        <FormattedMessage
                            id = "experience.activities.climbing.header"
                            defaultMessage="Climbing"
                        />
                        <button>
                            <CgInternal />
                        </button>
                    </figcaption>
                </figure></NavLink>
            </div>
        </div>
    )
}

export default DoziviGolteAktivnosti;