# tour-of-gulp

how to have a maintainable gulp

## configs of each status

flags:

```json
{
    "concat": false,
    "minifiy": false,
    "strict": false,
    "cachebust": false,
    "breakOnError": false,
    "carryOther": false,
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

## gulp-load-plugins
In old style, we need to declare all requires before tasks begin, which will be a waste of time if I only want to do a single task eg `gulp html`, by using `gulp-load-plugins`, it will not load all stuff at first but lazy-load them.

## separated tasks
each task is a js file, it will be easy to index and modify.
