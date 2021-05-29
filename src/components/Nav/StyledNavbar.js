import styled from 'styled-components'

export const StyledNavbar = styled.div`
  background-color: white;
  background-size: cover;
  background-position: bottom;
  transition: all 250ms ease-in-out;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  padding-right: 10px;
  position: relative;
  z-index: 99;

  .row {
    max-width: 1200px;
    margin: auto;
    justify-content: space-between;
  }

  .pri-nav {
    display: flex;
    flex-direction: row;
    width: 100%;

    .navbar {
      width: 100%;
      padding: 0;

      .navbar-nav {
        align-items: center;
      }
    }
  }

  #basic-navbar-nav {
    background: white;
    text-align: center;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 770px) {
      margin: auto;
      padding-bottom: 10px;
    }
  }

  &.small {
    padding: 0 5px;

    .contact-bar {
      font-size: 0.5rem;
    }
    .navbar-nav .nav-link {
      font-size: 1.25rem;
    }
    .navbar-brand h2 {
      font-size: 1.5rem;
    }
    .navbar-brand .gatsby-image-wrapper {
      width: 50px;
    }
  }

  .navbar-brand {
    display: flex;
    margin: 0;
    margin-left: 20px;
    color: var(--accent-1);
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    .gatsby-image-wrapper {
      transition: all 250ms ease;
      width: 100px;
    }
  }
  .navbar-nav {
    .nav-link {
      font-family: 'Mulish';
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: bold;
      padding-right: 35px;

      @media (max-width: 1070px) {
        padding-right: 20px;
      }

      &:hover {
        color: var(--menu_hover_first_color);
      }
    }
    .nav-link.active {
      color: var(--menu_hover_first_color);
    }
  }
  .dropdown {
    .dropdown-menu {
      .dropdown-item {
        .nav-link {
          font-family: 'Montserrat' !important;
          font-weight: 500;
          color: var(--nav_typography-color);
          .menu-glyph {
            margin-right: 10px;
            color: var(--menu_hover_first_color);
          }
          &:hover .menu-glyph {
            color: var(--menu-glyph-color-hover);
          }
        }
      }
    }
  }
  #support-wrap {
    padding-right: 0;
    .support-glyph {
      font-size: 35px;
      color: var(--menu_hover_first_color);
      float: left;
      margin: 0 10px;

      @media (max-width: 1090px) {
        font-size: 25px;
      }
    }
    .text-wrap {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      line-height: 14px;
      margin-top: 8px;
      @media (max-width: 1090px) {
        font-size: 15px;
      }

      & > span {
        font-size: 0.6rem;
        font-weight: 500;
      }
    }
  }
  .seperator:after {
    content: '';
    border: none;
    border-right: 1px solid #e5e5e5;
  }

  @media (max-width: 1090px) {
    h2 {
      font-size: 1.5rem;
    }
    .navbar-nav {
      .nav-link {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 790px) {
    .navbar-nav {
      align-items: flex-start;
    }
    height: 90px;
    .navbar-brand .gatsby-image-wrapper {
      width: 50px;
    }
  }

  @media (max-width: 660px) {
    height: 70px;
    padding: 0 5px;
    .navbar-brand h2 {
      display: none;
    }
  }
`
