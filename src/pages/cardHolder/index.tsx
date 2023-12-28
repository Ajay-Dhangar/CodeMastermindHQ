import React, { useState, useMemo, useEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import ShowcaseTagSelect, { readSearchTags,} from '../showcase/_components/ShowcaseTagSelect';
import ShowcaseFilterToggle, { type Operator, readOperator,} from '../showcase/_components/ShowcaseFilterToggle';
import ShowcaseCard from '../showcase/_components/ShowcaseCard';
import {
  sortedUsers,
  Tags,
  TagList,
  type User,
  type TagType,
} from '@site/src/data/users';
import ShowcaseTooltip from '../showcase/_components/ShowcaseTooltip';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Translate, { translate } from '@docusaurus/Translate';
import { useHistory, useLocation } from '@docusaurus/router';
import { usePluralForm } from '@docusaurus/theme-common';

import styles from '../showcase/styles.module.css';
import styles1 from './styles.module.css';

const TITLE = 'CodeMastermindHQ: Showcasing Exceptional Websites';
const DESCRIPTION = 'Unleash your creativity and expertise with our exceptional Site/Projects Showcase at CodeMastermindHQ: Where Innovation Meets Inspiration.';
const EDIT_URL =
  'https://github.com/CodeMastermindHQ/CodeMastermindHQ/edit/main/src/data/users.tsx';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
  const { scrollTopPosition, focusedElementId } = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // @ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({ top: scrollTopPosition });
}

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

const SearchNameQueryKey = 'name';

function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function filterUsers(
  users: User[],
  selectedTags: TagType[],
  operator: Operator,
  searchName: string | null,
) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    users = users.filter((user) =>
      user.title.toLowerCase().includes(searchName.toLowerCase()),
    );
  }
  if (selectedTags.length === 0) {
    return users;
  }
  return users.filter((user) => {
    if (user.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return selectedTags.every((tag) => user.tags.includes(tag));
    }
    return selectedTags.some((tag) => user.tags.includes(tag));
  });
}

function useFilteredUsers() {
  const location = useLocation<UserState>();
  const [operator, setOperator] = useState<Operator>('OR');
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setOperator(readOperator(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  return useMemo(
    () => filterUsers(sortedUsers, selectedTags, operator, searchName),
    [selectedTags, operator, searchName],
  );
}

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a
        className="button button--primary"
        href={EDIT_URL}
        target="_blank"
        rel="noreferrer">
        <Translate id="showcase.header.button">
          🌟 Join the CodeMastermindHQ Showcase!
        </Translate>
      </a>
    </section>
  );
}

function useSiteCountPlural() {
  const { selectMessage } = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(
      sitesCount,
      translate(
        {
          id: 'showcase.filters.resultCount',
          description:
            'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: '1 site|{sitesCount} sites',
        },
        { sitesCount },
      ),
    );
}

