const app = require('./index');
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Catalogue service running on http://localhost:${PORT}`);
});
