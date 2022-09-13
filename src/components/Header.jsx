/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
  return (
    <div>
      <nav
        className="nav pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap babybear:flex-wrap babybear:py-1.5"
        aria-label="Primary"
      >
        <a className="nav__logo-link link-no-visited-state z-1 mr-auto babybear:z-0 babybear:mr-0 babybear:flex-1 hover:no-underline focus:no-underline active:no-underline">
          <span className="sr-only">LinkedIn</span>

          <icon
            className="block text-color-brand w-[84px] h-[21px] papabear:w-[135px] papabear:h-[34px] order-1"
            data-test-id="nav-logo"
            data-delayed-url="https://static-exp1.licdn.com/aero-v1/sc/h/8fkga714vy9b2wk5auqo5reeb"
          ></icon>
        </a>

        <ul className="top-nav-menu flex items-center nav__menu order-3 after:up-down-divider after:!h-[37px] mr-0.5 babybear:hidden">
          <li>
            <a className="top-nav-link flex items-center h-[52px] text-color-text-low-emphasis hover:text-color-text visited:text-color-text-low-emphasis visited:hover:text-color-text hover:no-underline w-[80px] flex-col">
              <icon
                className="top-nav-link__icon flex h-3 w-3 flex-shrink-0"
                data-delayed-url="https://static-exp1.licdn.com/aero-v1/sc/h/5x5h6fkfoq2njo0ocxqr98mrk"
              ></icon>
              <span className="top-nav-link__label-text font-sans text-sm leading-regular font-regular break-all">
                Discover
              </span>
            </a>
          </li>
          <li>
            <a className="top-nav-link flex items-center h-[52px] text-color-text-low-emphasis hover:text-color-text visited:text-color-text-low-emphasis visited:hover:text-color-text hover:no-underline w-[80px] flex-col">
              <icon
                className="top-nav-link__icon flex h-3 w-3 flex-shrink-0"
                data-delayed-url="https://static-exp1.licdn.com/aero-v1/sc/h/7kb6sn3tm4cx918cx9a5jlb0"
              ></icon>
              <span className="top-nav-link__label-text font-sans text-sm leading-regular font-regular break-all">
                People
              </span>
            </a>
          </li>
          <li>
            <a className="top-nav-link flex items-center h-[52px] text-color-text-low-emphasis hover:text-color-text visited:text-color-text-low-emphasis visited:hover:text-color-text hover:no-underline w-[80px] flex-col">
              <icon
                className="top-nav-link__icon flex h-3 w-3 flex-shrink-0"
                data-delayed-url="https://static-exp1.licdn.com/aero-v1/sc/h/8wykgzgbqy0t3fnkgborvz54u"
              ></icon>
              <span className="top-nav-link__label-text font-sans text-sm leading-regular font-regular break-all">
                Learning
              </span>
            </a>
          </li>
          <li>
            <a className="top-nav-link flex items-center h-[52px] text-color-text-low-emphasis hover:text-color-text visited:text-color-text-low-emphasis visited:hover:text-color-text hover:no-underline w-[80px] flex-col">
              <icon
                className="top-nav-link__icon flex h-3 w-3 flex-shrink-0"
                data-delayed-url="https://static-exp1.licdn.com/aero-v1/sc/h/92eb1xekc34eklevj0io6x4ki"
              ></icon>
              <span className="top-nav-link__label-text font-sans text-sm leading-regular font-regular break-all">
                Jobs
              </span>
            </a>
          </li>
        </ul>

        <div className="nav__cta-container order-3 flex gap-x-1 justify-end min-w-[100px] flex-nowrap flex-shrink-0 babybear:flex-wrap flex-2">
          <a className="nav__button-tertiary btn-md btn-tertiary">Join now</a>

          <a className="nav__button-secondary btn-md btn-secondary-emphasis">
            Sign in
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
