import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  //COLORS
  --primary_color: #005f4f;
  --primary_color-85a: rgba(0,95,79,0.85);
  --primary_color-7a: rgba(0,95,79,0.7);
  --primary_color-5a: rgba(0,95,79,0.5);
  --primary_color-35a: rgba(0,95,79,0.35);
  --primary_color-2a: rgba(0,95,79,0.2);
  --primary-green: #005f4f;
  --secondary-gold: #a58d4e;
  
  --menu_highlight_background: #65bc7b;
  --nav_typography-color: #09162a;
  --nav_typography-color-65a: rgba(9,22,42,0.65);
  --nav_typography-color-35a: rgba(9,22,42,0.35);
  --menu_hover_first_color: #005f4f;
  --menu_hover_first_color-65a: rgba(0,95,79,0.65);
  --mobile_menu_toggle_color: #005f4f;

  --white: white;
  --light-gray-seperator: rgba(229,229,229,.5);

  --copyBar-background: #28303f;
  --footer_bg_color: rgba(40,48,63,0.89);
  --copyright_text_color: rgba(255,255,255,0.4);

  --menu-glyph-color-hover: #a58c4f;

  --nav_typography-font-family: Mulish;
  --body_typography-font-family: Montserrat;
}

*{
  box-sizing: border-box;
}

a{
  text-decoration: none;
  cursor: pointer;
  color: var(--nav_typography-color);
}

  a:hover {
    text-decoration: underline !important;
    text-underline-offset: 5px;
    color: var(--menu_hover_first_color);
  }

h1, h2, h3, h4, h5, h6{
  margin: 0;
}
`
