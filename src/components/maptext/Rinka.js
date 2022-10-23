import { FormattedMessage } from "react-intl";

function Rinka () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.rinka"
                    defaultMessage="Rinka Waterfall"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.rinka.text"
                    defaultMessage="Rinka Waterfall is one of the highest free-falling waterfalls in Slovenia. Because of its grandeur and height, Rinka has been a natural monument since 1987."
                />
            </p>
            <a href="https://www.logarska-dolina.si/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.rinka.link"
                    defaultMessage="https://www.logarska-dolina.si/"
                />
            </a>
        </div>
    )
}

export default Rinka; 