import { PropTypes } from "prop-types";

export const Person = (props) => {

    return (
        <div>
            <p><strong>Nome</strong>: {props.name}</p>
            <p><strong>e-mail</strong>: {props.email}</p>
            <p><strong>idade</strong>: {props.age}</p>
            <p><strong>Casado</strong>: {props.isMarried ? 'casado' : 'solteiro'}</p>
            <p><strong>Friends</strong>: {props.friends.map((friend, index) => (<span key={index}>{friend} + '. '</span>))}</p>
        </div>
    );

}

Person.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string, 
    age: PropTypes.number, 
    isMarried: PropTypes.bool, 
    friends: PropTypes.arrayOf(PropTypes.string)
};