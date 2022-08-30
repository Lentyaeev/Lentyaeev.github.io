/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import './App.scss';

export const App = () => {
  const [repos, setRepos] = useState([]);
  const [showGhLink, setShowGhLink] = useState(false);
  const getRepos = () => {
    return fetch('https://api.github.com/users/lentyaeev/repos?per_page=100')
      .then((response) => response);
  };

  useEffect(() => {
    getRepos().then(response => response.json())
      .then(response => setRepos(response));
  }, []);

  const sortedRepos = repos.sort((a, b) => (
    new Date(b.pushed_at) - new Date(a.pushed_at)
  ));

  return (
    <div className="panel">
      {sortedRepos.length !== 0 && (
        <button
          className="button"
          type="button"
          onClick={() => setShowGhLink(prev => !prev)}
        >
          Show GH Links
        </button>
      )}
      <ul>
        {sortedRepos.length !== 0
          ? (
            <>
              {sortedRepos.map(repo => (
                <li key={nanoid()}>
                  <a href={`https://lentyaeev.github.io/${repo.name}`}>{repo.name}</a>
                  {showGhLink && (
                    <>
                      {' | '}
                      <a href={repo.html_url}>LINK</a>
                    </>
                  )}
                </li>
              ))}
            </>
          )
          : (<h1>Loading.. </h1>)}
      </ul>
    </div>
  );
};
