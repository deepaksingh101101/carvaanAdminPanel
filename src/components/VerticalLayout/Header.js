import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from "react";

import { connect } from "react-redux";
import { Form, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Input, Button } from "reactstrap";

import { Link } from "react-router-dom";


// Import menuDropdown
// import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import logodarkImg from "../../assets/images/CarvaanLogo.png";
import logosmImg from "../../assets/images/logo-sm.png"; // Change the logo of carvaan in small 
import logolightImg from "../../assets/images/CarvaanLogo.png";


//i18n
import { withTranslation } from "react-i18next";

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions";

const Header = props => {
  // const [search, setsearch] = useState(false);
  // const [singlebtn, setSinglebtn] = useState(false);

  // const sidebarItems = ["Dashboard", "Admin Details", "Create Admin", "Trip Details","Create Trip","Customer Details","Create Customer","Order Details","Create Order","Coupons Details","Create Coupons","Create Carvaan Special", "Carvaan Special Details","Manage Booking List","Review List","Create Blog","Edit Blog"];
  const sidebarLinks = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Admin Details", link: "/adminDetails" },
    { name: "Create Admin", link: "/createAdmin" },
    { name: "Trip Details", link: "/tripDetails" },
    { name: "Create Trip", link: "/createTrip" },
    { name: "Customer Details", link: "/customerDetails" },
    { name: "Create Customer", link: "/createCustomer" },
    { name: "Order Details", link: "/orderDetails" },
    { name: "Create Order", link: "/createOrder" },
    { name: "Coupons Details", link: "/couponsDetails" },
    { name: "Create Coupons", link: "/createCoupons" },
    { name: "Create Carvaan Special", link: "/createCarvaan" },
    { name: "Carvaan Special Details", link: "/carvaanDetails" },
    { name: "Manage Booking List", link: "/manageDetails" },
    { name: "Review List", link: "/reviewDetails" },
    { name: "Add Blog", link: "/addBlog" },
    { name: "Blog Details", link: "/blogDetails" },
    { name: "FAQ Details", link: "/faqDetails" },
    { name: "Create FAQ", link: "/createFaq" }
  ];
  // const [searchTerm, setSearchTerm] = useState("");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  
  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setSearchTerm("")
      setIsDropdownOpen(false);
    }
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setIsDropdownOpen(true);
  };

  const filteredSidebarLinks = sidebarLinks.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  // const handleSearchInput = (event) => {
  //   setSearchTerm(event.target.value.toLowerCase());
  // };

  // Filter sidebar items based on search term
  // const filteredSidebarItems = sidebarItems.filter(item =>
  //   item.toLowerCase().includes(searchTerm)
  // );

  // const filteredSidebarLinks = sidebarLinks.filter(item =>
  //   item.name.toLowerCase().includes(searchTerm)
  // );


  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function tToggle() {
    var body = document.body;
    if (window.screen.width <= 992) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }
  

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logosmImg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logodarkImg} alt="" height="17" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logosmImg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logolightImg} alt="" height="18" />
                </span>
              </Link>
            </div>
            <button type="button" className="btn btn-xl px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={() => {
                tToggle();
              }}
              data-target="#topnav-menu-content"
            >
              <i className="fas fa-align-left"></i>
            </button>

            <div className="d-none d-sm-block">

              {/* <Dropdown
                isOpen={singlebtn}
                toggle={() => setSinglebtn(!singlebtn)}
                className="pt-3 d-inline-block"
              >
                <DropdownToggle className="btn btn-secondary" caret>
                  Create <i className="mdi mdi-chevron-down"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                  <div className="dropdown-divider"></div>
                  <DropdownItem>Separated link</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}

            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center">
          <form className="app-search d-none d-lg-block">
        <div className="position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={handleSearchInput}
            ref={dropdownRef}
            value={searchTerm}
          />
          <span className="fa fa-search"></span>
        </div>
      </form>
      {searchTerm && (
              <Dropdown  isOpen={isDropdownOpen} style={{ position: "absolute", right: "435px", top: "42px"}} className="search-results" innerRef={dropdownRef}>
                <DropdownMenu className="pt-4" style={{background:"#E0E0EA", borderTopRightRadius:"0",borderTopLeftRadius:"0", width:"223px", border:"0" }}>
                  {filteredSidebarLinks.map((link, index) => (
                    <DropdownItem key={index} className="search-result-item">
                      <Link style={{color:"black"}} to={link.link}>{link.name}</Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            )}
            {/* <Dropdown
              className="d-inline-block d-lg-none ms-2"
              onClick={() => {
                setsearch(!search);
              }}
              type="button"
            >
              <DropdownToggle
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                tag="button"
              > <i className="mdi mdi-magnify"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                <Form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <Input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                      <div className="input-group-append">
                        <Button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></Button>
                      </div>
                    </div>
                  </div>
                </Form>
              </DropdownMenu>
            </Dropdown> */}

            {/* <LanguageDropdown /> */}

            <div className="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen();
                }}
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="mdi mdi-fullscreen"></i>
              </button>
            </div>

            <NotificationDropdown />
            <ProfileMenu />

            <div
              onClick={() => {
                props.showRightSidebarAction(!props.showRightSidebar);
              }}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="mdi mdi-cog-outline"></i>
              </button>
            </div>
          </div>

        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
};

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
  } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header));
