/*
	217. 存在重复元素
        给定一个整数数组，判断是否存在重复元素。
        如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
*/

var containsDuplicate = function(nums) {
    if (nums.length == 0 || nums == null) {
        return false;
    }
    nums.sort();
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i-1]) {
            return true;
        }
    }
    return false;
};