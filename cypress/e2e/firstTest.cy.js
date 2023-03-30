import HomePage from "../../pages/HomePage";
import Login from "../../pages/Login";

describe("Nasz pierwszy blok testów", ()=>{

    let loginPage;
    let homePage;

    it("Znajdź pole do zalogowania, zaloguj się i wyloguj się",()=>{
        const loginPage = new Login();
        loginPage.view();
        loginPage.navigate();
        loginPage.getLoginInput().type("user888@gmail.com");
        loginPage.getPasswordInput().type("1234567890");
        loginPage.getSignInBtn().should("have.text","Log in").click();

        cy.wait(2000)
        const homePage = new HomePage();
        homePage.getHiddenMenu().click();
        homePage.getLogOut().click();
        
        
    })
    
        
});