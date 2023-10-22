import styled from "styled-components";

export const SearchBox = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 20px;
    box-sizing: border-box; 
`
export const SearchInputBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border-bottom: 1px solid var(--borderColor);
    padding: 10px;
`
export const SearchPrev = styled.div`
    button {
        height: 100%;
        img {vertical-align: top;}
    }
`
export const SearchUser = styled.div`
    width: 100%;
    height: 32px;
    background: var(--borderColor);
    border-radius: 32px;
    input {
        background: none;
        padding: 8px 10px;
    }
`
export const SearchUserList = styled.div`
    height: calc(100% - 111px); 
    overflow: hidden;
    .userBox {
        padding: 10px 0;
        display: flex;
        gap: 7px;
        .userPost {
            padding-bottom: 3px;
            p {color: var(--disableColor);}
        }
    }
`