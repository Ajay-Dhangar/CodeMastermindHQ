import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import classnames from 'classnames';
import React, {useCallback, useRef} from 'react';
const Search = (props) => {
  const initialized = useRef(false);
  const searchBarRef = useRef(null);
  const history = useHistory();
  const {siteConfig = {}} = useDocusaurusContext();
  const {baseUrl} = siteConfig;

  const initAlgolia = (searchDocs, searchIndex, DocSearch) => {
    new DocSearch({
      searchDocs,
      searchIndex,
      inputSelector: '#search_input_react',
      handleSelected: (_input, _event, suggestion) => {
        const url = baseUrl + suggestion.url;
        const a = document.createElement('a');
        a.href = url;
        history.push(url);
      },
    });
  };

  const getSearchDoc = () =>
    process.env.NODE_ENV === 'production'
      ? fetch(`${baseUrl}search-doc.json`).then((content) => content.json())
      : Promise.resolve([]);

  const getLunrIndex = () =>
    process.env.NODE_ENV === 'production'
      ? fetch(`${baseUrl}lunr-index.json`).then((content) => content.json())
      : Promise.resolve([]);

  const loadAlgolia = () => {
    if (!initialized.current) {
      Promise.all([
        getSearchDoc(),
        getLunrIndex(),
        import('./lib/DocSearch'),
        import('./algolia.css'),
      ]).then(([searchDocs, searchIndex, {default: DocSearch}]) => {
        if (searchDocs.length === 0) {
          return;
        }
        initAlgolia(searchDocs, searchIndex, DocSearch);
      });
      initialized.current = true;
    }
  };

  const toggleSearchIconClick = useCallback(
    (e) => {
      if (!searchBarRef.current.contains(e.target)) {
        searchBarRef.current.focus();
      }

      props.handleSearchBarToggle &&
        props.handleSearchBarToggle(!props.isSearchBarExpanded);
    },
    [props.isSearchBarExpanded],
  );

  return (
    <div className="navbar__search" key="search-box">
      <span
        aria-label="expand searchbar"
        role="button"
        className={classnames('search-icon', {
          'search-icon-hidden': props.isSearchBarExpanded,
        })}
        onClick={toggleSearchIconClick}
        onKeyDown={toggleSearchIconClick}
        tabIndex={0}
      />
      <input
        id="search_input_react"
        type="search"
        placeholder="Search"
        aria-label="Search"
        className={classnames(
          'navbar__search-input',
          {'search-bar-expanded': props.isSearchBarExpanded},
          {'search-bar': !props.isSearchBarExpanded},
        )}
        onClick={loadAlgolia}
        onMouseOver={loadAlgolia}
        onFocus={toggleSearchIconClick}
        onBlur={toggleSearchIconClick}
        ref={searchBarRef}
      />
    </div>
  );
};

export default Search;
