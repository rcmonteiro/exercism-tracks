import { describe, it, expect, xit } from '@jest/globals'
import { verse, verses } from './house.ts'

describe('House', () => {
  it('verse one - the house that jack built', () => {
    const lyrics = ['This is the house that Jack built.']
    expect(verse(1)).toEqual(lyrics)
  })

  it('verse two - the malt that lay', () => {
    const lyrics = [
      'This is the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(2)).toEqual(lyrics)
  })

  it('verse three - the rat that ate', () => {
    const lyrics = [
      'This is the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(3)).toEqual(lyrics)
  })

  it('verse four - the cat that killed', () => {
    const lyrics = [
      'This is the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(4)).toEqual(lyrics)
  })

  it('verse five - the dog that worried', () => {
    const lyrics = [
      'This is the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(5)).toEqual(lyrics)
  })

  it('verse six - the cow with the crumpled horn', () => {
    const lyrics = [
      'This is the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(6)).toEqual(lyrics)
  })

  it('verse seven - the maiden all forlorn', () => {
    const lyrics = [
      'This is the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(7)).toEqual(lyrics)
  })

  it('verse eight - the man all tattered and torn', () => {
    const lyrics = [
      'This is the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(8)).toEqual(lyrics)
  })

  it('verse nine - the priest all shaven and shorn', () => {
    const lyrics = [
      'This is the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(9)).toEqual(lyrics)
  })

  it('verse ten - the rooster that crowed in the morn', () => {
    const lyrics = [
      'This is the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(10)).toEqual(lyrics)
  })

  it('verse eleven - the farmer sowing his corn', () => {
    const lyrics = [
      'This is the farmer sowing his corn',
      'that kept the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(11)).toEqual(lyrics)
  })

  it('verse twelve - the horse and the hound and the horn', () => {
    const lyrics = [
      'This is the horse and the hound and the horn',
      'that belonged to the farmer sowing his corn',
      'that kept the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verse(12)).toEqual(lyrics)
  })

  it('multiple verses', () => {
    const startVerse = 4
    const endVerse = 8
    const lyrics = [
      'This is the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verses(startVerse, endVerse)).toEqual(lyrics)
  })

  it('full rhyme', () => {
    const startVerse = 1
    const endVerse = 12
    const lyrics = [
      'This is the house that Jack built.',
      '',
      'This is the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the farmer sowing his corn',
      'that kept the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the horse and the hound and the horn',
      'that belonged to the farmer sowing his corn',
      'that kept the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ]
    expect(verses(startVerse, endVerse)).toEqual(lyrics)
  })
})
