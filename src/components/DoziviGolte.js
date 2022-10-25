import { useEffect, useState } from "react";
import { FormattedMessage } from 'react-intl';
import { Route, Routes, NavLink } from 'react-router-dom'
import { AiOutlineArrowUp } from 'react-icons/ai';
import '../styles/dozivi-golte.sass';
import DoziviGolteAktivnostiKrpljanje from './aktivnosti/DoziviGolteAktivnostiKrpljanje';
import DoziviGolteAktivnostiOtroci from './aktivnosti/DoziviGolteAktivnostiOtroci';
import DoziviGolteAktivnostiPlezanje from './aktivnosti/DoziviGolteAktivnostiPlezanje';
import DoziviGolteAktivnostiPohodi from './aktivnosti/DoziviGolteAktivnostiPohodi';
import DoziviGolteAktivnostiSankanje from './aktivnosti/DoziviGolteAktivnostiSankanje';
import DoziviGolteAktivnostiServis from './aktivnosti/DoziviGolteAktivnostiServis';
import DoziviGolteAktivnostiSmucanje from './aktivnosti/DoziviGolteAktivnostiSmucanje';
import DoziviGolteAktivnostiSnowbiking from './aktivnosti/DoziviGolteAktivnostiSnowbiking';
import DoziviGolteAktivnostiSola from './aktivnosti/DoziviGolteAktivnostiSola';
import DoziviGolteAktivnostiTekmovanja from './aktivnosti/DoziviGolteAktivnostiTekmovanja';
import DoziviGolteAktivnosti from './DoziviGolteAktivnosti';
import DoziviGolteKulinarika from './DoziviGolteKulinarika';
import DoziviGolteMap from './DoziviGolteMap';

function DoziviGolte () {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <h1 className='subheader'>
                <FormattedMessage
                    id = "experience.header"
                    defaultMessage="Experience Golte"
                />
            </h1>
            <article>
                <nav>
                    <NavLink to='/experiencegolte/' end className={(navData) => navData.isActive ? "selected" : "" } >
                        <span>
                            <FormattedMessage
                                id = "experience.activities"
                                defaultMessage="Activities"
                            />
                        </span>
                    </NavLink>
                    <NavLink to='/experiencegolte/culinary' className={(navData) => navData.isActive ? "selected" : "" } >
                        <span>
                        <FormattedMessage
                                id = "experience.culinary"
                                defaultMessage="Culinary"
                            />
                        </span>
                    </NavLink>
                    <NavLink to='/experiencegolte/map' className={(navData) => navData.isActive ? "selected" : "" } >
                        <span>
                            <FormattedMessage
                                id = "experience.map"
                                defaultMessage="Map"
                            />
                        </span>
                    </NavLink>
                </nav>
                <section>
                    <Routes>
                        <Route path='/' exact element={<DoziviGolteAktivnosti />} />
                        <Route path='/skiandboard' element={<DoziviGolteAktivnostiSmucanje />} />
                        <Route path='/childrensplayground' element={<DoziviGolteAktivnostiOtroci />} />
                        <Route path='/skischool' element={<DoziviGolteAktivnostiSola />} />
                        <Route path='/skiservice' element={<DoziviGolteAktivnostiServis />} />
                        <Route path='/skicompetitions' element={<DoziviGolteAktivnostiTekmovanja />} />
                        <Route path='/sledding' element={<DoziviGolteAktivnostiSankanje />} />
                        <Route path='/snowshoeing' element={<DoziviGolteAktivnostiKrpljanje />} />
                        <Route path='/snowbiking' element={<DoziviGolteAktivnostiSnowbiking />} />
                        <Route path='/hiking' element={<DoziviGolteAktivnostiPohodi />} />
                        <Route path='/climbing' element={<DoziviGolteAktivnostiPlezanje />} />
                        <Route path='/culinary' element={<DoziviGolteKulinarika />} />
                        <Route path='/map' element={<DoziviGolteMap />} />
                    </Routes> 
                </section>
                {showTopBtn && (<button className="to-top" onClick={goToTop}>
                <AiOutlineArrowUp />
            </button>)}
            </article>
        </>
    )
}

export default DoziviGolte;