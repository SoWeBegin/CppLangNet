const {
  docsClass,
  cat,
  docsClassCat,
} = require("../../../common");

module.exports = docsClassCat("array", "std/containers/arrays/array", "since-cpp11", [
  cat("Element access"),
  "m:at",
  "op:operator_subscript",
  "m:front",
  "m:back",
  "m:data",
  cat("Iterators"),
  "m:begin",
  "m:end",
  "m:rbegin",
  "m:rend",
  cat("Capacity"),
  "m:empty",
  "m:size",
  "m:max_size",
  cat("Operations"),
  "m:fill",
  "m:swap",
  cat("Non-member functions"),
  ["f:to_array", "since-cpp20"],
]);