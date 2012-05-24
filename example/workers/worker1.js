self.onmessage = function(event) {

    var myobj = event.data;

    //add to the known member
    //todo check for specific members on the object
    myobj.foo++;

    self.postMessage(myobj);

    // close this worker
    self.close();
};
