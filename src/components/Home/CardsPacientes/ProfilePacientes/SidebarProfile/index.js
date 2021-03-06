import React from "react";
import styled from "styled-components";;

function SidebarProfile() {
    return (
        <StyleSidebarProfile>
            <div className="wrapper-left">
                <div className="sidebar-left">
                    <br />
                    <div className="center">
                        <img className="img-profile" src="https://pbs.twimg.com/profile_images/1315309188550139904/1kiSQSJN_400x400.jpg" alt="" />
                    </div>
                    <br />
                    <div className="center">
                        <p className="size-name-profile"><strong>Nelson Hernandez</strong></p>
                    </div>
                    <br />
                    <div className="center">
                        <p>Sonsonate, sonzacate, El Sauce</p>
                    </div>
                    <br />
                    <div className="center">
                        <p>
                            <span className="material-icons padding-cellphone">
                                phone
                            </span>
                        </p>
                        <p className="padding-cellphone">72836351</p>
                    </div>
                </div>
            </div>
        </StyleSidebarProfile>
    );
}

export default SidebarProfile;

const StyleSidebarProfile = styled.div`
  .wrapper-left {
    position: fixed;
    top: 0; /* Stay at the top */
    left: 1;
    right: 0;
  }
  .wrapper-left .sidebar-left {
    width: 250px;
    min-height: 100vh;
    height: 100%;
    background-color: white;
  }
  .center{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .img-profile{
      height: 100px;
      width: 100px;
      border-radius: 50%;
  }
  .size-name-profile{
    font-size: 25px;
  }
  .padding-cellphone{
      padding: 5px;
      font-size: 24px;
  }
`;