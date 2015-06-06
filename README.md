# tour-of-gulp

use gulp and a maintainable gulp

## state

develop:

- not committed to vc
- not minified assets
- uses a static server, instantly test work
- code quality check (eg: jshint)
- debugging state

staging: 

- committed to vc
- deployed to some external server
- not minified assets
- no static server
- quality check will break the build

production:

- released to end-user
- minified assets
- no static server
- strict quality check, which will break the build
