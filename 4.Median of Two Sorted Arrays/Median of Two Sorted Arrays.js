/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m=nums1.length,n=nums2.length,i=0,j=0,arr=[];
    while(i<m && j<n){
        if(nums1[i] <= nums2[j] && i<m){
           arr.push(nums1[i++]);
           };
        if(nums1[i] > nums2[j] && j<n){
               arr.push(nums2[j++]);
           }
    }
    while(i<m)arr.push(nums1[i++]);
    while(j<n)arr.push(nums2[j++]);
    if((m+n)%2===1){
        return arr[Math.floor((m+n)/2)];
    }
    else{
        return (arr[Math.floor((m+n)/2)]+arr[Math.floor((m+n)/2)-1])/2;
    }
};
