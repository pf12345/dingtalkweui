import Vue from 'vue'
import dingtalkweui from '../../../dist/dingtalkweui'

describe('dingtalkweui', () => {
  it('should render correct install dingtalkweui', () => {
    expect(!dingtalkweui).to.equal(false)
  })
})
