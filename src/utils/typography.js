import Typography from 'typography'
import githubTheme from 'typography-theme-github'
import CodePlugin from 'typography-plugin-code';

githubTheme.plugins = [
  new CodePlugin()
];

githubTheme.overrideThemeStyles = () => ({
  'a': {
    color: '#0042FF',
  },

  'figcaption': {
    color: '#666',
    fontStyle: 'italic',
    fontSize: '.9rem',
    marginTop: '8px',
    marginLeft: '2px',
    marginRight: '2px'
  },

  'figure': {
    border: '1px solid #eee',
    padding: '5px'
  }
})

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
