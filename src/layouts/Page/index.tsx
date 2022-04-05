import React from 'react'

import { PageProps } from './Page.props'

import styles from './Page.module.scss'

const Page: React.FC<PageProps> = ({ title, description, children }) => {
  return (
    <div className={styles.root}>
      {/* .header */}
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </header>

      {/* main */}
      <main>{children}</main>

      {/* .footer */}
      <footer className={styles.footer}>
        <span className={styles.copyright}>
          <a href="https://artisant.io/">© Artisant {new Date().getFullYear()}</a>
        </span>
        <span className={styles.developer}>
          <a href="https://github.com/qwif">Made with ❤️ by qwif</a>
        </span>
      </footer>
    </div>
  )
}

export default Page
