/// <reference types="cypress" />

context('Bylawstext', () => {
  beforeEach(() => {
    cy.visit('/bylawstext')
  })

  it('has the right App title', () => {
    cy.title().should('include', 'hello')
  })

  it('has a headline', () => {
    cy.get('h1').should('have.length', 1)
  })

  it('has a button', () => {
    cy.get('button').contains('Satzungstext kopieren')
  })

  it('shows the users answers in the generated bylaws text', () => {
    cy.visit('/questions/1')

    //Question 1
    cy.get('label')
      .contains('Name des Vereins')
      .siblings('input')
      .type('Carolin')
    cy.get('button').contains('weiter').click()

    //Question 2
    cy.get('label').contains('Stadt').siblings('input').type('Hamburg')
    cy.get('button').contains('weiter').click()

    //Question 3
    cy.get('label').contains('Zweck').siblings('input').type('testen')
    cy.get('button').contains('weiter').click()

    //Question 4
    cy.get('label')
      .contains('Wer soll Mitglied')
      .closest('div')
      .find('label')
      .contains('Personengesellschaften')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 5
    cy.get('label')
      .contains('Mitgliedsantrag')
      .closest('div')
      .find('label')
      .contains('schriftlich')
      .click()
    cy.get('label').contains('per E-Mail').click()
    cy.get('button').contains('weiter').click()

    //Question 6
    cy.get('label')
      .contains('Aufnahmegebühr')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 7
    cy.get('label')
      .contains('Mitgliedsbeitrag')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 8
    cy.get('label')
      .contains('Belange soll die Mitgliedsversammlung')
      .closest('div')
      .find('label')
      .contains('Entlastung')
      .click()
    cy.get('label').contains('Haushaltsplan').click()
    cy.get('button').contains('weiter').click()

    //Question 9
    cy.get('label')
      .contains('Einladung zur Mitgliederversammlung')
      .closest('div')
      .find('label')
      .contains('per E-Mail')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 10
    cy.get('label').contains('soll zur Mitgliederversammlung geladen')
    cy.get('input').type('21')
    cy.get('button').contains('weiter').click()

    //Question 11
    cy.get('label')
      .contains('Mitgliederversammlung beschlussfähig')
      .closest('div')
      .find('label')
      .contains('ordnungsgemäß einberufene Mitgliederversammlung')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 12
    cy.get('label')
      .contains('häufig soll eine Mitgliederversammlung')
      .closest('div')
      .find('label')
      .contains('monatlich')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 13
    cy.get('label')
      .contains('Mehrheit soll die Mitgliederversammlung ihre Beschlüsse')
      .closest('div')
      .find('label')
      .contains('einfache')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 14
    cy.get('label')
      .contains('Vorstand zusammengesetzt')
      .closest('div')
      .find('label')
      .contains('zwei Vorsitzende')
      .click()
      .get('label')
      .contains('Schatzmeister')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 15
    cy.get('label')
      .contains('Verein nach außen vertreten')
      .closest('div')
      .find('label')
      .contains('Mehrheit des Vorstandes')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 16
    cy.get('label')
      .contains('Zeitraum soll der Vorstand gewählt werden')
      .closest('div')
      .find('label')
      .contains('drei')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 17
    cy.get('label')
      .contains('Wiederwahl des Vorstandes')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 18
    cy.get('label')
      .contains('zur Vorstandssitzung geladen')
      .closest('div')
      .find('label')
      .contains('schriftlich')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 19
    cy.get('label').contains('soll zu einer Vorstandssitzung geladen')
    cy.get('input').type('30')
    cy.get('button').contains('weiter').click()

    //Question 20
    cy.get('label')
      .contains('Mitteilung einer Tagesordnung')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 21
    cy.get('label')
      .contains('Arbeitsausschüsse')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 22
    cy.get('label')
      .contains(
        'Mitgliederversammlung über die Auflösung des Vereins entscheiden'
      )
      .closest('div')
      .find('label')
      .contains('absolute')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 23
    cy.get('label')
      .contains('Tag soll über die Satzung beschlossen')
      .siblings('input')
      .type('2020-12-31')
    cy.get('button').contains('weiter').click()

    //Question 24
    cy.get('label').contains('Satzung unterschreiben')
    cy.get('input').type('10')

    cy.get('button').contains('Satzung anzeigen').click()
    cy.url().should('eq', 'http://localhost:3000/bylawstext')

    //Paragraph 1
    cy.get('#nameAndLocation').contains('Carolin')

    //Paragraph 2
    cy.get('#businessYear').contains('Kalenderjahr')

    //Paragraph 3
    cy.get('#clubPurpose').contains('testen')

    //Paragraph 4
    cy.get('#nonProfit').contains('selbstlos')

    //Paragraph 5
    cy.get('#useOfFunds').contains('keine Zuwendungen')

    //Paragraph 6
    cy.get('#members')
      .contains('Personengesellschaften')
      .contains('schriftlich')

    //Paragraph 7
    cy.get('#admissionFee').contains('Aufnahmegebühr')

    //Paragraph 8
    cy.get('#memberFee').contains('Beiträge erhoben')

    //Paragraph 9
    cy.get('#memberMeeting')
      .contains('Entlastung des Vorstandes und den Haushaltsplan')
      .contains('per E-Mail')
      .contains('21')
      .contains('Jede ordnungsgemäß einberufene Mitgliederversammlung')
      .contains('monatlich')
      .contains('mit einer einfachen Mehrheit')

    //Paragraph 10
    cy.get('#boardComposition')
      .contains('zwei Vorsitzenden und dem Schatzmeister')
      .contains('drei Jahren')
      .contains('Wiederwahl ist möglich')

    //Paragraph 11
    cy.get('#clubRepresentation').contains('Mehrheit des Vorstandes')

    //Paragraph 12
    cy.get('#boardMeeting').contains('30 Tage')

    //Paragraph 13
    cy.get('#committees').contains('in Arbeitsausschüsse berufen')

    //Paragraph 14
    cy.get('#dissolutionMajority').contains(
      'mit einer absoluten Mehrheit der anwesenden'
    )
    //closing line
    cy.get('#locationAndDate').contains('Hamburg, den 31. Dezember 2020')
  })

  it('checks navigation back to first question page when clicking on zurück zu den Fragen', () => {
    cy.get('a').click()
    cy.url().should('eq', 'http://localhost:3000/questions/1')
  })
})