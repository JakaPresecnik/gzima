import { FormattedMessage } from "react-intl";

function Logarska () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.logarska"
                    defaultMessage="Logarska valley"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.logarska.text"
                    defaultMessage="The Logar Valley is one of the most beautiful Alpine glacial valleys in Europe and cuts into the Kamnik-Savinjske Alps from the north. Tourism, as an added value to agriculture and forestry, offers relaxation in the peaceful environment of the landscape park and many activities of hiking, cycling, horse riding, photo hunting..."
                />
            </p>
            <a href="https://www.logarska-dolina.si/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.logarska.link"
                    defaultMessage="https://www.logarska-dolina.si/"
                />
            </a>
        </div>
    )
}

export default Logarska;