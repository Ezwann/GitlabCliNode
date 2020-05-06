var gitlab = require('./lib/gitlab'),
    argv = require('minimist')(process.argv.slice(2)),
    Datechecker = require('./lib/datechecker');

if (argv._.indexOf('init') !== -1 || argv.init)
    gitlab.init();
else if((argv._.indexOf('stats') !== -1 || argv.stats) && (argv.created_after && argv.created_before) && (typeof argv.created_after == "string" && typeof argv.created_before =="string"))
    gitlab.issuesStats(new Datechecker(argv.created_after), new Datechecker(argv.created_before)).then(e => console.log(e));
else if(argv._.indexOf('recent') !== -1 || argv.recent)
    gitlab.listRecentIssues().then(e => console.log(e));
else if((argv._.indexOf('closed') !== -1 || argv.closed) && (argv.created_after && argv.created_before) && (typeof argv.created_after == "string" && typeof argv.created_before =="string"))
    gitlab.listClosedIssues(new Datechecker(argv.created_after), new Datechecker(argv.created_before)).then(e => console.log(e));
else if((argv._.indexOf('opened') !== -1 || argv.opened) && (argv.created_after && argv.created_before) && (typeof argv.created_after == "string" && typeof argv.created_before =="string"))
    gitlab.listOpenedIssues(new Datechecker(argv.created_after), new Datechecker(argv.created_before)).then(e => console.log(e));
else if((argv._.indexOf('average') !== -1 || argv.average) && (argv.created_after && argv.created_before) && (typeof argv.created_after == "string" && typeof argv.created_before =="string"))
    gitlab.averageOpenTime(new Datechecker(argv.created_after), new Datechecker(argv.created_before)).then(e => console.log(e));
else
    gitlab.help();