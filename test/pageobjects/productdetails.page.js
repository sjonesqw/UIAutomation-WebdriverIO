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
        await expect (this.productTitle).toHaveText("Quality Mug");
        await expect(this.productionDescription).toHaveTextContaining("Pack of 2 Company Policies Boss Employee");
        await expect(this.productPrice).toHaveTextContaining("$15");
        await expect(this.productCategory).toHaveText("cup");
        await expect (this.addToCartBtn).isDisplayed;


    }
    async verifyPrice (){

    }
    // use data file to loop thru each product and verify prices and description

}

module.exports = new productDetails ();