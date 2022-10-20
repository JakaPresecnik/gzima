import { FormattedMessage } from "react-intl";

function DoziviGolteAktivnostiSola () {
    return (
        <div>
            <h2>
                <FormattedMessage
                    id = "experience.activities.school.header"
                    defaultMessage="Ski School"
                />
            </h2>
            <p>
                <FormattedMessage
                    id = "experience.activities.school.text.one"
                    defaultMessage="On Golte there is a recognized ski and snowboarding school with a long tradition. The ski school is distinguished by professional ski instructors and an integrated and individual approach to each trainee or a group."
                />
            </p>
            <p>
                <FormattedMessage
                    id = "experience.activities.school.text.two"
                    defaultMessage="Due to the high demand an advance booking of the course is recommended. After selecting the course, complete the information form that opens by clicking on the button <q>Book a ski teacher</q>. In the form you will also find a list of ski school services and ski equipment rental."
                />
            </p>
            <button>
                <FormattedMessage
                    id = "experience.activities.school.button.one"
                    defaultMessage="Book A Ski Teacher"
                />
            </button>
            <button>
                <FormattedMessage
                    id = "experience.activities.school.button.two"
                    defaultMessage="Price List of Ski School Services and Ski Equipment Rental"
                />
            </button>
        </div>
    )
}

export default DoziviGolteAktivnostiSola;