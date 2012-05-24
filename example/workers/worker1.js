self.onmessage = function(event) {

    var myobj = event.data;

    //add to the known member
    //todo check for specific members on the object
//    for (var i = 0; i <= 100000000; i += 1){
//        myobj.foo++;
//    }



    search: while (true) {
        myobj.foo += 1;
        for (var i = 2; i <= Math.sqrt(myobj.foo); i += 1)
            if (myobj.foo % i == 0)
                continue search;
        // found a prime!
        self.postMessage(myobj);
    }

    //self.postMessage(myobj);

    // close this worker
    self.close();
};
