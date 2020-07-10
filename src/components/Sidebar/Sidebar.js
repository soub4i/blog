// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Icon from '../Icon';
import { getIcon } from '../../utils';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />

        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
                id="toggle"
              />{' '}
              <span>
                {theme === 'dark' ? <div><Icon name="sun" icon={getIcon('sun')} /> Light mode.</div> : <div><Icon name="moon" icon={getIcon('moon')} />  Dark mode.</div>}
              </span>
            </label>
          )}
        </ThemeToggler>

        <Copyright copyright={copyright} />

      </div>
    </div>
  );
};

export default Sidebar;
