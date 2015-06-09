
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
fileData0 = [];
fileData0.push.apply(fileData0, [60, 115, 62, 32, 83, 73, 76, 10, 60, 47, 115, 62, 32, 83, 73, 76, 10, 60, 115, 105, 108, 62, 32, 83, 73, 76, 10, 91, 78, 79, 73, 83, 69, 93, 32, 43, 78, 83, 78, 43, 10, 91, 83, 80, 69, 69, 67, 72, 93, 32, 43, 83, 80, 78, 43, 10]);
Module['FS_createDataFile']('/', 'noisedict', fileData0, true, true);

  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage();

})();
