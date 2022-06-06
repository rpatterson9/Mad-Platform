const seeder = require('mongoose-seed');
const dotenv = require('dotenv');
const  fs = require('fs');
dotenv.config();
const DB_CONNECTION = process.env.MONGO_URL;

seeder.connect(DB_CONNECTION, () => {
    seeder.loadModels([
       './models/charities.js'
    ]);
    seeder.clearModels(['Charities'], function(){
        seeder.populateModels(data, function (err, done) {
            if (err){
                return console.log(`Seed error`, err);
            }
            if (done){
                return console.log(`Seed successful`, done);
            }
            seeder.disconnect();
        });
    });
});

const data = [
    {
        'model' : 'Charities',
        'documents' : [
            {
                "name" : "Alex's Lemonade Stand's",
                "description" : "Fighting childhood cancer, one cup at a time Alex’s Lemonade Stand’s mission is to change the lives of children with cancer through funding impactful research, raising awareness, supporting families, and empowering everyone to help cure childhood cancer",
                "address" : "0x9aDc997C18AdC5f1FE6029FD549B8bf475f08287",
                "type" : ['featured'],
                "image": {
                    "data": fs.readFileSync("public/assets/logo-campaign-2.png"),
                    "contentType": "image/png"
                }
            },
            {
                "name" : "Alex's Lemonade Stand's 2",
                "description" : "Fighting childhood cancer, one cup at a time Alex’s Lemonade Stand’s mission is to change the lives of children with cancer through funding impactful research, raising awareness, supporting families, and empowering everyone to help cure childhood cancer",
                "address" : "0xDae0399dD92C0D212e18efaf9FAC092aC6b9A091",
                "type" : ['basic'],
                "image": {
                    "data": fs.readFileSync("public/assets/logo-campaign-1.png"),
                    "contentType": "image/png"
                }
            },
            {
                "name" : "Alex's Lemonade Stand's 3",
                "description" : "Fighting childhood cancer, one cup at a time Alex’s Lemonade Stand’s mission is to change the lives of children with cancer through funding impactful research, raising awareness, supporting families, and empowering everyone to help cure childhood cancer",
                "address" : "0xDae0399dD92C0D212e18efaf9FAC092aC6b9A091",
                "type" : ['basic'],
                "image": {
                    "data": fs.readFileSync("public/assets/logo-campaign-3.png"),
                    "contentType": "image/png"
                }
            },
            {
                "name" : "Alex's Lemonade Stand's 4",
                "description" : "Fighting childhood cancer, one cup at a time Alex’s Lemonade Stand’s mission is to change the lives of children with cancer through funding impactful research, raising awareness, supporting families, and empowering everyone to help cure childhood cancer",
                "address" : "0xDae0399dD92C0D212e18efaf9FAC092aC6b9A091",
                "type" : ['featured'],
                "image": {
                    "data": fs.readFileSync("public/assets/logo-campaign-1.png"),
                    "contentType": "image/png"
                }
            },
            {
                "name" : "Alex's Lemonade Stand's 5",
                "description" : "Fighting childhood cancer, one cup at a time Alex’s Lemonade Stand’s mission is to change the lives of children with cancer through funding impactful research, raising awareness, supporting families, and empowering everyone to help cure childhood cancer",
                "address" : "0xDae0399dD92C0D212e18efaf9FAC092aC6b9A091",
                "type" : ['basic'],
                "image": {
                    "data": fs.readFileSync("public/assets/logo-campaign-2.png"),
                    "contentType": "image/png"
                }
            }
        ]
    }
]
