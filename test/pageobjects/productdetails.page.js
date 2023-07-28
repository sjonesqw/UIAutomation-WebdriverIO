const Page = require('./page');

class productDetails extends Page {

    get productImg (){
        return $('#product-3 > div.css-5ge9zd > div > img');
    }
    get productTitle (){
        return $('#__next > div.chakra-container.css-1326l4r > div > div.css-1p34w40 > div.chakra-stack.css-egoftb > div:nth-child(1) > h2')
    }
    get productionDescription (){
        return $('#__next > div.chakra-container.css-1326l4r > div > div.css-1p34w40 > div.chakra-stack.css-egoftb > p');
    }
    get productPrice () {
        return $('#__next > div.chakra-container.css-1326l4r > div > div.css-1p34w40 > div.chakra-stack.css-egoftb > div:nth-child(3)');
    }
    get productCategory (){
        return $('#__next > div.chakra-container.css-1326l4r > div > div.css-1p34w40 > div.chakra-stack.css-egoftb > div:nth-child(5) > span');
    }
    get addToCartBtn () {
        return $('#add-to-cart');
    }

    async verifyProductDetailsPage (){
        await this.productImg.isDisplayed()
        await this.productImg.click();
        await this.productionDescription.isDisplayed();
        //verify that the product title is dsiplayed
        await expect (this.productTitle).toHaveText("Quality Mug");
        //verify that the product desciption is displayed 
        await expect(this.productionDescription).toHaveTextContaining("Pack of 2 Company Policies Boss Employee");
        //Verify that the product price is displayed  
        await expect(this.productPrice).toHaveTextContaining("$15");
        //Verify that the product category is displayed 
        await expect(this.productCategory).toHaveText("cup");
        //Verify that the addtocart button is displayed
        await expect (this.addToCartBtn).isDisplayed;


    }
    async verifyPrice (){

    }
    // use data file to loop thru each product and verify prices and description

}

module.exports = new productDetails ();