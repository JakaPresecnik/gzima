import { BsSunFill, BsCameraVideoFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa'

import {ReactComponent as SkiLift} from '../icons/ski-lift.svg';

function Info () {
    return (
        <div id="info-nav">
            <span><BsSunFill /></span>
            <span><SkiLift className="svg-icon" /></span>
            <span><BsCameraVideoFill /></span>
            <span><FaMapMarkedAlt /></span>
            <span><FaMapMarkerAlt /></span>
            <span><BsFillTelephoneFill /></span>
        </div>
    )
}

export default Info;