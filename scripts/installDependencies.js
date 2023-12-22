const { execSync } = require('child_process');
const os = require('os');

const platform = os.platform();
const arch = os.arch();

if (platform === 'darwin' && arch === 'arm64') {
  execSync('npm run install:mac');
} else if (platform === 'linux') {
  execSync('npm run install:linux');
} else {
  console.log(`Unsupported platform or architecture: ${platform}/${arch}`);
}