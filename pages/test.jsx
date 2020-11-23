import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Person, Search, Mic } from '@material-ui/icons';

const Root = styled.div`
  font-family: sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  .container {
    padding: 0.5rem;
  }
  #header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .menu-item {
      margin: 0 0.25rem;
      text-decoration: none;
      color: black;
    }
  }
  main {
    flex-grow: 1;
    #main {
      padding-top: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      #logo {
        height: 92px;
        width: auto;
      }
      .search-bar {
        width: 600px;
        max-width: 100%;
        height: 2.5rem;
        margin: 1.5rem 0;
        padding: 0.25rem 0.5rem;
        border-radius: 2rem;
        border: 1px solid #ddd;
        display: flex;
        align-items: center;
        input {
          flex-grow: 1;
          height: calc(100% - 16px);
          padding-left: 0.5rem;
          border: none;
          outline: none;
          font-size: 1.25rem;
        }
      }
      .button-block {
        margin: 0.5rem 0;
        button {
          box-shadow: none;
          background-color: #f8f9fa;
          outline: none;
          &:hover,
          &:focus {
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
          }
        }
        button + button {
          margin-left: 1rem;
        }
        .MuiButton-label {
          text-transform: capitalize;
        }
      }
      .lang-info {
        margin-top: 2rem;
        font-size: 0.875rem;
        a {
          color: #1a0dab;
        }
      }
    }
  }
  #footer {
    .row {
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      background-color: #f2f2f2;
      color: rgba(0, 0, 0, 0.54);
      border-top: 1px solid #dadce0;
    }
    .item {
      margin: 0 0.5rem;
    }
  }
`;

export default function Test() {
  return (
    <Root>
      <header>
        <div id="header" className="container">
          <Link href="hello">
            <a className="menu-item">
              <div>Hello</div>
            </a>
          </Link>
          <Link href="world">
            <a className="menu-item">
              <div>World</div>
            </a>
          </Link>
          <IconButton onClick={() => {}}>
            <Person />
          </IconButton>
        </div>
      </header>
      <main>
        <div id="main" className="container">
          <img
            id="logo"
            src="/google.png"
            alt="Google"
            width="544"
            height="184"
          />
          <div className="search-bar">
            <Search />
            <input />
            <Mic />
          </div>
          <div className="button-block">
            <Button variant="contained" onClick={() => {}}>
              Google Search
            </Button>
            <Button variant="contained" onClick={() => {}}>
              I&apos;m Feeling Lucky
            </Button>
          </div>
          <div className="lang-info">
            <span>
              Google offered in: <a>한국어</a>
            </span>
          </div>
        </div>
      </main>
      <footer id="footer">
        <div className="row">
          <div className="left">
            <span className="item">South Korea</span>
          </div>
        </div>
        <div className="row">
          <div className="left">
            <span className="item">Advertising</span>
            <span className="item">Business</span>
            <span className="item">About</span>
            <span className="item">How Search Works</span>
          </div>
          <div className="right">
            <span className="item">Privacy</span>
            <span className="item">Terms</span>
            <span className="item">Settings</span>
          </div>
        </div>
      </footer>
    </Root>
  );
}
