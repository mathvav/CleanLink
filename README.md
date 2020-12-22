# CleanLink: A Chrome/Edge extension that shortens lengthy links and removes tracking data without the use of a link shortening service.

**Release info**
<br />
[![Chrome web store](https://img.shields.io/chrome-web-store/v/copgnnhedjdobmglcjbeojddbkhoadpg?logo=google-chrome&label=latest%20chrome%20release)](https://chrome.google.com/webstore/detail/cleanlink/copgnnhedjdobmglcjbeojddbkhoadpg)
[![GitHub release](https://img.shields.io/github/release-date/mathvav/cleanlink?label=latest%20github%20release%20date)](https://github.com/mathvav/cleanlink/releases)

**Developer info (main branch)**
<br />
[![Main branch build status](https://img.shields.io/travis/com/mathvav/cleanlink?label=travis%20build)](https://travis-ci.com/mathvav/cleanlink)
[![Main branch commits since latest GitHub release](https://img.shields.io/github/commits-since/mathvav/cleanlink/latest?label=commits%20since%20last%20github%20release)](https://github.com/mathvav/cleanlink/commits/main)
[![License: MIT](https://img.shields.io/badge/license-MIT-1abc9c)](https://github.com/mathvav/cleanlink/blob/main/LICENSE)

**Maintenance info**
<br />
[![Status: beta](https://img.shields.io/badge/status-beta-blueviolet)](https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta)
[![@mathvav maintenance: actively developed](https://img.shields.io/badge/%40mathvav_maintenance_level-actively_developed-brightgreen)](https://gist.github.com/mathvav/033a4d949e94650a68bee81d94a371b3)
[![Number of open GitHub issues](https://img.shields.io/github/issues-raw/mathvav/cleanlink)](https://github.com/mathvav/cleanlink/issues)

**⚠️ CleanLink is currently in beta.** There is a small chance that the link copied to your clipboard will not be valid, however, CleanLink will not break your overall browsing experience. If you notice that CleanLink breaks any links when shortening them, please file an issue at https://github.com/mathvav/cleanlink/issues.

## User documentation

### How it works

Many websites add a lot of extra "garbage" to the link at the top of your browser, for any of the following reasons:

- Tracking customers throughout the "conversion funnel"
- Making the link more recognizable to humans, such as putting `/Taylor-Swift-Album` in the URL for an album from the best musician to ever live
- Storing extra information about your browsing experience, such as the exact search text that took you to the product you're viewing

However, when copying-and-pasting links to put in emails or spreadsheets, this extra data can take up a lot of space and make the link look... **ugly.**

CleanLink fixes this by taking a link like `https://www.amazon.com/Capri-Sun-Variety-Pack-Strawberry/dp/B0812HZGGZ/?_encoding=UTF8&pd_rd_w=BV32h&pf_rd_p=58f68c27-9bf4-466f-b1c8-101a062bcc82&pf_rd_r=K9PPQDP3APKTHFR13WTA&pd_rd_r=d7a0ba05-e5d9-4c59-a37c-b470911fd28d&pd_rd_wg=bPW0M&ref_=pd_gw_wish` and shortening it to `https://www.amazon.com/dp/B0812HZGGZ` just by removing unnecessary parts of the URL—this shortened link is 14% of it's original length!

| Before                                                | After _(83% shorter link)_                          |
| ----------------------------------------------------- | --------------------------------------------------- |
| ![Before screenshot](./screenshots/github-before.png) | ![After screenshot](./screenshots/github-after.png) |

CleanLink works especially well on Amazon and eBay product links, along with Google and Bing searches, but additionally removes "UTM" tracking data from the links of millions of websites worldwide. It sits in the top right corner of Chrome, and its icon turns from gray to blue when it senses that it can make the link on the current page shorter. When you click on the icon, CleanLink shortens the link and copies it to your clipboard for you.

## "Sounds great... where do I sign?"

The app is currently being submitted to the Chrome Web Store. Until it's published, you can follow the steps below to build it manually, or you can just sit back and listen to **[some jams](https://open.spotify.com/album/34OkZVpuzBa9y40DCy0LPR?si=1LLR2S2ITGOtETeDXlMAbw).**

## Developer documentation

### Building

1. Clone repo
2. `npm install`
3. Import the extension into Chrome
	* Go to [_chrome://extensions_](chrome://extensions) in Chrome
	* With the developer mode checkbox ticked, click **Load unpacked extension...** and select the _dest_ folder from this repo
4. Run one of the following options:
	- **Dev:** `npm run dev` or `npm run watch`
	- **Prod:** `npm run prod`
