import { FormattedMessage } from 'react-intl';
import '../styles/dozivi-golte.sass';

function DoziviGolte () {
    return (
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
                <h1>
                    <FormattedMessage
                        id = "experience.header"
                        defaultMessage="Experience Golte"
                    />
                </h1>
            </section>
        </article>
    )
}

export default DoziviGolte;