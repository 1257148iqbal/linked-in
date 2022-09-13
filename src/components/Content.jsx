/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import connectwithpeople from "../assets/img/connectwithpeople.svg";
import learn from "../assets/img/learn.svg";

const Content = () => {
  return (
    <div className="w-100">
      <div className="content-topic w-full">
        <section className="section py-section flex-wrap babybear:flex-col papabear:flex-nowrap ">
          <div className="self-start mb-[24px] w-full flex-shrink-0 papabear:w-column papabear:mr-[72px] papabear:mb-[0px]">
            <h2 className="secondary-heading">
              Explore topics you are interested in
            </h2>
          </div>

          <div className="w-full papabear:max-w-[calc(theme('spacing.content-max-w')-theme('spacing.column')-72px)]">
            <h2 className="etta-caps-header mb-[20px]">Content Topics</h2>

            <ul
              className="show-more-less__list show-more-less__list--no-hidden-elems"
              data-impression-id="homepage-basic_explore-content_pill-list-module_etta-show-more-less_show-more-less"
            >
              <li className="show-more-less__pill">
                <a className="btn-lg mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary-emphasis">
                  See All Topics
                </a>
              </li>
              <li className="show-more-less__pill">
                <a className="btn-lg mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary">
                  Workplace
                </a>
              </li>
              <li className="show-more-less__pill">
                <a className="btn-lg mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary">
                  Job Search
                </a>
              </li>
              <li className="show-more-less__pill">
                <a className="btn-lg mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary">
                  Careers
                </a>
              </li>
              <li className="show-more-less__pill">
                <a className="btn-lg mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary">
                  Interviewing
                </a>
              </li>
              <li className="show-more-less__pill">
                <a className="btn-lg mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary">
                  Salary and Compensation
                </a>
              </li>
              <li className="show-more-less__pill">
                <a className="btn-lg mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary">
                  Internships
                </a>
              </li>
              <li className="show-more-less__pill">
                <a className="btn-lg mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary">
                  Employee Benefits
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="section">
        <div className="w-full flex flex-row items-center py-[70px] after:full-color-bkg after:content-[''] after:bg-[#f1ece5] babybear:flex-col babybear:items-start babybear:py-[56px] babybear:px-mobile-container-padding">
          <h2 className="tertiary-heading w-talent-finder-header babybear:mb-[24px] babybear:w-unset">
            Post your job for millions of people to see
          </h2>

          <a className="btn-lg mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary-emphasis flex-shrink babybear:my-auto babybear:mx-[0px]">
            Post a job
          </a>
        </div>
      </section>

      <section className="section py-section">
        <div className="flex flex-row flex-wrap justify-between w-full babybear:flex-column mamabear:py-[60px] mamabear:px-[0px] papabear:py-[60px] papabear:px-[0px]">
          <div
            className="flex flex-grow flex-wrap h-full mr-[16px] mamabear:last:mr-[0] babybear:w-full babybear:mr-[0] babybear:mb-[56px] babybear:last:mb-[8px]"
            data-impression-id="homepage-basic_people-cta"
          >
            <img
              className="flex-grow flip-rtl h-auto max-w-[300px] mr-[72px] mb-[56px] babybear:h-[192px] babybear:max-w-[240px] babybear:mb-[32px]"
              src={connectwithpeople}
              alt="Connect with people who can help"
              aria-hidden="true"
            />
            <div className="w-[456px] my-auto babybear:w-full">
              <h2 className="secondary-heading mb-[40px] babybear:mb-[24px]">
                Connect with people who can help
              </h2>

              <a className="btn-lg mb-1.5 mr-[6px] flex items-center w-max float-left btn-secondary">
                Find people you know
              </a>
            </div>
          </div>

          <div
            className="flex flex-grow flex-wrap h-full mr-[16px] mamabear:last:mr-[0] babybear:w-full babybear:mr-[0] babybear:mb-[56px] babybear:last:mb-[8px]"
            data-impression-id="homepage-basic_learning-cta"
          >
            <img
              className="flex-grow flip-rtl h-auto max-w-[300px] mr-[72px] mb-[56px] babybear:h-[192px] babybear:max-w-[240px] babybear:mb-[32px]"
              src={learn}
              alt
              aria-hidden="true"
            />
            <div className="w-[456px] my-auto babybear:w-full">
              <h2 className="secondary-heading mb-[40px] babybear:mb-[24px]">
                Learn the skills you need to succeed
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
};

export default Content;
