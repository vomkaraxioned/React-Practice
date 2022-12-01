import styled from "styled-components";

const Wrapper = styled.div.attrs({size:"21px"})`
width:80%;
margin:0 auto;

h1{
  color:#f00;
  text-align:center;
}

ul {
  display:flex;
  flex-direction:column;
  list-style-type:none;
}

li {
  padding:20px 0;
  margin-bottom:20px;
  background:#454545;
  color:${props=>props.color};
  font-size:${props=>props.size};
  text-align:center;

  &:last-child{
    margin-bottom:none;
  }

  &:first-letter {
    text-transform:capitalize;
  }
}
`;

export default Wrapper;