function ShowcaseFilters() {
  const filteredUsers = useFilteredUsers();
  const siteCountPlural = useSiteCountPlural();
  return (
    <section className="container margin-top--l margin-bottom--lg">
      <div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
        <div>
          <h2>
            <Translate id="showcase.filters.title">Filters</Translate>
          </h2>
          <span>{siteCountPlural(filteredUsers.length)}</span>
        </div>
        <ShowcaseFilterToggle />
      </div>
      <ul className={clsx('clean-list', styles.checkboxList)}>
        {TagList.map((tag, i) => {
          const { label, description, color } = Tags[tag];
          const id = `showcase_checkbox_id_${tag}`;

          return (
            <li key={i} className={styles.checkboxListItem}>
              <ShowcaseTooltip
                id={id}
                text={description}
                anchorEl="#__docusaurus">
                <ShowcaseTagSelect
                  tag={tag}
                  id={id}
                  label={label}
                  icon={
                    tag === 'favorite' ? (
                      <FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
                    ) : (
                      <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          marginLeft: 8,
                        }}
                      />
                    )
                  }
                />
              </ShowcaseTooltip>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const favoriteUsers = sortedUsers.filter((user) =>
  user.tags.includes('favorite'),
);
const otherUsers = sortedUsers.filter(
  (user) => !user.tags.includes('favorite'),
);

function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    setValue(readSearchName(location.search));
  }, [location]);
  return (
    <div className={styles.searchContainer}>
      <input
        id="searchbar"
        placeholder={translate({
          message: 'Search for site name...',
          id: 'showcase.searchBar.placeholder',
        })}
        value={value ?? undefined}
        onInput={(e) => {
          setValue(e.currentTarget.value);
          const newSearch = new URLSearchParams(location.search);
          newSearch.delete(SearchNameQueryKey);
          if (e.currentTarget.value) {
            newSearch.set(SearchNameQueryKey, e.currentTarget.value);
          }
          history.push({
            ...location,
            search: newSearch.toString(),
            state: prepareUserState(),
          });
          setTimeout(() => {
            document.getElementById('searchbar')?.focus();
          }, 0);
        }}
      />
    </div>
  );
}

function ShowcaseCards() {
  const filteredUsers = useFilteredUsers();

  if (filteredUsers.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>
            <Translate id="showcase.usersList.noResult">No result</Translate>
          </h2>
          <SearchBar />
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredUsers.length === sortedUsers.length ? (
        <>
          <div className={styles.showcaseFavorite}>
            <div className="container">
              <div
                className={clsx(
                  'margin-bottom--md',
                  styles.showcaseFavoriteHeader,
                )}>
                <h2>
                  <Translate id="showcase.favoritesList.title">
                    Our favorites
                  </Translate>
                </h2>
                <FavoriteIcon svgClass={styles.svgIconFavorite} />
                <SearchBar />
              </div>
              <ul
                className={clsx(
                  'container',
                  'clean-list',
                  styles.showcaseList,
                )}>
                {favoriteUsers.map((user) => (
                  <ShowcaseCard key={user.title} user={user} />
                ))}
              </ul>
            </div>
          </div>
          <div className="container margin-top--lg">
            <h2 className={styles.showcaseHeader}>
              <Translate id="showcase.usersList.allUsers">All sites</Translate>
            </h2>
            <ul className={clsx('clean-list', styles.showcaseList)}>
              {otherUsers.map((user) => (
                <ShowcaseCard key={user.title} user={user} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="container">
          <div
            className={clsx(
              'margin-bottom--md',
              styles.showcaseFavoriteHeader,
            )}>
            <SearchBar />
          </div>
          <ul className={clsx('clean-list', styles.showcaseList)}>
            {filteredUsers.map((user) => (
              <ShowcaseCard key={user.title} user={user} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseFilters />
        <section className="margin-top--lg margin-bottom--xl">
          <div className={styles.showcaseFavorite}>
            <div className="container">
              <ul className={clsx('clean-list', styles.showcaseList)}>
                <ShowcaseCard
                  key="404Lab.Wiki"
                  user={{
                    title: '404Lab.Wiki',
                    description: 'Docs and blogs about development and study',
                    preview: require('../../data/showcase/404lab-wiki.png'),
                    website: 'https://wiki.404lab.top',
                    source: 'https://github.com/HiChen404/MyWikiSite',
                    tags: ['opensource', 'personal'],
                  }}
                />
                <ShowcaseCard
                  key="Zowe"
                  user={{
                    title: 'Zowe',
                    description:
                      'Open source framework for leveraging data and applications in z/OS',
                    preview: require('../../data/showcase/zowe.png'),
                    website: 'https://docs.zowe.org',
                    source: 'https://github.com/zowe/docs-site',
                    tags: [
                      'opensource',
                      'product',
                      'large',
                      'design',
                      'versioning',
                    ],
                  }}
                /> 
                <ShowcaseCard
                  key="You Tube Clone"
                  user={{
                    title: 'You Tube Clone',
                    description: 'Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5',
                    preview: require('../../data/showcase/YouTube-Clone.jpg'),
                    website: 'https://my-youtube-ajay.vercel.app/',
                    source:
                      'https://github.com/Ajay-Dhangar/youtube_clone',
                    tags: ['opensource', 'clone', 'react', 'css'],
                  }}
                />
              </ul>
            </div>
          </div>
        </section>
        <div className="showcaseFavorite_src-pages-showcase-styles-module">
          <div className="container">
            <section className="margin-top--lg margin-bottom--xl">
              <div className={styles1.portfolio_section__projects}>
                <div className={styles1.portfolio_section__project}>
                  <div
                    className={styles1.portfolio_section__project_image}
                    style={{
                      backgroundImage:
                        'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c83409147d349a1bb246e3d0ed5/1232x1232")',
                      transition:
                        'background-image 0.3s ease-in-out 0s, background-size 0.2s ease 0s',
                      filter: 'none',
                    }} />
                  <div className={styles1.portfolio_section__project_title}>
                    Users
                  </div>
                  <div
                    className={styles1.portfolio_section__project_description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div className={styles1.portfolio_section__project}>
                  <div
                    className={styles1.portfolio_section__project_image}
                    style={{
                      backgroundImage:
                        'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834091e96fc52da39802810172/1232x1232")',
                      transition:
                        'background-image 0.3s ease-in-out 0s, background-size 0.2s ease 0s',
                      filter: 'none',
                    }} />
                  <div className={styles1.portfolio_section__project_title}>
                    Developer
                  </div>
                  <div
                    className={styles1.portfolio_section__project_description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div className={styles1.portfolio_section__project}>
                  <div
                    className={styles1.portfolio_section__project_image}
                    style={{
                      backgroundImage:
                        'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834093b1e4d8d8c72ab3de51c4/1232x1232")',
                      transition:
                        'background-image 0.3s ease-in-out 0s, background-size 0.2s ease 0s',
                      filter: 'none',
                    }} />
                  <div className={styles1.portfolio_section__project_title}>
                    Software Engineer
                  </div>
                  <div
                    className={styles1.portfolio_section__project_description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <ShowcaseCards />
      </main>
    </Layout>
  );
}
