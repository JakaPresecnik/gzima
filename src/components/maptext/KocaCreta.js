import { FormattedMessage } from "react-intl";

function KocaCreta () {
    return (
        <div>
            <h4>
                <FormattedMessage
                    id = "experience.maps.cottages.creta"
                    defaultMessage="Planinski dom I. Štajerskega bataljona na Čreti"
                />
            </h4>
            <a href="https://www.pzs.si/koce.php" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.maps.cottages.link"
                    defaultMessage="https://www.pzs.si/koce.php"
                />
            </a>
        </div>
    )
}

export default KocaCreta; 