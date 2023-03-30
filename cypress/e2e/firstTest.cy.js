import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";

describe("Nasz pierwszy blok testów", ()=>{

    let loginPage;
    let homePage;

    beforeEach("Test z wizytą w siedzibie LMS",() => {
        
        cy.viewport(1280, 720)
        cy.visit("https://www.edu.goit.global/account/login");
      })

    it("Znajdź pole do zalogowania i zaloguj się",()=>{
        const loginPage = new LoginPage();
        loginPage.getLoginInput().type("user888@gmail.com");
        loginPage.getPasswordInput().type("1234567890");
        loginPage.getSignInBtn().should("have.text","Log in").click();

        cy.wait(2000)
        const homePage = new HomePage();
        homePage.getHiddenMenu().click();
        homePage.getLogOut().click();
        
        
    })
    
        
});