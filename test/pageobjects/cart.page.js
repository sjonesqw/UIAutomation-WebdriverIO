
const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class cart extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get viewcCartSummary (){
        return $('//button[@id="top-cart"]');
        
    }
    get viewDetailCart(){ 
        return $('//button[normalize-space()="View detailed cart"]');
    }

    get deleteItem (){ 

        return $('button[title="Remove item"]');
    }

    get increaseQuantity (){ 
        return $('button[title="Increment quantity"]');
    }
     get decreaseQuantity (){ 
         return $('button[title="Decrement quantity"]');
     }

     get getQuantity(){
         return $('//*[@id="snipcart"]/div/div/div[2]/section/ul/li[1]/div/div/div[2]/div/div[2]/div[2]/div/div[1]');
     }
     get emptyCart(){
         return $('//h1[normalize-space()="Your cart is empty."]');
     }
     get productTitle (){ 
         return $('#snipcart > div > div > div.snipcart-layout__content > section > ul > li > div > div > div.snipcart-item-line__header > h2');
     }
     get productDescription (){ 
         return $('#snipcart > div > div > div.snipcart-layout__content > section > ul > li > div > div > div.snipcart-item-line__content > div > div.snipcart-item-line__info > p');
     }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async viewAndDeleteFromSummary () {
        await  this.viewcCartSummary.click();
        
        await this.deleteItemCartSummary.click();
    
        
    }
    async viewAndDeleteFromDetail () {
    
        
        await this.deleteItem.waitForDisplayed(2000);
        await this.deleteItem.click();
    
        
    }
    async changeQuantity (){
        await this.viewDetailCart.waitForDisplayed(2000);
        await this.viewDetailCart.click();
        await this.increaseQuantity.waitForDisplayed(1500);
        await this.increaseQuantity.click();
        await browser.pause(1500);
        await this.decreaseQuantity.waitForDisplayed(1500);
        await this.decreaseQuantity.click();


    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
        
    }
}

module.exports = new cart();