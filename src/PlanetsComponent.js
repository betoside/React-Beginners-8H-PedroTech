export const PlanetsComponent = (props) => {
    return(
        <div>{props.name} {props.isGasPlanet ? 'true' : 'false'}</div>
    );
}