describe('amazon page',()=>{
    it('to enter an iphone and click first link',()=>{

        // cy.visit('https://www.amazon.in/?tag=msndeskstdin-21&ref=pd_sl_5joubhsx1q_e&adgrpid=1329311215457583&hvadid=83082214671780&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=148859&hvtargid=kwd-83082880452797:loc-90&hydadcr=5653_2377271')
        //  cy.get('#twotabsearchtextbox').type('iphone')
        //  cy.get('#nav-search-submit-button').click()



        // cy.visit('https://www.flipkart.com/')
        // cy.get('div._2SmNnR').type('shirt')
        // cy.get('button._2iLD__').click()
        // cy.get('div[data-id ="SHTH5BU2GWZQD8VG"]').click()

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get(' [value="radio1"]').check().should('have.value','radio1')
         cy.get('label [type="checkbox"]').check(["option2", "option1"])
         cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
         cy.get('input#autocomplete').type('au')
         cy.get('.ui-menu-item div').each(($list)=>{
            if($list.text().includes('Austria')){

                cy.wrap($list).click()
            }
            
         })
    })

})