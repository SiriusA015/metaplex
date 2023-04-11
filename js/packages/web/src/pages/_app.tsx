import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import '../styles/index.less';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CryptoMemories NFT Marketplace</title>
      </Head>
      <div id="root">
        <Component {...pageProps} />
      </div>
      
      <footer className="c-footer">
    <div className="container c-section d-md-flex justify-content-between margin-class">
        <div className="">
            <div className="d-flex c-social-icons">
            <a href="https://www.facebook.com/cryptomemoriesnft" target="_blank">
        <svg id="IcoSocial_Facebook" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path id="IcoSocial_Facebook-2" data-name="IcoSocial_Facebook" d="M19,3H3V19h8.552V12.812H9.469V10.39h2.083V8.608a2.911,2.911,0,0,1,3.107-3.192,17.794,17.794,0,0,1,1.86.093v2.16H15.249c-1,0-1.2.475-1.2,1.175v1.542h2.4l-.312,2.422h-2.1V19H19Z" transform="translate(-3 -3)"></path>
        </svg>

    </a>
    <a href="https://twitter.com/cryptomemories" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="19.689" height="16" viewBox="0 0 19.689 16">
            <path id="IcoSocial_Twitter" d="M21.688,6.33a8.063,8.063,0,0,1-2.32.636,4.046,4.046,0,0,0,1.776-2.235,8.1,8.1,0,0,1-2.566.981,4.04,4.04,0,0,0-6.987,2.763,4.084,4.084,0,0,0,.1.92A11.467,11.467,0,0,1,3.37,5.174a4.047,4.047,0,0,0,1.25,5.393,4.031,4.031,0,0,1-1.83-.505v.051a4.04,4.04,0,0,0,3.24,3.96,4.041,4.041,0,0,1-1.065.142,4.113,4.113,0,0,1-.76-.072A4.044,4.044,0,0,0,7.98,16.949,8.151,8.151,0,0,1,2,18.622a11.436,11.436,0,0,0,6.192,1.814A11.414,11.414,0,0,0,19.683,8.943q0-.262-.011-.523A8.22,8.22,0,0,0,21.688,6.33Z" transform="translate(-1.999 -4.436)"></path>
        </svg>

    </a>
    <a href="https://www.instagram.com/cryptomemoriesnft/" target="_blank">
        <svg id="IcoSocial_Instagram" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path id="IcoSocial_Instagram-2" data-name="IcoSocial_Instagram" d="M7.444,3A4.449,4.449,0,0,0,3,7.444v7.111A4.449,4.449,0,0,0,7.444,19h7.111A4.449,4.449,0,0,0,19,14.556V7.444A4.449,4.449,0,0,0,14.556,3Zm0,1.778h7.111a2.67,2.67,0,0,1,2.667,2.667v7.111a2.67,2.67,0,0,1-2.667,2.667H7.444a2.67,2.67,0,0,1-2.667-2.667V7.444A2.67,2.67,0,0,1,7.444,4.778Zm8,.889a.889.889,0,1,0,.889.889A.889.889,0,0,0,15.444,5.667ZM11,6.556A4.444,4.444,0,1,0,15.444,11,4.449,4.449,0,0,0,11,6.556Zm0,1.778A2.667,2.667,0,1,1,8.333,11,2.67,2.67,0,0,1,11,8.333Z" transform="translate(-3 -3)"></path>
        </svg>

    </a>
    <a href="https://www.youtube.com/channel/UC5jzFRIneSrAyda2dnEGNEA" target="_blank">
        <svg id="IcoSocial_Youtube" xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
            <path id="IcoSocial_Youtube-2" data-name="IcoSocial_Youtube" d="M21.582,6.186a2.506,2.506,0,0,0-1.768-1.768C18.254,4,12,4,12,4s-6.254,0-7.814.418A2.506,2.506,0,0,0,2.418,6.186,35.643,35.643,0,0,0,2,12a35.643,35.643,0,0,0,.418,5.814,2.506,2.506,0,0,0,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-.418a2.5,2.5,0,0,0,1.768-1.768A35.643,35.643,0,0,0,22,12,35.643,35.643,0,0,0,21.582,6.186ZM10,14.6V9.4a.5.5,0,0,1,.75-.433l4.5,2.6a.5.5,0,0,1,0,.866l-4.5,2.6A.5.5,0,0,1,10,14.6Z" transform="translate(-2 -4)"></path>
        </svg>

    </a>
    <a href="https://hu.pinterest.com/cryptomemories/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16.001" height="16" viewBox="0 0 16.001 16">
            <path id="IcoSocial_Pinterest" d="M12.016,1.083A7.825,7.825,0,0,0,8,.01,7.825,7.825,0,0,0,3.984,1.083,7.966,7.966,0,0,0,1.073,3.994,7.826,7.826,0,0,0,0,8.01a7.754,7.754,0,0,0,1.323,4.406,7.971,7.971,0,0,0,3.469,2.927A6.888,6.888,0,0,1,4.927,13.5L5.958,9.146A2.779,2.779,0,0,1,5.7,7.875,2.386,2.386,0,0,1,6.146,6.4,1.331,1.331,0,0,1,7.24,5.8a.977.977,0,0,1,.8.344,1.32,1.32,0,0,1,.281.865A3.243,3.243,0,0,1,8.2,7.8q-.12.464-.312,1.073t-.276.974a1.182,1.182,0,0,0,.24,1.089,1.273,1.273,0,0,0,1.021.453,2.1,2.1,0,0,0,1.828-1.24,5.944,5.944,0,0,0,.714-3.011,2.954,2.954,0,0,0-.88-2.219,3.376,3.376,0,0,0-2.453-.854A3.792,3.792,0,0,0,4.146,7.9a2.37,2.37,0,0,0,.531,1.573.475.475,0,0,1,.115.448q-.021.063-.083.312c-.042.167-.069.274-.083.323q-.083.334-.4.208A2.35,2.35,0,0,1,3.011,9.6,4.164,4.164,0,0,1,2.594,7.7a4.547,4.547,0,0,1,.224-1.4,4.76,4.76,0,0,1,.7-1.349A5.485,5.485,0,0,1,4.651,3.8,5.335,5.335,0,0,1,6.261,3,6.694,6.694,0,0,1,8.3,2.7a5.362,5.362,0,0,1,2.656.656,4.691,4.691,0,0,1,1.8,1.7,4.288,4.288,0,0,1,.62,2.229,7.009,7.009,0,0,1-.542,2.813A4.619,4.619,0,0,1,11.3,12.057a3.752,3.752,0,0,1-2.25.714,2.468,2.468,0,0,1-1.188-.3,1.736,1.736,0,0,1-.761-.7q-.469,1.844-.563,2.2a6.413,6.413,0,0,1-.813,1.708,8,8,0,0,0,6.287-.74,7.967,7.967,0,0,0,2.912-2.912A7.827,7.827,0,0,0,16,8.01a7.827,7.827,0,0,0-1.073-4.016A7.97,7.97,0,0,0,12.016,1.083Z" transform="translate(0 -0.01)"></path>
        </svg>

    </a>
    <a href="https://www.tiktok.com/@cryptomemoriesnft" target="_blank">
        <svg id="IcoSocial_Tiktok" xmlns="http://www.w3.org/2000/svg" width="13.9" height="16" viewBox="0 0 13.9 16">
            <path id="IcoSocial_Tiktok-2" data-name="IcoSocial_Tiktok" d="M8.88.013C9.753,0,10.62.007,11.486,0a4.152,4.152,0,0,0,1.167,2.78A4.7,4.7,0,0,0,15.48,3.973V6.66a7.136,7.136,0,0,1-2.8-.647,8.237,8.237,0,0,1-1.08-.62c-.007,1.947.007,3.893-.013,5.833a5.092,5.092,0,0,1-.9,2.627,4.967,4.967,0,0,1-3.94,2.14,4.861,4.861,0,0,1-2.72-.687A5.027,5.027,0,0,1,1.593,11.5c-.013-.333-.02-.667-.007-.993a5.019,5.019,0,0,1,5.82-4.453c.013.987-.027,1.973-.027,2.96a2.287,2.287,0,0,0-2.92,1.413A2.645,2.645,0,0,0,4.366,11.5,2.269,2.269,0,0,0,6.7,13.413,2.24,2.24,0,0,0,8.546,12.34a1.538,1.538,0,0,0,.273-.707c.067-1.193.04-2.38.047-3.573C8.873,5.373,8.86,2.693,8.88.013Z" transform="translate(-1.579)"></path>
        </svg>

    </a>
    <a href="https://discord.gg/Ydh8evRaNv" target="_blank">
        <svg id="IcoSocial_Discord" xmlns="http://www.w3.org/2000/svg" width="20.992" height="16" viewBox="0 0 20.992 16">
            <path id="IcoSocial_Discord-2" data-name="IcoSocial_Discord" d="M17.77,4.18A17.31,17.31,0,0,0,13.5,2.855a.065.065,0,0,0-.069.032c-.184.328-.388.756-.532,1.093a15.979,15.979,0,0,0-4.8,0,11.055,11.055,0,0,0-.54-1.093.067.067,0,0,0-.069-.032A17.262,17.262,0,0,0,3.216,4.18a.061.061,0,0,0-.028.024,17.71,17.71,0,0,0-3.1,11.947.072.072,0,0,0,.027.05,17.405,17.405,0,0,0,5.242,2.65.068.068,0,0,0,.073-.024A12.324,12.324,0,0,0,6.5,17.082a.066.066,0,0,0-.036-.093,11.464,11.464,0,0,1-1.637-.78.067.067,0,0,1-.007-.112q.166-.124.325-.255a.065.065,0,0,1,.067-.009,12.417,12.417,0,0,0,10.55,0,.065.065,0,0,1,.068.009c.1.086.215.173.326.255a.067.067,0,0,1-.005.111,10.758,10.758,0,0,1-1.638.78.067.067,0,0,0-.036.094,13.976,13.976,0,0,0,1.071,1.743.066.066,0,0,0,.073.024,17.352,17.352,0,0,0,5.25-2.65.067.067,0,0,0,.028-.047A17.6,17.6,0,0,0,17.8,4.205a.053.053,0,0,0-.027-.026ZM7.014,13.766A2.017,2.017,0,0,1,5.128,11.65,2.007,2.007,0,0,1,7.014,9.534,2,2,0,0,1,8.9,11.651a2.006,2.006,0,0,1-1.887,2.115Zm6.975,0A2.017,2.017,0,0,1,12.1,11.65,2.006,2.006,0,0,1,13.99,9.534a2,2,0,0,1,1.887,2.117,2,2,0,0,1-1.887,2.115Z" transform="translate(0 -2.854)"></path>
        </svg>
    </a>
</div>
            <a className="d-inline-block h-color--white fst-italic h-mt--10 h-colorh--yellow" href="mailto:hello@cryptomemories.io">hello@cryptomemories.io</a>
        </div>

        <div className="text-md-end h-mt--10 h-mt--md--0">
            <div className="h-color--yellow">© 2021 Crypto Memories</div>
            <a className="d-inline-block h-color--white fst-italic h-mt--10 h-colorh--yellow text-uppercase" target="_blank" href="https://cryptomemories.gitbook.io/cryptomemories-whitepaper-en/">
                Cryptomemories whitepaper            </a>
            <br/>
            <a className="d-inline-block h-color--white fst-italic h-mt--10 h-colorh--yellow text-uppercase" href="https://cryptomemories.io/en/terms-and-contotions">
                Terms &amp; conditions            </a>
        </div>
    </div>
</footer>

    </>
  );
}
