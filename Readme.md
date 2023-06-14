## How to Use nCaptcha

### Installation:

1. Choose the version:
    - Stable: Use the stable version by including the following script tag:
      ```
      <script src="https://ncaptcha.xyz/n-captcha/n-captcha@stable.js"></script>
      ```

    - Latest: If you want to try out all the newest features, use the latest version by including the following script tag:
      ```
      <script src="https://ncaptcha.xyz/n-captcha/n-captcha@latest.js"></script>
      ```

2. Add the following element inside your form:
   ```html
   <div id="nCaptcha-verification" data-account="SITE_OWNER.near" data-price="0.02">
   ```
   Replace `SITE_OWNER.near` with your NEAR wallet address. You can learn more about NEAR wallets [here](https://learnnear.club/near-wallets/). The `data-price` attribute represents the cost of passing the captcha.

3. nCaptcha provides `window.nCaptchaWallet.nCaptcha.isValid` and `window.nCaptchaWallet.nCaptcha.transaction` for checking and dynamically updating the captcha validation. You can refer to the basic implementation example in the `example` directory.

### Example:

To run the example:
1. Download this repository and go to example dir
2. Install dependencies by running `npm i` (Only Parcel is required).
3. Build the example by running `npm run build`.
4. Start the example by running `npm start`.

The example will be accessible at http://localhost:1234.
