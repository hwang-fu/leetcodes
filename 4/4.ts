function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const m = nums1.length;
    const n = nums2.length;

    // We always do binary search on the smaller array.
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    }

    // We look for the partition in `nums1`, then the partition in `nums2` will solve itself naturally.
    // `l` and `r` are exactly used for locating the partition line in `nums1`.
    let l = 0;
    let r = m;

    while (1) {
        // `partition{1|2}` combined is the total count of the elements in the left part of the merged array.
        // #(left part of the merged array) >= #(right ...)
        let partition1 = Math.floor((l + r) / 2);
        let partition2 = Math.floor((m + n + 1) / 2) - partition1;

        let maxLeft1  = (partition1 === 0) ? -Infinity : nums1[partition1-1];
        let minRight1 = (partition1 === m) ? Infinity : nums1[partition1];

        let maxLeft2  = (partition2 == 0) ? -Infinity : nums2[partition2-1];
        let minRight2 = (partition2 === n) ? Infinity : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            const maxLeft  = (maxLeft1 > maxLeft2) ? maxLeft1 : maxLeft2;
            const minRight = (minRight1 < minRight2) ? minRight1 : minRight2;
            if ((m + n) % 2 == 0) {
                return (maxLeft + minRight) / 2;
            }
            else {
                return maxLeft;
            }
        }

        if (maxLeft1 > minRight2) {
            r -= 1;
        }

        if (maxLeft2 > minRight1) {
            l += 1;
        }
    }

};

const solution1 = findMedianSortedArrays;

export {};
