self.onmessage = function(event) {

    var myobj = event.data;

    search: while (myobj.foo < 200) {
        myobj.foo += 1;
        for (var i = 2; i <= Math.sqrt(myobj.foo); i += 1)
            if (myobj.foo % i == 0)
                continue search;
        // found a prime!
        self.postMessage(myobj);
    }

    // close this worker
    self.close();
};
