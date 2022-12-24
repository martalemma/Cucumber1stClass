package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {
	
	LoginPage  loginPage;
	@Before
    public void init() {
    	initDriver();
    	loginPage = PageFactory.initElements(driver, LoginPage.class);
    }
	@Given  ("User is on TechFios login page")
	public void user_is_on_TechFios_login_page() {
	driver.get("https://techfios.com/billing/?ng=login");
	}
	@When  ("User enters username as \"([^\"]*)\"")
	public void user_enters_username_as (String userName) {
		
		loginPage.insertUserName(userName);
	}
	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String Password)  {

		loginPage.insertPassword(Password);
	  
	}

	@When("^User cliks signin button$")
	public void user_cliks_signin_button()  {

	   loginPage.clickSignIn(); 
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page(){
		
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
	   
	}
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
		
	}

}
