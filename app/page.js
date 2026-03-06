import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CarouselTopPage from '@/components/carousels/top_page/Carousel.component';
import CarouselReview from '@/components/carousels/reviews/CarouselReview.component';
import ContactForm from '@/components/contact-forms/ContactForm.component';

import rec from '@/assets/rec.png';
import developmentImage from '@/assets/development.webp';
import discoveryImage from '@/assets/discoveryclay.webp';
import designImage from '@/assets/design.webp';
import ongoingImage from '@/assets/ongoing.webp';
import launchImage from '@/assets/launch.webp';

import styles from './page.module.css';

const processSteps = [
  {
    title: 'Get to Know You',
    description:
      'We start with discovery calls to understand your business goals, audience, offers, and what success should look like for your website.',
    image: discoveryImage,
    imageAlt: 'Team planning a website strategy.',
  },
  {
    title: 'Design',
    description:
      'We map the structure and craft a clean visual direction focused on trust, clarity, and conversion-ready user journeys.',
    image: designImage,
    imageAlt: 'Website design mockup on a laptop.',
  },
  {
    title: 'Development',
    description:
      'Once approved, we build responsive pages, optimize performance, and integrate your key tools so everything works reliably.',
    image: developmentImage,
    imageAlt: 'Developer building a modern website.',
  },
  {
    title: 'Launch',
    description:
      'We run final QA, connect forms and analytics, and deploy with a checklist to make sure your new site is ready on day one.',
    image: launchImage,
    imageAlt: 'Website launch and optimization workflow.',
  },
  {
    title: 'Ongoing Growth Care',
    description:
      'After launch, we help with updates, performance tuning, and strategic improvements so your site keeps driving results.',
    image: ongoingImage,
    imageAlt: 'Ongoing website maintenance and support.',
  },
];

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
          
          {/* <div className={styles.reviews_container}>
            <h2 className={styles.reviewer}>REVIEWS</h2>
            <hr />
            <div className={styles.reviews}>
              <CarouselReview />
            </div>
          </div> */}

          {/* <div className={`${styles.parallax2} d-none d-lg-block d-xl-block`}></div> */}

          <div className={styles.process_container}>
            <h2>OUR PROCESS</h2>
            <hr />
            <p>
              A clear, collaborative path from your first conversation to long-term
              support.
            </p>
            <div className={styles.process_timeline}>
              {processSteps.map((step, index) => (
                <article key={step.title} className={styles.process_step}>
                  <div className={styles.process_content}>
                    <span className={styles.process_number}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <div className={styles.process_image_wrap}>
                    <Image src={step.image} alt={step.imageAlt} />
                  </div>
                </article>
              ))}
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
                <strong> converts more leads</strong> which increases your overall
                revenue. Fill out the form to get started.
              </p>
            </div>
              <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
