
const { Key } =  require("webdriverio");
const Page = require('./page');
const testcard = "4242424242424242";
const expdate ="03/29";
const cvv = "908";




class checkout extends Page {
    
    get detailedcart(){
        
        return $('//button[@id="top-cart"]')
        
    }

    get checkoutbtn (){
        
        return $('.snipcart-button-primary.snipcart-base-button.is-icon-right');
        
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
        
       
    }
    get paymentfram (){
        return $('#snipcart-checkout-step-payment')
    }
    get billingcard (){
        
        return $('//*[@name="card-number"]');
        
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

    

    
    async checkoutshipping (name, email) {
        //inititae checkout and complete shipping information form
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
        
        //enter the payment information in billing iframe
        await this.billingcard.waitForDisplayed(1500);
        await this.billingcard.click();
        await this.billingcard.setValue(testcard);
        await browser.setValue('input', ['Tab']);
        await browser.keys(expdate);
        await browser.setValue('input', ['Tab']);
        await browser.keys(cvv);
        
        await this.paymentbtn.click();
    }


    
    open () {
        return super.open('');
        
    }
}

module.exports = new checkout();