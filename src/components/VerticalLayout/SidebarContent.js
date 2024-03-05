import PropTypes from "prop-types";
import React, { useEffect, useCallback, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import withRouter from "components/Common/withRouter";
import { Link, useLocation } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = props => {
  const location = useLocation();
  const ref = useRef();
  const path = location.pathname;

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag
        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active"); // li
            parent3.childNodes[0].classList.remove("mm-active");

            const parent4 = parent3.parentElement; // ul
            if (parent4) {
              parent4.classList.remove("mm-show"); // ul
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show"); // li
                parent5.childNodes[0].classList.remove("mm-active"); // a tag
              }
            }
          }
        }
      }
    }
  };

  const activeMenu = useCallback(() => {
    const pathName = location.pathname;
    const fullPath = pathName;
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (fullPath === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [path, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Main")} </li>
            {/* -------Dashboard------- */}
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="fas fa-home"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>
            {/* -------Admin------- */}
            <li>
              <Link to="/admin" className="waves-effect">
                <i className="fas fa-user"></i>
                <span>{props.t("Admin")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
              <li>
                  <Link to="/adminDetails"><i className="fas fa-user-cog"></i>{props.t("Admin Details")}</Link>
                </li>
                <li>
                  <Link to="/createAdmin"><i className="fas fa-user-plus"></i>{props.t("Create Admin")}</Link>
                </li>
                </ul>
            </li>
            {/* -------Trips------- */}
            <li>
              <Link to="/trips" className="waves-effect">
                <i className="fas fa-plane-departure"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("Trips")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
              <li>
                  <Link to="/tripDetails"><i className="fas fa-plane-arrival"></i>{props.t("Trip Details")}</Link>
                </li>
                <li>
                  <Link to="/createTrip"><i className="fas fa-suitcase-rolling"></i>{props.t("Create Trip")}</Link>
                </li>
                </ul>
            </li>
            {/* -------Customers------- */}
            <li>
              <Link to="/customers" className="waves-effect">
                <i className="fas fa-users"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("Customers")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
              <li>
                  <Link to="/customerDetails"><i className="fas fa-users-cog"></i>{props.t("Customer Details")}</Link>
                </li>
                <li>
                  <Link to="/createCustomer"><i className="fas fa-user-plus"></i>{props.t("Create Customer")}</Link>
                </li>
                </ul>
            </li>
            {/* -------Order------- */}
            <li>
              <Link to="/order" className="waves-effect">
                <i className="fas fa-users"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("Orders")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
              <li>
                  <Link to="/orderDetails"><i className="fas fa-users-cog"></i>{props.t("Order Details")}</Link>
                </li>
                <li>
                  <Link to="/createOrder"><i className="fas fa-user-plus"></i>{props.t("Create Order")}</Link>
                </li>
                </ul>
            </li>
             {/* -------Coupons------- */}
             <li>
              <Link to="/coupons" className="waves-effect">
                <i className="fas fa-users"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("Coupons")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
              <li>
                  <Link to="/couponsDetails"><i className="fas fa-users-cog"></i>{props.t("Coupons Details")}</Link>
                </li>
                <li>
                  <Link to="/createCoupons"><i className="fas fa-user-plus"></i>{props.t("Create Coupons")}</Link>
                </li>
                </ul>
            </li>
            {/* Carvaan Special */}
            <li>
              <Link to="/carvaan_special" className="waves-effect">
                <i className="fas fa-plane-departure"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("Carvaan Special")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
              <li>
                  <Link to="/carvaanDetails"><i className="fas fa-plane-arrival"></i>{props.t("Carvaan Details")}</Link>
                </li>
                <li>
                  <Link to="/createCarvaan"><i className="fas fa-suitcase-rolling"></i>{props.t("Create Carvaan")}</Link>
                </li>
                </ul>
            </li>
{/* Manage Booking/Order */}
<li>
              <Link to="/manage" className="waves-effect">
                <i className="fas fa-users"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("Manage Booking/Order")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
              <li>
                  <Link to="/manageDetails"><i className="fas fa-users-cog"></i>{props.t("Manage List")}</Link>
                </li>
                </ul>
            </li>
             {/* -------FAQ------- */}
             <li>
              <Link to="/faq" className="waves-effect">
                <i className="fas fa-user"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("FAQ")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
              <li>
                  <Link to="/faqDetails"><i className="fas fa-user-cog"></i>{props.t("FAQ Details")}</Link>
                </li>
                <li>
                  <Link to="/createFaq"><i className="fas fa-user-plus"></i>{props.t("Create FAQ")}</Link>
                </li>
                </ul>
            </li>


    {/* Review */}
    <li>
              <Link to="/review" className="waves-effect">
                <i className="fas fa-users"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("Review")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
              <li>
                  <Link to="/reviewDetails"><i className="fas fa-users-cog"></i>{props.t("Reviews Details")}</Link>
                </li>
                {/* <li>
                  <Link to="/createReview"><i className="fas fa-user-plus"></i>{props.t("Create Review")}</Link>
                </li> */}
                </ul>
            </li>

            {/* -------Blogs------- */}
            <li>
              <Link to="/blogs" className="waves-effect">
                <i className="fas fa-file-alt"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("Blogs")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
              <li>
                  <Link to="/addBlog"><i className="fas fa-file-medical"></i>{props.t("Add Blog")}</Link>
                </li>
                <li>
                  <Link to="/blogDetails"><i className="fas fa-file-signature"></i>{props.t("Blog Details")}</Link>
                </li>
                </ul>
            </li>




             {/* -------Vendor------- */}
             <li>
              <Link to="" className="waves-effect">
                <i className="fas fa-user-secret"></i>
                {/* <span className="badge rounded-pill bg-primary float-end">1</span> */}
                <span>{props.t("Vendor")}</span>
              </Link>
            </li>
            {/* <---tables ---> */}
            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-view-grid"></i>
                <span>{props.t("Tables")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/tables-basic">{props.t("Basic Tables")}</Link>
                </li>
                <li>
                  <Link to="/tables-datatable">{props.t("Data Tables")}</Link>
                </li>
                <li>
                  <Link to="/tables-responsive">
                    {props.t("Responsive Table")}
                  </Link>
                </li>
                <li>
                  <Link to="/tables-editable">{props.t("Editable Table")}</Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
