const findPage = (pages, slug) => {
  return pages.find(({ node }) => {
    if (node.slug === slug) {
      console.log(node.slug);
      return true;
    }
  });
};

export { findPage };
