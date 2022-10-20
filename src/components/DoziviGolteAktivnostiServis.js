import { FormattedMessage } from "react-intl";

function DoziviGolteAktivnostiServis () {
    return (
        <div>
            <h2>
                <FormattedMessage
                    id = "experience.activities.skiservice.header"
                    defaultMessage="Ski Service and Ski Equipment Rental"
                />
            </h2>
            <p>
                <FormattedMessage
                    id = "experience.activities.skiservice.text"
                    defaultMessage="In addition to ski courses and individual ski classes, we also offer you ski service and ski equipment rental. For all those who do not have their own equipment or do not want to worry about transporting the equipment to the ski resorts, we have top-notch equipment that will make you safe and carefree on the ski slopes. Visit the Medvedjak restaurant where you will find a ski service, ski equipment rental and consultation with ski instructors."
                />
            </p>
            <button>
                <FormattedMessage
                    id = "experience.activities.skiservice.button"
                    defaultMessage="Price List of Ski School Services and Ski Equipment Rental"
                />
            </button>
        </div>
    )
}
export default DoziviGolteAktivnostiServis;