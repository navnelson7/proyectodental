import styled from "styled-components";
export const StyleInput = styled.div`
.form-input {
  width: 90%;
  height: 35px;
  appearance: none;
  color: #0d0c22;
  background-color: #f3f3f4;
  font-size: 14px;
  outline: none;
  border-radius: 8px;
  padding: 5px 5px;
  margin: 0em;
  border: 2px solid #f3f3f4;
  transition: 0.5s;
  margin-top: 10px;
  margin-bottom: 10px;
}
.form-input:hover {
  transition: 0.5s;
  background-color: #fff;
  border-color: #8338EC;
  -webkit-box-shadow: 0 0 0 4px rgb(131,56,236);
  box-shadow: 0 0 0 4px rgb(131,56,236);
}
`;


export const StyleSwitch = styled.div`
.txt-switch-top{
    margin-top: 5px;
    color: #987884;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 53px;
  height: 25px;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #1A77FA;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
`