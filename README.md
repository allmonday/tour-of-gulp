# tour-of-gulp

use gulp and a maintainable gulp

## configs of each status

flags:

```json
{
    "concat": false,
    "minifiy": false,
    "strict": false,  // jshint, csslint
    "cachebust": false,
    "breakOnError": false,
    "carryOther": false, // 3rd vendors
    "cachebust": false,
    "server": {
        "url": "dev.example.com",
        "port": "8080"
    }
}
```

- develop:  `local develop`
    - not committed to vc
    - not minified assets
    - uses a static server, instantly test work
    - code quality check (eg: jshint)
    - debugging state
- staging: `test server`
    - committed to vc
    - deployed to some external server
    - not minified assets
    - no static server
    - quality check will break the build
- production: `production server`
    - released to end-user
    - minified assets
    - no static server
    - strict quality check, which will break the build
