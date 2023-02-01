/// <reference types="Cypress"/>


describe('Fetching cases', () => {
  it('verify fetching of case by external user', () => {
    cy.request({ 
      method: 'GET',
      url: Cypress.env('getCaseApi_Ext'),
      headers:{'authorization': Cypress.env('externalOrgAdminKey')}
    })
    .then((res)=>{
      expect(res.status).to.eq(200);
      expect(res.body).has.property('caseNumber','02878741')
    })
  })
  it('verify fetching of case by Internal user', () => {
    cy.request({ 
      method: 'GET',
      url: Cypress.env('getCaseApi_Int'),
      headers:{'authorization': Cypress.env('internalKey')}
    }).then((res)=>{
      expect(res.status).to.eq(200);
      expect(res.body).has.property('caseNumber','02879295')
    })
  })
})

