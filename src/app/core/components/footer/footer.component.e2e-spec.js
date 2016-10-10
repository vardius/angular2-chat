describe('Footer', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have <my-footer>', () => {
        let footer = element(by.css('my-app my-footer'));
        expect(footer.isPresent()).toEqual(true);
    });

});