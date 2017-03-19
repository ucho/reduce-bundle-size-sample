Reduce Bundle Size Sample
======

This sample shows the result of reducing the bundle size by webpack's Tree Shaking and babel-plugin-lodash.

Results
-------

pattern|command|bundle Size
-------|-------|-----------
normal|`webpack`|403KB
tree-shaking|`webpack --env=tree-shaking`|402KB
lodash|`webpack --env=lodash`|250KB
tree-shaking + lodash|`webpack --env=tree-shaking+lodash`|249KB

Version
------

* webpack: 2.2.1
* babel-core: 6.23.1
* babel-preset-es2015: 6.22.0
* babel-plugin-lodash: 3.2.11


LICENSE
------
MIT
