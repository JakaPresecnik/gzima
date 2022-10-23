import { FormattedMessage } from "react-intl";

function Rudnik () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.rudnik"
                    defaultMessage="Coal Mining Museum"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.rudnik.text"
                    defaultMessage="In the museum you can experience the development of coal mining over time, from the old days to modern times. You will get to know how miners lived more than 100 years ago."
                />
            </p>
            <a href="http://muzej.rlv.si/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.rudnik.link"
                    defaultMessage="http://muzej.rlv.si/"
                />
            </a>
        </div>
    )
}

export default Rudnik; 