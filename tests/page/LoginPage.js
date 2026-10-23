export class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator('//input[@id="username"]');
        this.password = page.locator('//input[@id="password"]');
        this.button = page.locator('//input[@id="login"]');
    }

    async visitUrl() {
        await this.page.goto('https://adactinhotelapp.com/index.php');
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickButton() {
        await this.button.click();
    }
}



//this.page = page   means "Take the Playwright page I received and 
// store it inside this LoginPage object as this.page."
//this.page so that other methods can use it