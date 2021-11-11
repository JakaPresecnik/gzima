import snowflake from '../icons/snowflake.png'
import '../styles/animation.css';

function Animated () {

    return (
        <div style={{height: '100vh'}}>
            <img src={snowflake} style={{
                position: 'relative',
                bottom: '500px',
                animation: 'fall 5s linear 2s infinite alternate'
                }} />
        </div>
    )
}

export default Animated;