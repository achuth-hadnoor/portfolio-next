const Heading = (props)=>(
<h1 style={{color:'palegreen'}}>{props.children}</h1>
)
const MDXComponents = {
  h1: (props) => <Heading {...props} />,
//   h2: (props) => <DocsHeading as="h2" fontWeight="bold" size="lg" {...props} />,
//   h3: (props) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
//   inlineCode: (props) => (
//     <Code variantColor="yellow" fontSize="0.84em" {...props} />
//   ),
//   kbd: Kbd,
//   br: (props) => <Box height="24px" {...props} />,
//   hr: Hr,
//   table: Table,
//   th: THead,
//   td: TData,
//   a: CustomLink,
//   p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
//   ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
//   ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
//   li: (props) => <Box as="li" pb={1} {...props} />,
//   blockquote: Quote
};
export default MDXComponents