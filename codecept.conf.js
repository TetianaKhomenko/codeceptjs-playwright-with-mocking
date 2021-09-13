let config = {
    tests: 'specs/*.spec.ts',
    output: './output',
    helpers: {
        Puppeteer: {
           url: 'https://www.todobackend.com/client/index.html?https://todo-backend-spring4-java8.herokuapp.com/todos',
            waitForTimeout: 5000,
            waitForNavigation: 'networkidle0',
            waitForAction: 0,
            show: false,
          },
        PlaywrightHelper: {
            require: './helpers/playwright.helper.js',
        }
    },
    include: {
        I: './steps_file.ts'
    },
    bootstrap: null,
    mocha: {},
    name: 'codeceptjs-playwright-with-mocking',
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    },
    require: ["ts-node/register"],
    testomat: {
        enabled: true,
        require: '@testomatio/reporter/lib/adapter/codecept',
        apiKey: process.env.TESTOMATIO,
      }
};



if (process.profile === "ci") {
    config.helpers.Playwright.show = false;
}

exports.config = config;
