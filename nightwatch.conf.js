require('dotenv').config();

module.exports = {
    'src_folders': ['tests/tests_e2e/tests'],
    'page_objects_path': ['tests/tests_e2e/page-objects'],
    'custom_commands_path': ['tests/tests_e2e/custom-commands'],
    'webdriver': {
        'start_process': true,
        'server_path': require('chromedriver').path,
        'port': 9515
    },

    'test_settings': {
        'default': {
            'screenshots': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            'desiredCapabilities': {
                'browserName': 'chrome',
                'chromeOptions': {
                    'args': [
                      "--headless",
                      "--no-sandbox",
                      "--disable-gpu"
                    ]
                }
            }
        }
    }
};
