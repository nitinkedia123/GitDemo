package cucumberOptions;

import cucumber.api.CucumberOptions;

import java.util.AbstractQueue;

@CucumberOptions(
        features = "src/test/java/features",
        glue = "stepDefinition")
public class TestngtestRunner  {
//extends AbstractTestNGCucumberTests
}
