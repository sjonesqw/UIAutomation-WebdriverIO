
const { Key } =  require("webdriverio");
const Page = require('./page');
const testcard = "4242424242424242";
const expdate ="03/29";
const cvv = "908";



/**
 * sub page containing specific selectors and methods for a specific page
 */
class checkout extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get detailedcart(){
        //return $('button[class="snipcart-button-link"]');
        //return $('//button[normalize-space()="View detailed cart"]');
        //return $('#top-cart');
        return $('//button[@id="top-cart"]')
        
    }

    get checkoutbtn (){
        
        return $('.snipcart-button-primary.snipcart-base-button.is-icon-right');
        //$('.snipcart-button-primary.snipcart-base-button.is-icon-right')
        
    }

    get billingname (){
        
        return $('input[name="name"]');
        
    }
    get billingemail (){
        
        return $('input[name="email"]');
        
    
    }

    get billingaddress () {
        
        return $('#snipcart-billing-form > div > div:nth-child(3) > fieldset > div:nth-child(1) > div.snipcart-form__field.snipcart-form__cell--large > div > div.snipcart-textbox.snipcart__font--bold.snipcart__font--secondary.snipcart-form__select');
        
    }
    get billingaddresssuggestion(){
        return $('(//li[@class="snipcart-typeahead__suggestion snipcart-typeahead__suggestion--option snipcart__font--bold"])[3]');
    }
    get aptsuite (){
        
        return $('input[name="address2"]');
    }
    get billingcity (){

        
        return $('input[name="city"]');
    }
    get billingcountry (){
        
        return $('#snipcart-billing-form > div > div:nth-child(3) > fieldset > div:nth-child(3) > div > div > div > div > div > div');
    }

    get billingprovince (){
        
        return $('input[name="province"]');
    }
    get billingpcode () {
        
        return $('#postalCode_43f0068f-3158-4e9e-a830-94fafd7fa9dc');
    }
    get billingsubmit (){
       
        return $('button[type="submit"]'); 
    }
    get paymentiframe (){
        
        return $(".snipcart-payment-card-form snipcart-payment-card-form--loaded > iframe");
       // return $('iframe[src="https://payment.snipcart.com/form/NTYzYzIxM2EtYTU0Ni00NWQ1LTgyNDctY2ZmMDllOWI1NGIxNjM4MDE4OTIwMzY1NDYyMjc2/b7d8b7e4-bcffcdc0-dff5-4c12-af64-04146b40a062"]');
        //return $(`//iframe[contains(@src,"https://payment.snipcart.com/form")]`);
        //#snipcart-checkout-step-payment > form > div.snipcart-loading-overlay.snipcart-payment__loading > div > div.snipcart-payment__form-container > div > div.snipcart-loading-overlay > div > fieldset > div > div > iframe
        
       
    }
    get paymentfram (){
        return $('#snipcart-checkout-step-payment')
    }
    get billingcard (){
        
        return $('//*[@name="card-number"]');
        //return  $('<iframe />').contentWindow.document.getElementById('//*[@name="card-number"]');
    }
    get billingexpiry(){
        return $('#expiry-date');
    }
    get billingcvv (){
        return $('//input[@id="cvv"]');
    
    }
    get paymentbtn (){
        return $ ('button[type="submit"]');
    }

    get closeCartSummary (){
       return $('#snipcart > div > div > div.snipcart-layout__content.snipcart-layout__content--side.snipcart-cart--edit > div > button');
    }

    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkoutshipping (name, email, address,aptsuite, city,province, postalcode) {
        //await this.detailedcart.waitForDisplayed(2500);
        //await this.detailedcart.waitForClickable(2000)
        //await this.detailedcart.click();
        await this.checkoutbtn.click();
        await browser.pause(2000);
        await expect( browser.url('https://ui-automation-camp.vercel.app/products#/checkout'));
        await this.billingname.waitForDisplayed(2000);
        await this.billingname.setValue(name);
        await this.billingemail.waitForDisplayed(2000);
        await this.billingemail.setValue(email);
        await this.billingaddress.waitForDisplayed(2000);
        await this.billingaddress.click();
        await browser.keys('5');
        await browser.pause(2500);
        await this.billingaddresssuggestion.waitForExist();
        await await this.billingaddresssuggestion.click();
        await browser.pause(5000);
        

        await this.billingsubmit.click();
        ;
        
    }
    async checkoutpayment (){
        
            
        await this.billingcard.waitForDisplayed(1500);
        await this.billingcard.click();
        await this.billingcard.setValue(testcard);
        await browser.setValue('input', ['Tab']);
        await browser.keys(expdate);
        await browser.setValue('input', ['Tab']);
        await browser.keys(cvv);
        
        await this.paymentbtn.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
        
    }
}

module.exports = new checkout();