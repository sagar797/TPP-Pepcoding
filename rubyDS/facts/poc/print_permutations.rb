def perm(qsf,asf)
    if qsf.empty?()==true
        puts asf
        return
    end

    ch=qsf[0,1]
    roq=qsf[1,qsf.length()-1]
    for i in (0..asf.length())
        left=asf[0,i]
        right=asf[i,asf.length()]
        perm(roq, left + ch + right)
        end
    end
    perm("abc", "")