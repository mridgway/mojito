/*
 * This is a basic func test for a Serveronly application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
     var suite = new Y.Test.Suite("Config");

     suite.add(new Y.Test.Case({
	  "test MathEnv2": function(){
          Y.Assert.areEqual('This is from application.json:environment:testing', Y.one('#myenv').get('innerHTML'));
          Y.Assert.areEqual('This is from application.json:environment:testing,subject:math', Y.one('#mysubject').get('innerHTML'));
          Y.Assert.areEqual('This is from application.json:environment:testing,lang:fr', Y.one('#mylang').get('innerHTML'));
      }
  }));

  Y.Test.Runner.add(suite);
});
