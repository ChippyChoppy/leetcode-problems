#75. Sort Colors

# Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

# We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

# You must solve this problem without using the library's sort function.

def sort_colors(nums)
    i = nums.length - 1
    while i >= 0 
        j = 0
        while j < i 
            if nums[j] > nums[j + 1]
                temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            end
            j += 1
        end 
        puts '#{nums}'
        i -= 1       
    end
    puts nums
end