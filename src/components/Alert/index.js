import React, { Fragment } from "react";
import styled from "styled-components";

const StyleToast = styled.div`
  .center-snackbar{
    display:flex;
    justify-content: center;
  }
  #snackbar {
    visibility: hidden;
    min-width: 250px;
    background-color: #240046;
    color: white;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    bottom: 160px;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  #snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 160px;
      opacity: 1;
    }
  }
  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 160px;
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
  @keyframes fadeout {
    from {
      bottom: 160px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;

export const showAlert = () => {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
};

function Alert({ text }) {
    return (
        <Fragment>
            <StyleToast>
                <div className="center-snackbar">
                    <div id="snackbar">
                        {text}
                    </div>
                </div>
            </StyleToast>
        </Fragment>
    );
}

export default Alert;