import styled from "styled-components";

const AppHeader = styled.AppHeader`
    background: blue;
    width: 100%;
    border-radius: 3px;
    border: 2px solid grey;
    margin: 0 1em; 
    padding: 0.25em 1em
    `

export default AppHeader;

//If margin has 1 value, all four directions affected. If 2, first is top and bottom, second is right and left
// If three, first is top, second is right and left, third is bottom. If four, top, right, bottom, then left