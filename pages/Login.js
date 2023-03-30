class Login{
    view(){
    cy.viewport(1280, 720)
    }
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login");
      }
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
export default Login;