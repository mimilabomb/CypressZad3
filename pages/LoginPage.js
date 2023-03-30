class LoginPage{
    getLoginInput(){
        return cy.get('#user_email');
    }
    getPasswordInput(){
        return cy.get('#user_password');
    }
    getSignInBtn(){
        return cy.get('[type=submit]');
    }
}
export default LoginPage;