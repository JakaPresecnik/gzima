import { FormattedMessage } from "react-intl";

function KocaMenina () {
    return (
        <div>
            <h4>
                <FormattedMessage
                    id = "experience.maps.cottages.menina"
                    defaultMessage="Dom na Menini planini"
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

export default KocaMenina; 