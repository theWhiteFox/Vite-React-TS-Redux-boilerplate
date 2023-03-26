import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = ({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
  </>
)

export default GlobalStyles