import React, { Component } from "react";
// import liff from "@line/liff";


const liffId = "1656921789-Dqv4NxaJ";

class Login extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      pictureUrl: "",
      // prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  componentDidMount = async () => {
    const liff = (await import('@line/liff')).default
    await liff.init({ liffId: `${liffId}` }).catch((err) => {
      throw err;
    });
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      this.setState({
        pictureUrl: getProfile.pictureUrl,
      });
    } else {
      liff.login();
    }
    // window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount() {
    // window.removeEventListener("scroll", this.handleScroll);
  }

  // handleScroll = () => {
  //   const { prevScrollpos } = this.state;

  //   const currentScrollPos = window.pageYOffset;
  //   const visible = prevScrollpos > currentScrollPos;

  //   this.setState({
  //     prevScrollpos: currentScrollPos,
  //     visible,
  //   });
  // };

  render() {
    return (
      
          <div class="dropdown">
          <div class="dropbtn">
            <button className="btn">
              <img
                className="nav_profile_pic"
                alt="pic"
                src={this.state.pictureUrl}
              />

              <i class="fas fa-angle-down"></i>
            </button>

            {/* <Navdrop /> */}

            {/* <div class="dropdown-content">
  
 
    < a> Profile</a>

   
    
    <a href="#">My List</a>
    
  </div> */}
          </div>
        </div>
      //     </header>
      //   </div>
    );
  }
}

export default Login;