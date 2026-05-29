const expect = function (val) {
  return {
    toBe: function (parentVal) {
      if (parentVal === val) {
        return { value: true };
      } else {
        throw new Error("not equal");
      }
    },
    notToBe: function (childVal) {
      if (childVal !== val) {
        return { value: true };
      } else {
        throw new Error("not equal");
      }
    },
  };
};

expect(4).toBe(4);
