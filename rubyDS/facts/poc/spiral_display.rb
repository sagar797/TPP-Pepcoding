m=ARGV[0].to_i
n=ARGV[1].to_i
ARGV.clear()
arr=[]
for i in (0..m-1)
    row=[]
    for j in (0..n-1) 
        val=gets.chomp.to_i  
        row.push(val) 
    end
    arr.push(row)
end  

puts "************************"
c=0
while(c<=m*n)
    rmin=0
    cmin=0
    rmax=arr.length-1
    cmax=arr[0].length-1;
    for i in (rmax).downto(rmin)
        puts arr[i][cmin]
        c=c+1;
    end
    cmin=cmin+1
    for i in (cmin..cmax)
        puts arr[rmin][i]
        c=c+1;
    end
    rmin=rmin+1
    for i in (rmin..rmax)
        puts arr[i][cmax]
        c=c+1;
    end
    cmax=cmax-1
    for i in (cmax).downto(cmin)
        puts arr[rmax][i]
        c=c+1;
    end
    rmax=rmax-1
end
puts "**********************"

# 11
# 12
# 13 
# 14
# 21
# 22
# 23
# 24
# 31
# 32
# 33
# 34
# 41
# 42
# 43
# 44