const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', () => {
  it('If the word ends with "ar", those characters will be removed.', () => {
    const translation = platzom("Programar")

    expect(translation).to.equal("Program")
  })

  it('If the word starts with "z", "pe" will be added at the end.', () => {
    const translation = platzom("Zorro")
    const translation2 = platzom("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })

  it('If the translated word has 10 or more letters, it should be split in the middle using a hyphen.', () => {
    const translation = platzom("abecedario")

    expect(translation).to.equal("abece-dario")
  })

  it('If the word is a palindrome, none of the rules will be applied and the same word with intercalated uppercase and lowercase is returned.', () => {
    const translation = platzom("sometemos")

    expect(translation).to.equal("SoMeTeMoS")
  })
})
