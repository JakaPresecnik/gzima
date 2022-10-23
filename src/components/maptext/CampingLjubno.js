import { FormattedMessage } from "react-intl";

function CampingLjubno () {
    return (
        <div>
            <h4>
                <FormattedMessage
                    id = "experience.maps.camping.ljubno"
                    defaultMessage="Glamping Savinja Ljubno"
                />
            </h4>
            <a href="https://www.glamping.si" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.maps.camping.ljubno.link"
                    defaultMessage="https://www.glamping.si"
                />
            </a>
        </div>
    )
}

export default CampingLjubno; 