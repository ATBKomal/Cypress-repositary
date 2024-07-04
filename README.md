Write Cypress tests to complete the following steps:
1.	Navigate to the form: Open the provided form URL: https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform
   //Using cy.visit() to visit the url
3.	In the form, enter your name in the “Your Name” field.
   // by using cy.get() I found css locator
5.	Select the “18 and above” radio button.
    // by using css locator find out the radio button and selected by using check()
7.	Select “Yes” from the “Do you exercise every week?” dropdown.
    // byusing css locator find out the dropdown and selected
9.	Submit the form.
10.	Verify that the form submission is successful (look for a confirmation message or a change in the URL).
    // verified by using assertion contains()
