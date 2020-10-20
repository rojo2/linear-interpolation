import linear from './linear-interpolation'

describe('Linear interpolation', () => {
  it('should test that values are properly interpolated', () => {
    expect(linear(0.5, 1, 3)).to.be.equal(2)
    expect(linear(-0.5, 1, 3)).to.be.equal(0)
    expect(linear(-1, 1, 3)).to.be.equal(-1)

    expect(linear(0.25, 0, 100)).to.be.equal(25)
    expect(linear(0.5, 0, 100)).to.be.equal(50)
    expect(linear(0.75, 0, 100)).to.be.equal(75)
  })
})
