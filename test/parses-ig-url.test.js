import test from 'ava'
import { parseIGUrl } from '../lib/parse-ig-url.js'
import Promise from 'bluebird'

const images = [
  [`https://www.instagram.com/p/BxAktUPB9k6/`, `countingcrows`, `https://instagram.fmia1-2.fna.fbcdn.net/vp/3441161a3993675cfb16640740745372/5D635437/t51.2885-15/e35/58453703_156189962079037_6476231007530849840_n.jpg?_nc_ht=instagram.fmia1-2.fna.fbcdn.net`],
  // [`https://www.instagram.com/p/Bw_-fgEgyCl/`, `lego`, `https://instagram.fmia1-1.fna.fbcdn.net/vp/2aaf5e4312b0023d1a82ba32902044c2/5D56316A/t51.2885-15/e35/58751318_109442820128031_1841471635995467091_n.jpg?_nc_ht=instagram.fmia1-1.fna.fbcdn.net`]
]

test(`Parses an instagram url`, async t => {
  await Promise.each(images, async ([url, expectedProfile, expectedImageUrl]) => {
    const { imageUrl, profile } = await parseIGUrl(url)
    t.is(imageUrl, expectedImageUrl)
    t.is(profile, expectedProfile)
    t.log(`${ profile } passed!`)
  })
})
