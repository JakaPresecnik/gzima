import { FormattedMessage } from "react-intl";

function Velenje () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.velenje"
                    defaultMessage="Velenje beach"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.velenje.text"
                    defaultMessage="The Velenje beach on the lake is considered the best natural bathing spot in Slovenia and attracts many tourists every year for a dose of enjoyment and relaxation."
                />
            </p>
            <a href="http://www.velenje-tourism.si" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.velenje.link"
                    defaultMessage="http://www.velenje-tourism.si"
                />
            </a>
        </div>
    )
}

export default Velenje; 