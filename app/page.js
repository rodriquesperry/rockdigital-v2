import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CarouselTopPage from '@/components/carousels/top-page/carousel.component';
import CarouselReview from '@/components/carousels/reviews/CarouselReview.component';
import HomePortfolioItem from '@/components/home-portfolio-items/HomePortfolioItem.component';

import rec from '@/assets/rec.png';

import styles from './page.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.home_container}>
        <CarouselTopPage />

        <div className={`${styles.main_container} w-100`}>
          <div className={`${styles.full_service_container} w-100`}>
            <h2>
              A FULL SERVICE DIGITAL <span>&nbsp;AGENCY&nbsp; </span>
            </h2>
            <hr />
            <p>
              When you partner with Rock Digital for your online presence needs,
              you can breathe easy knowing that your business is under the care
              of skillful web design and marketing experts so you can be
              confident that you&apos;ll always get the perfect website that fits
              your style and budget. Let&apos;s create you a jaw-dropping designed,
              mobile ready, and easy to use website that your customers will
              love and converts like crazy. Click the area below you are
              interested in.
            </p>
          </div>

          <div className={styles.divs}>
            <div className={styles.div1}>
              <Link href='/website-design-and-development'>
                <div className={styles.div_content}>
                  <h1>WEBSITE DESIGN</h1>
                  <h3 id={styles['development']}>& DEVELOPMENT</h3>
                </div>
              </Link>
            </div>

            <div className={styles.div2}>
              <Link href='/website-maintenance'>
                <div className={styles.div_content}>
                  <h3>WEBSITE IMPROVEMENT</h3>
                </div>
              </Link>
            </div>

            <div className={styles.div3}>
              <Link href='/website-improvement'>
                <div className={styles.div_content}>
                  <h3>DIGITAL PRESENCE IMPROVEMENT</h3>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.build_relationships_container}>
            <h2>
              WE CREATE DIGITAL SOLUTIONS <br /> THAT BUILD RELATIONSHIPS
            </h2>
            <hr />
            <p>
              We exist to help your business succeed online. Our web specialists
              can help you design and develop a custom website or app, plan your
              digital marketing strategy to drive traffic and provide you with
              killer content. Let&apos;s reshape the way your customers interact with
              your business online.
            </p>
          </div>

          <div className={styles.skills}>
            <div className={styles.skill_set}>
              <Image src={rec} alt='Skills bullet image' />
              <h4>Custom Design</h4>
              <p>
                Get found in search engines and loved by customers with custom
                website design and development. A great looking, mobile-ready,
                and user friendly website unique to your brand and
                optimized for your users and search engines.
              </p>
            </div>
            <div className={styles.skill_set}>
              <Image src={rec} alt='Skills bullet image' />
              <h4>Responsive Layout</h4>
              <p>
                From desktop to mobile, have your customers interact with your
                business on their own terms. Our websites are mobile ready so
                your customers can browse on the go. They adjust to different
                screen sizes while still looking amazing.
              </p>
            </div>
            <div className={styles.skill_set}>
              <Image src={rec} alt='Skills bullet image' />
              <h4>Search Engine Optimized</h4>
              <p>
                Your website doing what it&apos;s designed to do. Our websites
                are built with SEO in mind and will get you greater visibility
                in search engine results pages. This means more visitors to your
                site and more purchases from your business.
              </p>
            </div>
          </div>
          <div className={styles.parallax1}>
            <div id={styles['parallax_1_text']}>
              <div className={styles.parallax_1_heading}>
                <h3 className='playfair'>
                  READY TO <br /> START YOUR PROJECT?
                </h3>
                <div className={styles.parallax_btn_container}>
                  <Link href='/contact' className={`${styles.parallax_btn} lato`}>
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.reviews_container}>
            <h2 className={styles.reviewer}>REVIEWS</h2>
            <hr />
            <div className={styles.reviews}>
              <CarouselReview />
            </div>
          </div>

          <div className={`${styles.parallax2} d-none d-lg-block d-xl-block`}></div>

          {/* Portfolio Home Page*/}
          <div className={styles.homepage_portfolio_container}>
            <h2>SOME OF OUR WORK</h2>
            <hr />
            <div className={styles.portfolio_items}>
              <HomePortfolioItem />
            </div>
          </div>
          <div className={styles.ready_container}>
            <div className={styles.ready_header}>
              <h2>WE&apos;RE HERE TO HELP YOUR BUSINESS SUCCEED:</h2>
              <hr />
              <p>
                Ready to step your business&apos; web game up? <br /> It would be our
                pleasure to create a custom website design experience that
                represents your brand, communicates your brand message and
                generates your business more leads which increases your overall
                revenue.
              </p>
            </div>
            <div className={styles.ready_btn}>
              <Link href='/contact' className={styles.btn}>
                Contact us to get started!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
