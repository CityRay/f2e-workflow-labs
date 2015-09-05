var bower = require('bower');

bower.commands.install(['react'])
    .on('end', function(installed){
        console.log(installed);
    });
