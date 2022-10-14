package cucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features",
        glue = "stepDefinition",dryRun = true,monochrome = true,strict = true,
        plugin = {"pretty","html:target/report.html","json:target/jsonreort.json","junit:target/xmlreport.xml"}
       )
public class testRunner {
}
