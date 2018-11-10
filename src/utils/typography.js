import Typography from 'typography'
import sternGroveTheme from 'typography-theme-stern-grove';
import CodePlugin from 'typography-plugin-code';

sternGroveTheme.plugins = [
  new CodePlugin()
];

sternGroveTheme.overrideThemeStyles = () => ({
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

const typography = new Typography(sternGroveTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
