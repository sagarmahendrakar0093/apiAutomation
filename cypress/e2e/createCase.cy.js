/// <reference types="Cypress"/>

describe('Creating a new case', () => {
    it('Create case by external user', () => {
      cy.request({ 
        method: 'POST',
        url: Cypress.env('createCaseAPI_Ext'),
        headers:{'authorization': Cypress.env('externalOrgAdminKey')},
        body:{
                "accountNumberRef": "1328609",
                "contactSSOName": "bduca101",
                "product": ".NET Core",
                "version": "7.0",
                "summary": "API Automation",
                "description": "What problem/issue/behavior are you having trouble with?  What do you expect to see?\ns\n\nWhat is the business impact? Please also provide timeframe information.\nsc",
                "caseType": "Account / Customer Service Request",
                "severity": "4 (Low)",
                "caseLanguage": "en",
                "entitlementSla": "PREMIUM",
                "groupNumber": "77677",
                "issue": "s",
                "timeFramesAndUrgency": "sc",
                "seSessionId": "dac05626-babb-4126-9ea2-fbcefa56148d",
                "userAgent": "Portal Case Management 1.20.3",
                "originatingSystem": "Portal Case Management 1.20.3"
        }
      })
      .then((res)=>{
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201);
      })
    })
})
