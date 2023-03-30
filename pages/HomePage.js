class HomePage{
    getHiddenMenu(){
        return cy.get('[data-test-id="CircularProgressbarWithChildren__children"]');
    }
    getLogOut(){
        return cy.get('#option-2--menu--7');
    }
    
}
export default HomePage;
