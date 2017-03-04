router.post('/user', (req, res, next) => {
  let name = req.bod.name;
  res.redirect('/user/ ' + name);
});

router.get('/user/:name', (req, res, next) => {
    res.render('node', {message: req.params.name})
})

module.exports = router;