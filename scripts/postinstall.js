/* eslint-disable no-console, @typescript-eslint/no-var-requires */
const package = require('../package.json');

console.log(
    `You need to install the peerDependencies of ${package.name}, otherwise the ESLint plugins do not work:\n\n` +
    '    npx install-peerdeps --dev @kersvers/eslint-config\n'
);
