package stepDefinition;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class stepDefinition {


    @Given("^User is on Netbanking landing page$")
    public void user_is_on_Netbanking_Landing()
    {
        System.out.println("user_is_on_Netbanking_Landing");
    }

    @When("^User login into application using username and password$")
    public void User_login_into_application()
    {
        System.out.println("CUser_login_into_application");
    }

    @Then("^Home page is populated$")
    public void Home_page_populated()
    {
        System.out.println("Home_page_populated");
    }

    @And("^Cards are displayed$")
    public void Cards_are_displayed()
    {
        System.out.println("Cards_are_displayed");
    }
    @When("^User login into application using username \"([^\"]*)\" and password \"([^\"]*)\"$")
            public void User_login__application(String arg1, String arg2)
    {
        System.out.println(arg1);
        System.out.println(arg2);
    }

    @When("^User signup with following details$")
    public void User_signup(DataTable data){
        List<List<String>> obj = data.raw();
        System.out.println(obj.get(0).get(0));
        System.out.println(obj.get(0).get(1));
        System.out.println(obj.get(0).get(2));
        System.out.println(obj.get(0).get(3));
        System.out.println(obj.get(0).get(4));
    }

    @When("^User login in to application using username username(\\d+) and password password(\\d+)$")
    public void User_login_in_to_application(String username, String password) {
        System.out.println(username);
        System.out.println(password);
    }

}
