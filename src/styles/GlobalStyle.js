import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    :root {
        --bgColor: #12184E;
        --hoverColor: #6F76B6;
        --fontColor: #767676;
        --borderColor: #DBDBDB;
        --whiteColor: #ffffff;
        --disableColor: #7A8CCB;
    }
    ${reset}
`;
export default GlobalStyle;