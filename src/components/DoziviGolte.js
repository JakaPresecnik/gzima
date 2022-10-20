import { FormattedMessage } from 'react-intl';
import '../styles/dozivi-golte.sass';
import DoziviGolteAktivnostiKrpljanje from './DoziviGoletAktivnostIKrpljanje';
import DoziviGolteAktivnostiOtroci from './DoziviGolteAktivnostiOtroci';
import DoziviGolteAktivnostiPlezanje from './DoziviGolteAktivnostiPlezanje';
import DoziviGolteAktivnostiPohodi from './DoziviGolteAktivnostiPohodi';
import DoziviGolteAktivnostiSankanje from './DoziviGolteAktivnostiSankanje';
import DoziviGolteAktivnostiServis from './DoziviGolteAktivnostiServis';
import DoziviGolteAktivnostiSmucanje from './DoziviGolteAktivnostiSmucanje';
import DoziviGolteAktivnostiSnowbiking from './DoziviGolteAktivnostiSnowbiking';
import DoziviGolteAktivnostiSola from './DoziviGolteAktivnostiSola';
import DoziviGolteAktivnostiTekmovanja from './DoziviGolteAktivnostiTekmovanja';

function DoziviGolte () {
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
                    <span>
                        <FormattedMessage
                            id = "experience.activities"
                            defaultMessage="Activities"
                        />
                    </span>
                    <span>
                    </span>
                    <span></span>
                </nav>
                <section>
                    <DoziviGolteAktivnostiSmucanje />
                    <hr />
                    <DoziviGolteAktivnostiOtroci />
                    <hr />
                    <DoziviGolteAktivnostiSola />
                    <hr />
                    <DoziviGolteAktivnostiServis />
                    <hr />
                    <DoziviGolteAktivnostiTekmovanja />
                    <hr />
                    <DoziviGolteAktivnostiSankanje />
                    <hr />
                    <DoziviGolteAktivnostiKrpljanje />
                    <hr />
                    <DoziviGolteAktivnostiSnowbiking />
                    <hr />
                    <DoziviGolteAktivnostiPohodi />
                    <hr />
                    <DoziviGolteAktivnostiPlezanje />
                </section>
            </article>
        </>
    )
}

export default DoziviGolte;