const findPage = (pages, slug) => {
  // console.log(pages)
  return pages.find(({ node }) => {
    if (node.slug === slug) {
      return true;
    }
  });
};

export { findPage };
