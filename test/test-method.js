
let Dubbo = require('./dubbo-client');


setTimeout(function() {
  Dubbo.backgroundSupplerProvider.getSuppliers()
  .then(function(res) {
    console.log(JSON.stringify(res.isSuccess));
  }).catch(function(err) {
    console.log(JSON.stringify(err.toString));
  })
}, 5000);
