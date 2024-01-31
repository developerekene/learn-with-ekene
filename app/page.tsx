"use client";

import Image from "next/image";
import styles from "./page.module.css";
import welcomeImage from "./images/png/boost-skill-r.png";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcome}>
        <div className={styles.leftWelcome}>
          <div className={styles.topBtn}>
            <span className={styles.enhance}>Enhance your Career</span>
          </div>
          <h1 className={styles.boost}>
            Boost your skills with a single click
          </h1>
          <div className={styles.btnDiv}>
            <Button
              onClick={() => {}}
              bgColor={"#ffffff"}
              textColor={"#1e5b5b"}
              title="Start Learning"
              bRadius={40}
            />
            <Button
              onClick={() => {}}
              bgColor={"#1e5b5b"}
              textColor={"#ffffff"}
              title="Learn More"
              bRadius={40}
              bWidth={1}
              bColor="#ffffff"
            />
          </div>
        </div>
        <div>
          <Image src={welcomeImage} alt="" />
        </div>
      </div>
      <div className={styles.middleContainer}>
        <h2 className={styles.enhanceTwo}>Enhance yourself with our courses</h2>
        <div>
          <div className={styles.courses}>
            <div className={styles.contentContainer}>
              <h2 className={styles.theTitle}>HTML</h2>
              <p className={styles.htmlP}>
                The HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser. It defines the content and structure of web content. It
                is often assisted by technologies such as Cascading Style Sheets
                (CSS) and scripting languages such as JavaScript
              </p>
              <Link
                className={styles.linkBtn}
                href={{
                  pathname: "",
                }}
              >{`Start HTML >>`}</Link>
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.theTitle}>CSS</h2>
              <p className={styles.htmlP}>
                Cascading Style Sheets is a style sheet language used for
                specifying the presentation and styling of a document written in
                a markup language such as HTML or XML. CSS is a cornerstone
                technology of the World Wide Web, alongside HTML and JavaScript
              </p>
              <Link
                className={styles.linkBtn}
                href={{
                  pathname: "",
                }}
              >{`Start CSS >>`}</Link>
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.theTitle}>Javascript</h2>
              <p className={styles.htmlP}>
                JavaScript, often abbreviated as JS, is a programming language
                and core technology of the World Wide Web, alongside HTML and
                CSS. As of 2024, 98.9% of websites use JavaScript on the client
                side for webpage behavior, often incorporating third-party
                libraries
              </p>
              <Link
                className={styles.linkBtn}
                href={{
                  pathname: "",
                }}
              >{`Start Javascript >>`}</Link>
            </div>
          </div>
          <div className={styles.courses}>
            <div className={styles.contentContainer}>
              <h2 className={styles.theTitle}>React Native</h2>
              <p className={styles.htmlP}>
                React Native is an open-source UI software framework created by
                Meta Platforms, Inc. It is used to develop applications for
                Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by
                enabling developers to use the React framework along with native
                platform capabilities
              </p>
              <Link
                className={styles.linkBtn}
                href={{
                  pathname: "",
                }}
              >{`Start React Native >>`}</Link>
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.theTitle}>React Js</h2>
              <p className={styles.htmlP}>
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on components. It is maintained
                by Meta and a community of individual developers and companies
              </p>
              <Link
                className={styles.linkBtn}
                href={{
                  pathname: "",
                }}
              >{`Start React Js >>`}</Link>
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.theTitle}>Next Js</h2>
              <p className={styles.htmlP}>
                Next.js is an open-source web development framework created by
                the private company Vercel providing React-based web
                applications with server-side rendering and static website
                generation
              </p>
              <Link
                className={styles.linkBtn}
                href={{
                  pathname: "",
                }}
              >{`Start Next Js >>`}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.views}>
        <div>
          <div className={styles.potential}>
            <p>Unlock your potential: Learn and Grow.</p>
            <p>Lorem porem</p>
          </div>
        </div>
      </div>
    </div>
  );
}
