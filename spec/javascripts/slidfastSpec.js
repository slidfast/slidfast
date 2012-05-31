describe("slidfast", function() {

 var defaultPageID = 'home-page';

 beforeEach(function() {
     slidfast({
         defaultPageID:defaultPageID
     });
 });

describe("slidfast init", function() {
  it("makes HTML5 easy", function() {
    expect(slidfast).toBeDefined();
  });
});

});