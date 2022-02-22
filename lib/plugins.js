const findPage = (pages, slug) => {
  return pages.find(({ node }) => node.uri === slug);
};

export { findPage };
