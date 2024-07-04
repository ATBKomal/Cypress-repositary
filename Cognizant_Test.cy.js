describe("Form filling", ()=>{
it("Test case", ()=>{

    cy.visit("https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform")
    cy.get(`div[class="rFrNMe k3kHxc RdH0ib yqQS1 zKHdkd"]`).type("Komal Nagrale")
    //cy.get('.AB7Lab Id5V1').check()
    cy.get('div[role="radio"]').last().click()
    cy.get(".KKjvXb > .vRMGwf").click()
    cy.get(`div[role="option"]`).eq(1).click()
    cy.get("span[class='NPEfkd RveJvd snByac']").first().click()
    cy.get("div.vHW8K").contains("Your response has been recorded.")
    
}
 
    
)}
      
)



