'use strict';(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)})(function(a){a.registerHelper("lint","coffeescript",function(b){var d=[];try{var f=coffeelint.lint(b);for(b=0;b<f.length;b++){var e=f[b],g=e.lineNumber;d.push({from:a.Pos(g-1,0),to:a.Pos(g,0),severity:e.level,message:e.message})}}catch(c){d.push({from:a.Pos(c.location.first_line,0),to:a.Pos(c.location.last_line,
c.location.last_column),severity:"error",message:c.message})}return d})});
