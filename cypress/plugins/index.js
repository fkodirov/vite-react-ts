import codeCoverageTask from '@cypress/code-coverage/task';

module.exports = (on, config) => {
  codeCoverageTask(on, config);

  // add other tasks to be registered here

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};
