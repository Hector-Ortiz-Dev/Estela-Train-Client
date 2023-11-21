import { useEffect } from "react";
import PropTypes from "prop-types";
import styled, {keyframes} from "styled-components";

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const ContainerAlert = styled.div`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
 
    p {
        background: ${(props) => {
            if(props.type === 'error'){
                return '#C80009';
            } else if (props.type === 'success') {
                return '#00AD6E';
            } else {
                return '#000';
            }
        }};
        color: #fff;
        padding: 1.25rem 2.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`;

const Alert = ({type, message, stateAlert, changeStateAlert}) => {
    useEffect(() => {
        let time;

        if(stateAlert === true){
            time = setTimeout(() => {
                changeStateAlert(false);
            }, 4000);
        }

        return(() => clearTimeout(time));
    }, [stateAlert, changeStateAlert]);
    
    return(
        <>
            {stateAlert &&
                <ContainerAlert type={type}>
                    <p>{message}</p>
                </ContainerAlert>
            }
        </>
    )
}

Alert.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
    stateAlert: PropTypes.bool,
    changeStateAlert: PropTypes.func,
}

export default Alert;