const getSlug = (entry, config) => {
  // get the slug from GraphQL
  // see the contentful plugin for an example
  // window.open(slug)
};

ContentstackUIExtension.init().then(extension => {
  /*
   * Upon save, fetch to the instance's GraphQL API
   * Use the extension.config property to pass 1) URL, and 2) name of field (e.g. slug)
   * Query GraphQL for the slug and open it in a new window
   * TODO: show a button? No idea.
   */
  extension.entry.onSave(entry => getSlug(entry, extension.config));
});
