describe('Winning games', function(){
    it('X wins by cross', function() {
        browser.launch();
        browser.pause(5000);

        browser.element('~cell_0_0').click();
        browser.pause(2000);
        browser.element('~cell_0_1').click();
        browser.pause(2000);
        browser.element('~cell_1_1').click();
        browser.pause(2000);
        browser.element('~cell_0_2').click();
        browser.pause(2000);
        browser.element('~cell_2_2').click();
        browser.pause(2000);

        assert(browser.element('~X wins!').value != null);
    });
});