const Page = require('./page');

class productGallery extends Page {

    get favouritesBtn (){
        return $('#top-favorite');
    }
    get homeBtn (){
        return $('#top-home');
    }
    get aboutBtn (){
        return $('#top-about');
    }
    get contactBtn (){
        return $('#top-contact'); 
    }
    get signOutBtn (){
        return $ ('#top-sign-out');
    }
    get favouriteHat (){
        
        return $('//div[@id="product-0"]//div[@class="css-1m8iww1"]//*[@id="add-to-favorite"]');
    }
    get hatTitle(){
        return $('#__next > div.chakra-container.css-1326l4r > div > div > div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p');
    }

    async navigateToFavourites (){
        await this.favouritesBtn.isDisplayed();
        await this.favouritesBtn.click();

    }
    async navigateToAbout (){
        await this.aboutBtn.isDisplayed();
        await this.aboutBtn.click();

    }
    async navigateToContact (){
        await this.contactBtn.isDisplayed();
        await this.contactBtn.click();
    }
    async navigateToHome (){
        await this.homeBtn.isDisplayed();
        await this.homeBtn.click();
    }

    async signOut (){
        await this.signOutBtn.isDisplayed();
        await this.signOutBtn.click();
    }
}

module.exports = new productGallery();