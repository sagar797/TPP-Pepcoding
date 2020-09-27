=begin
aa
bb
cc
dd
=end
def is_prime(num)
    div=2
    while(div*div<=num)
        if(num%div==0)
            return false
        end
        div=div+1
    end
    return true
end


# a=is_prime(11)
# puts "Number 11 is :- "+ a.to_s()


def print_all_num(num)
    for i in (2...num)
        print i
    end
end

# print_all_num(10)



def print_all_prime_num(num)
    for i in (2...num)
    # for i in (num).downto(2)
        is_status=is_prime(i)
        if(is_status)
            puts i
        end
    end
end

print_all_prime_num(10)