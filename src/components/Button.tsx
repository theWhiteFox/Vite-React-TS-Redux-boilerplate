import plugin from 'windicss/plugin'

plugin(({ addComponents }) => {
  addComponents({
    '.btn': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
    },
    '.btn-blue': {
      'backgroundColor': '#3490dc',
      'color': '#fff',
      '&:hover': {
        backgroundColor: '#2779bd',
      },
    },
  })
})