import { FormattedMessage } from "react-intl";

function DoziviGolteAktivnostiSankanje () {
    return (
        <div>
            <h2>
                <FormattedMessage
                    id = "experience.activities.sledding.header"
                    defaultMessage="Sledding"
                />
            </h2>
            <p>
                <FormattedMessage
                    id = "experience.activities.sledding.text.one"
                    defaultMessage="On the Morava ski slope, there is a safe sledding ground specially designed for the youngest ones. The Morava track is easily accessible from the Alpine Garden."
                />
            </p>
            <p>
                <FormattedMessage
                    id = "experience.activities.sledding.text.two"
                    defaultMessage="We also offer sledding in the evenings. The children's playground next to the hotel turns into a real sledding ground in the evening. The track is illuminated and therefore it is suitable for safe sledding even when it is dark. Sledding on both tracks is free, and so is the renting of a sledge or zibob sled."
                />
            </p>
        </div>
    )
}

export default DoziviGolteAktivnostiSankanje;