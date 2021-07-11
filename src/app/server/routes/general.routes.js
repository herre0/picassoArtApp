module.exports = function(app) {

  app.get("/", (req, res) => {
    res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
  app.get("/login", (req, res) => {
    res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
app.get("/home", (req, res) => {
  res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
app.get("/gallery", (req, res) => {
  res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
app.get("/about", (req, res) => {
  res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
app.get("/detail/:id", (req, res) => {
  res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
app.get("/contact", (req, res) => {
  res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
app.get("/create", (req, res) => {
  res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
app.get("/list", (req, res) => {
  res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
app.get("/settings", (req, res) => {
  res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
app.get("/category", (req, res) => {
  res.sendFile('index.html', {root: 'dist/picassoApp/'})
});
app.get("/edit/:id", (req, res) => {
  res.sendFile('index.html', {root: 'dist/picassoApp/'})
});


};