var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Foobar' });
});

const manus = [
  {
    route: 'Home',
    man1: 'manu cherian',
    man2: '20',
    man3: 'Barrie',
    man4: 'indai',
    man5: 'playing football.'
  },
  {
    route: 'About Me',
    man1: 'i have a cat',
    man2: 'i like football',
    man3: 'i like dacing',
    man4: 'i like swwimmimg',
    man5: 'im a computer programmer.'
  },
  {
    route: 'Services',
    man1: 'web designing',
    man2: 'php ',
    man3: 'mainframe',
    man4: '',
    man5: ''
  },
  {
  route: 'My Project',
  man1: 'java application',
  man2: 'computer programmer',
  man3: 'html design',
  man4: '',
  man5: ''
},
{
  route: 'Contact Me',
  man1: '+1 705 689 8395',
  man2: 'fb id : manucherian',
  man3: 'insta id : manucgerian',
  man4: '',
  man5: ''
}
];

router.get('/:route', (req, res, next) => {
  // Find the person where their route string equals the route parameter
  const manu = manus.find(per => per.route === req.params.route);

  // if no person - render the error page
  if (!manu) return next(new Error('Cannot find person'));

  // Res.render - renders a view from our views folder.
  // Pass the person we found in the array above
  return res.render('manu', manu);
});

// router.get('/chris', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//     name: 'Chris Naismith',
//     age: 24,
//     cityBorn: 'Barrie',
//     cityResiding: 'Stayner',
//     hobby: 'playing Rocket League.'
//   });
// });

// router.get('/andrew', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//     name: 'Andrew Naismith',
//     age: 22,
//     cityBorn: 'Barrie',
//     cityResiding: 'Barrie',
//     hobby: 'watching movies.'
//   });
// });

module.exports = router;