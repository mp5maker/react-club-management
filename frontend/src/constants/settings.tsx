export enum BACKEND {
  URI = 'http://localhost:4000',
}

export enum PERSIST {
  THEME = 'theme',
  LANGUAGE = 'language',
  SIDEBAR = 'sidebar'
}

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum LANGUAGE {
  ENGLISH = 'en',
  LITHUANIAN = 'lt',
}

export enum SIDEBAR {
  OPEN = 'open',
  CLOSE = 'close'
}

export enum COLORS {
  PRIMARY = 'var(--primary)',
  SECONDARY = 'var(--secondary)',
  INFO = 'var(--info)',
  SUCCESS = 'var(--success)',
  WARNING = 'var(--warning)',
  ERROR = 'var(--error)',
  BACKGROUND_1 = 'var(--background1)',
  BACKGROUND_2 = 'var(--background2)',
  TEXT_1 = 'var(--text1)',
  TEXT_2 = 'var(--text2)',
  INHERIT = 'inherit',
}

export enum BOX_VARIANT {
  OUTLINED = 'outlined',
  CONTAINED = 'contained',
}

export enum BUTTON_VARIANT {
  OUTLINED = 'outlined',
  CONTAINED = 'contained',
}

export enum TYPOGRAPHY_VARIANT {
  H1 = '3rem',
  H2 = '2rem',
  H3 = '1.875rem',
  H4 = '1.5rem',
  H5 = '1.25rem',
  H6 = '1.125rem',
  SUBTITLE_1 = '0.75rem',
  SUBTITLE_2 = '0.875rem',
  BODY = '1rem',
}

export enum BOX_COMPONENTS {
  DIV = 'div',
  SPAN = 'span',
  HEADER = 'header',
  FOOTER = 'footer',
  ASIDE = 'aside',
  ARTICLE = 'article',
  SECTION = 'section',
}

export enum TYPOGRAPHY_COMPONENT {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  CITE = 'cite',
  BLOCK_QUOTE = 'blockquote',
  P = 'p',
  TIME = 'time',
}
