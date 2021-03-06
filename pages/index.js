import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import SolidButton from '../../components/solid-button'
import PlaceCard from '../../components/place-card'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Innovation Store</title>
          <meta
            name="description"
            content="Proof of Concept site to demonstrate my skills with NextJS, Supabase (PostgreSQL), SWR, Clouflare Pages and GitHub."
          />
          <meta property="og:title" content="Innovation Store" />
          <meta
            property="og:description"
            content="Proof of Concept site to demonstrate my skills with NextJS, Supabase (PostgreSQL), SWR, Clouflare Pages and GitHub."
          />
        </Head>
        <div className="top-container">
          <nav data-role="Header" className="navbar">
            <h1>Innovation Store</h1>
            <div className="right-side">
              <div className="links-container">
                <span className="text">Home</span>
                <span className="text01">About</span>
              </div>
              <a
                href="https://github.com/FcoMarcosMAbreu"
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                <SolidButton
                  button="Contact"
                  className="component"
                ></SolidButton>
              </a>
            </div>
            <div data-type="BurgerMenu" className="burger-menu">
              <svg viewBox="0 0 1024 1024" className="burger-menu">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-type="MobileMenu" className="mobile-menu">
              <div className="nav">
                <div className="top">
                  <h1>Travel</h1>
                  <div data-type="CloseMobileMenu" className="close-menu">
                    <svg viewBox="0 0 1024 1024" className="icon03">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="right-side1">
                  <div className="links-container1">
                    <span className="text02">Home</span>
                    <span className="text03">About</span>
                    <span className="text04">Tour Packages</span>
                    <span>Contact</span>
                  </div>
                  <SolidButton button="Explore places"></SolidButton>
                </div>
              </div>
              <div className="follow-container">
                <span className="text06">
                  Follow us on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="icons-container">
                  {/* Git */}
                </div>
              </div>
            </div>
          </nav>
          <div className="hero">
            <div className="content-container">
              <h1 className="heading text07">Buy an exclusive</h1>
              <h2 className="subheading">product for your home</h2>
              <span className="text08">
                <span>
                  Each product is hand-picked,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>personally selected and cannot be found elsewhere.</span>
              </span>
              <SolidButton button="Explore homes"></SolidButton>
            </div>
          </div>
        </div>
        <div id="main-section" className="main">
          <h1>Most famous products</h1>
          <span className="text13">Recommended</span>
          <div className="cards-container">
            <PlaceCard
              city="Spam"
              image="/playground_assets/spam-300h.jpg"
              description="Leave your email in the coments to receive spam"
            ></PlaceCard>
            <PlaceCard
              city="Apple and Phone"
              image="/playground_assets/apple-300h.png"
              description="A innovative product to hold on with you"
            ></PlaceCard>
            <PlaceCard
              city="Awesome Helmet"
              image="/playground_assets/bmw-airflow-2-helmet7-300h.jpg"
              description="For whom feel itself awesome!"
            ></PlaceCard>
          </div>
        </div>
        <div className="footer">
          <div className="menu">
            <h1>Innovation Store</h1>
            <div className="links-container2">
              <div className="container1">
                <span className="text14">About us</span>
                <span className="text15">FAQ</span>
                <span className="text16">Terms and conditions</span>
                <a
                  href="https://github.com/FcoMarcosMAbreu"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link4"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="follow-container1">
              <span className="text17">
                Follow me on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="icons-container1">
                <a
                  href="https://github.com/FcoMarcosMAbreu"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link5"
                >
                  <svg viewBox="0 0 1024 1024" className="icon11">
                    <path d="M341.333 777.515c-36.907 7.509-61.995 5.163-79.787-0.469-9.856-3.115-18.389-7.509-26.197-12.885-17.536-12.117-31.019-28.8-47.744-50.005-15.189-19.243-36.267-47.232-66.176-62.976-7.893-4.181-16.469-7.552-25.771-9.899-22.869-5.717-46.037 8.192-51.755 31.061s8.192 46.037 31.061 51.755l6.613 2.56c10.752 5.675 20.779 17.237 38.997 40.363 15.616 19.797 36.523 46.848 66.261 67.371 14.165 9.771 30.336 18.176 49.024 24.064 30.379 9.6 65.067 11.947 105.515 5.76l-0.043 74.453c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-165.12c0-0.896-0.043-1.92-0.085-2.944-0.256-3.584-0.299-7.168-0.171-10.709 0.853-24.277 10.283-48.043 28.373-66.773 6.187-6.357 10.496-14.805 11.691-24.405 2.901-23.381-13.696-44.715-37.077-47.616-14.507-1.792-28.885-4.011-42.923-6.784-33.707-6.656-64.768-16.427-91.605-31.275-56.235-31.104-102.869-89.344-102.869-218.496-0.299-47.232 17.024-94.635 52.224-131.584 10.965-11.691 14.933-28.672 9.088-44.373-11.947-31.957-14.549-67.413-6.016-102.059 20.949 4.565 57.813 17.749 112.939 54.741 10.069 6.699 22.741 9.131 35.243 5.632 85.205-23.765 180.992-25.685 276.053 0.085 11.563 3.115 24.277 1.408 34.901-5.76 55.168-36.949 91.989-50.133 112.939-54.699 8.064 32.683 6.699 68.053-6.016 102.059-5.504 15.019-2.475 32.213 9.088 44.373 32.341 33.92 52.224 79.872 52.224 130.56 0 131.2-47.531 189.653-104.32 220.288-26.581 14.336-57.301 23.68-90.581 29.867-13.739 2.56-27.776 4.523-41.941 6.101-8.96 0.981-17.835 4.864-24.917 11.733-16.939 16.384-17.408 43.392-1.024 60.331 2.859 2.944 5.547 6.101 8.021 9.344 14.549 19.157 22.272 43.307 20.267 69.035 0 1.024-0.043 2.176-0.128 3.328v165.12c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-161.792c2.219-29.184-2.389-57.301-12.459-82.859 33.152-7.296 66.688-18.219 98.005-35.115 88.875-47.957 149.163-138.325 149.163-295.381 0-64.128-22.016-123.179-58.837-169.856 15.147-57.387 9.643-116.309-12.501-167.808-5.205-12.075-15.317-20.565-27.093-24.064-15.232-4.523-73.899-13.184-186.581 58.112-96.981-23.083-194.432-21.717-283.563-0.085-112.597-71.211-171.221-62.549-186.453-58.027-12.629 3.755-22.229 12.8-27.093 24.107-23.637 55.125-26.624 114.005-12.459 167.765-39.68 50.261-59.179 110.976-58.837 171.392 0 154.539 59.264 244.181 146.816 292.651 32.085 17.749 66.56 29.227 100.565 36.992-7.893 19.968-12.245 41.003-12.971 62.165-0.213 6.016-0.128 12.032 0.213 18.048z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .top-container {
            width: 100%;
            height: 600px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/featured-upcycling-1500w.png');
            background-position: 0% 40%;
          }
          .navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .text {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text01 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .link {
            display: contents;
          }
          .component {
            text-decoration: none;
          }
          .burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .burger-menu {
            width: 24px;
            height: 24px;
          }
          .mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon03 {
            width: 24px;
            height: 24px;
          }
          .right-side1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .text02 {
            margin-bottom: 8px;
          }
          .text03 {
            margin-bottom: 8px;
          }
          .text04 {
            margin-bottom: 8px;
          }
          .follow-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .text06 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .link1 {
            display: contents;
          }
          .icon05 {
            width: 24px;
            height: 24px;
          }
          .link2 {
            display: contents;
          }
          .icon07 {
            width: 24px;
            height: 24px;
          }
          .link3 {
            display: contents;
          }
          .icon09 {
            width: 24px;
            height: 24px;
          }
          .hero {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .content-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text08 {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .main {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-quadruple);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: flex-start;
          }
          .text13 {
            color: var(--dl-color-gray-500);
          }
          .cards-container {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .links-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container1 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .text14 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .text15 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .text16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .link4 {
            text-decoration: none;
          }
          .follow-container1 {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .text17 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .icons-container1 {
            width: 100px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .link5 {
            display: contents;
          }
          .icon11 {
            fill: #D9D9D9;
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .cards-container {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .right-side {
              display: none;
            }
            .burger-menu {
              display: flex;
            }
            .hero {
              justify-content: center;
            }
            .content-container {
              align-items: center;
            }
            .text07 {
              font-size: 2.5rem;
            }
            .text08 {
              text-align: center;
            }
            .main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .menu {
              flex-direction: column;
            }
            .links-container2 {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .text07 {
              font-size: 2rem;
              text-align: center;
            }
            .subheading {
              font-size: 1.3rem;
              text-align: center;
            }
            .links-container2 {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .container1 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .text14 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .text15 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .text16 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link4 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .follow-container1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
