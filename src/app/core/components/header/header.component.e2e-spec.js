describe('Header', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have <my-header>', () => {
        let header = element(by.css('my-app my-header'));
        expect(header.isPresent()).toEqual(true);
    });

    it('should have login modal', () => {
        let loginModal = element(by.css('my-app my-login-modal'));
        expect(loginModal.isPresent()).toEqual(true);
    });

    it('should have register modal', () => {
        let registerModal = element(by.css('my-app my-register-modal'));
        expect(registerModal.isPresent()).toEqual(true);
    });

    it('should have forgot password modal', () => {
        let forgotPasswordModal = element(by.css('my-app my-forgot-password-modal'));
        expect(forgotPasswordModal.isPresent()).toEqual(true);
    });

});