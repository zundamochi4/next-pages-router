export default (req, res) => {
  const { query: { pid } } = req;
  res.send(`Post: ${pid}`); // eslint-disable-line no-undef
}
