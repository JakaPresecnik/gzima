import { FormattedMessage } from "react-intl";

function DoziviGolteAktivnostiTekmovanja () {
    return (
        <div>
            <h2>
                <FormattedMessage
                    id = "experience.activities.competition.header"
                    defaultMessage="Skiing Competitions"
                />
            </h2>
            <p>
                <FormattedMessage
                    id = "experience.activities.competition.text.one"
                    defaultMessage="We organize attractive sports competitions for closed groups, which guarantee a true winter party at Golte. Skiing competitions are a great way to socialize and strengthen team spirit. As part of the event, we also organize lunch and social gatherings after the competition."
                />
            </p>
            <p>
                <FormattedMessage
                    id = "experience.activities.competition.text.two"
                    defaultMessage="The price already includes the preparation of a racing track, professional timing and display of results. We also provide the announcement of final results on the victory stand. In accordance with your wishes and expectations, we can prepare a unique sporting event for you."
                />
            </p>
            <button>
                <FormattedMessage
                    id = "experience.activities.competition.button"
                    defaultMessage="Book Skiing Competition"
                />
            </button>
        </div>
    )
}

export default DoziviGolteAktivnostiTekmovanja;