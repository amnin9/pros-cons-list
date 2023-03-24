import React, { useEffect, useState } from "react";
import { detect } from "detect-browser";
import List from "./list/List";
import styles from "./ProsConsList.module.css";

const ProsConsList = () => {
  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    const detectBrowser = () => {
      const browser = detect();
      const isChrome = browser && browser.name === "chrome";
      const isLatestVersion = /83/.test(
        navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2]
      );
      if (!isChrome || !isLatestVersion) {
        setIsChrome(false);
      } else {
        setIsChrome(true);
      }
    };
    detectBrowser();
  }, []);

  return (
    <>
      {!isChrome ? (
        <div className={styles.browser_warning}>
          Please use the latest version of Chrome to use this application.
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.container}>
            <h2 className={styles.title}>Should I eat at McDonalds?</h2>
            <div className={styles.list_container}>
              <List title="PROS" />
              <List title="CONS" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProsConsList;
