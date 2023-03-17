import * as React from 'react'

import {FaEnvelopeOpenText} from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import {FaMastodon} from '@react-icons/all-files/fa/FaMastodon'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
import {FaYoutube} from '@react-icons/all-files/fa/FaYoutube'
import {FaZhihu} from '@react-icons/all-files/fa/FaZhihu'
import {IoMoonSharp} from '@react-icons/all-files/io5/IoMoonSharp'
import {IoSunnyOutline} from '@react-icons/all-files/io5/IoSunnyOutline'

import * as config from '@/lib/config'
import {useDarkMode} from '@/lib/use-dark-mode'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const {isDarkMode, toggleDarkMode} = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer + " ft-custom"}>
      <div className={styles.copyright + " ft-p-1"}>
      © Copyrights 2023 VNPETRO JSC
        <div>{config.author}</div>
        <br/>
        <div>
        HỖ TRỢ:
        </div>
        <a href="https://vnpetro.com.vn/gioi-thieu" target="_blank" rel="noreferrer">Về VNPETRO</a> <br/>
        <a href="https://vnpetro.com.vn/linh-vuc-hoat-dong" target="_blank" rel="noreferrer">Lĩnh vực hoạt động</a>
        <br/><a href="https://vnpetro.com.vn/doi-tac-toan-cau" target="_blank" rel="noreferrer">Đối tác toàn cầu</a>
      </div>

      <div className={styles.social + " ft-p-2"}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp/> : <IoSunnyOutline/>}
          </a>
        )}

        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter/>
          </a>
        )}

        {config.mastodon && (
          <a
            className={styles.mastodon}
            href={config.mastodon}
            title={`Mastodon ${config.getMastodonHandle()}`}
            rel='me'
          >
            <FaMastodon/>
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu/>
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub/>
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin/>
          </a>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelopeOpenText/>
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube/>
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
