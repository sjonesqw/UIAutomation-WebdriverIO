
const Page = require('./page');

class addtocart extends Page{

    get firstItemBtn () { 
        return $('//div[@id="product-0"]//button[@id="add-to-cart"]');
        
    }
    get firstItem () { 
        return $('//div[@id="product-1"]//button[@id="add-to-cart"]');
    }
    get firstItemImg (){ 
        return $('//img[@src="/images/quality-hat-model.jpg"]');
    }
    
    get thirdItemImg(){
        return $('#product-2 > div.css-5ge9zd > div > img');
    }
    get fourthItem(){
        return $('#product-3 > div.css-5ge9zd > div > img');
    }
    
    get addToCartProductPage (){
        return $('//button[@id="add-to-cart"]')
    }

    get cartItemsList (){ 
        return $('#snipcart > div > div > div.snipcart-layout__content.snipcart-layout__content--side.snipcart-cart--edit > section > ul');
    }
    
    get rmvItem () {

        return $('button[title="Remove item"]');
    }

    get secondItem (){
        return $('div[id="product-1"] input[value="1"]');
    }
    get secondItemBtn (){
        return $('//div[@id="product-1"]//button[@id="add-to-cart"]');
    }
    
    get secondItemUpArrow (){
        return $('#product-1-increase');
    }
    get secondItemDownArrow (){
        return $('#product-1-decrease');
    }
    get detailPageIncrease(){
        return $('#product-increase');
    }
    get detailPageDecrease (){
        return $('#product-decrease');
    }
    get itemCountInCart1 (){
        return $('.snipcart-item-quantity__quantity.snipcart__font--std');
    }
    get backToProducts (){
        return $('.chakra-heading.css-18j379d');
    }
    get qualityPillow (){
       return $('#product-4 > div.chakra-stack.css-n21gh5 > div > div.chakra-numberinput.css-9renge > input');
    }
    get qualityPillowBtn (){
        return $('//div[@id="product-4"]//button[@id="add-to-cart"]');
    }
    get qualityMousePad (){
        return $('#__next > div.chakra-container.css-1326l4r > div > div.css-1p34w40 > div.chakra-stack.css-egoftb > div.chakra-numberinput.css-9renge > input');
    }
    


    //add the first item from gallery page to the cart 
    
    async addSingleItem1 () {
        await this.firstItem.waitForDisplayed(1500);
        await this.firstItemImg.scrollIntoView();
        await this.firstItemBtn.click();
        await browser.pause(2000);
    }
    
    async specifyCountGalleryPage (count) {
        await this.qualityPillow.isDisplayed();
        await this.qualityPillow.click();
        await this.qualityPillow.clearValue();
        await browser.pause(2000);
        await this.qualityPillow.clearValue();
        await this.qualityPillow.setValue(count);
        await this.qualityPillowBtn.click();
        await browser.pause(5000);
        
       
    }

    async specifyCountDetailPage (count) {
        await this.thirdItemImg.isDisplayed();
        await this.thirdItemImg.click();
        await this.qualityMousePad.isDisplayed();
        await this.qualityMousePad.click();
        await this.qualityMousePad.clearValue();
        await this.qualityMousePad.setValue('6');
        await this.addToCartProductPage.click();
    }



    //increase the quantity of the item to be added to the cart using the arrows - product gallery
    async increaseSecondItemCount (count){
        for (let x=0;x<count;x++){
            await this.secondItemUpArrow.click();
        }
    }

    //decrease the quantity of the item to be added to the cart using the arrows - product gaellery
    async decreaseSecondItemCount (count){
        for (let x=0;x<count;x++){
            await this.secondItemDownArrow.click();
        }
    }

    //increase the quantity of the item to be added to the cart using the arrows - product detail page
    async increaseCountProductDetail (count){
        await this.detailPageIncrease.waitForDisplayed(1500);
        for (let x=0;x<count;x++){
            await this.detailPageIncrease.click();
        }
    }    

    //decrease the quantity of the item to be added to the cart using the arrows - product detail page
    async decreaseCountProductDetail (count){
        await this.detailPageDecrease.waitForDisplayed(1500);
        for (let x=0;x<count;x++){
            await this.detailPageDecrease.click();
        }
    } 


    open () {
        return super.open('');
        //return super.open('customer/account/create/');
    }
}

module.exports = new addtocart();