const Charities = require('../models/charities')

exports.getMain = (req, res, next) => {
  Charities.find().sort({createdAt : -1})
      .then((charities) => {
          let featureds = charities.filter(c => c.type.includes('featured'));
          let latest = charities.slice(0,4);
        res.render('main', {
          pageTitle: 'Home Page',
          charities,
            featureds,
            latest
        });
      })
};

exports.getSearch = (req, res, next) => {
    let query = req.query.q;
    if(query === 'featured'){
        query = 'featured';
       
        
    }
    Charities.find({$or: [{name: { $regex: '.*' + query + '.*' }}, {type: { $regex: '.*' + query + '.*' }}]}).sort({createdAt : -1})
        .then((charities) => {
            query = req.query.q;
            res.render('search', {
                pageTitle: 'Search Page',
                charities,
                query
            });
            console.log(query);
        })
};

exports.getDetail = (req, res, next) => {
    let id = req.params.charitiesId;
    Charities.findById(id).sort({createdAt : -1})
        .then((charity) => {
            res.render('detail', {
                pageTitle: 'Detail Page',
                charity
            });
        }).catch((err) => console.log(err));
};
